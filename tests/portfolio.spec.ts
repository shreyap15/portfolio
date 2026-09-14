import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { connectionGroups, initialTiles } from '../src/data/connections'
import { domains } from '../src/data/domains'
import { experiences } from '../src/data/experiences'
import { research } from '../src/data/research'
import { projects } from '../src/data/projects'
import { recognition } from '../src/data/recognition'

test('content IDs, recognition relationships, and crossword intersections stay valid', () => {
  const items = [...experiences, ...research, ...projects, ...recognition]
  expect(new Set(items.map((item) => item.id)).size).toBe(items.length)
  for (const award of recognition)
    for (const id of award.related) {
      const project = projects.find((project) => project.id === id)
      expect(project?.recognition).toContain(award.id)
    }
  const cells = new Map<string, string>()
  for (const word of domains)
    [...word.label].forEach((letter, i) => {
      const key = `${word.row + (word.direction === 'down' ? i : 0)}-${word.col + (word.direction === 'across' ? i : 0)}`
      if (cells.has(key)) expect(cells.get(key), key).toBe(letter)
      cells.set(key, letter)
    })
  expect(initialTiles).toHaveLength(16)
  expect(new Set(initialTiles.map((tile) => tile.id)).size).toBe(16)
})

for (const width of [375, 430, 768, 1024, 1440]) {
  test(`complete content, no overflow, and accessibility at ${width}px`, async ({
    page,
  }, testInfo) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    await page.setViewportSize({ width, height: 1000 })
    await page.goto('/')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Shreya')
    for (const item of [...experiences, ...research, ...projects])
      await expect(page.locator(`#${item.id}`)).toBeVisible()
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    ).toBe(true)
    const brokenAnchors = await page.locator('a[href^="#"]').evaluateAll((links) =>
      links
        .filter((link) => {
          const hash = link.getAttribute('href')!.slice(1)
          return hash && !document.getElementById(hash)
        })
        .map((link) => link.getAttribute('href')),
    )
    expect(brokenAnchors).toEqual([])
    const accessibility = await new AxeBuilder({ page }).analyze()
    expect(accessibility.violations).toEqual([])
    expect(errors).toEqual([])
    const chart = page.locator('#tang .visual-open img')
    await chart.scrollIntoViewIfNeeded()
    await expect(chart).toBeVisible()
    await expect
      .poll(() => chart.evaluate((image) => (image as HTMLImageElement).naturalWidth))
      .toBeGreaterThan(0)
    for (const img of await page.locator('.visual-open img').all()) {
      await img.scrollIntoViewIfNeeded()
      await expect.poll(() => img.evaluate(node => (node as HTMLImageElement).naturalWidth)).toBeGreaterThan(0)
    }
    await page.evaluate(() => {
      (document.activeElement as HTMLElement)?.blur()
      window.scrollTo({ top: 0, behavior: 'instant' })
    })
    await page.screenshot({ path: testInfo.outputPath(`portfolio-${width}.png`), fullPage: true })
    await page.screenshot({ path: testInfo.outputPath(`hero-${width}.png`) })
    if ([375, 768, 1440].includes(width)) {
      for (const id of ['tata', 'cwl', 'tang', 'arabica', 'loom', 'march-madness', 'education', 'contact']) {
        await page.locator(`#${id}`).screenshot({ path: testInfo.outputPath(`${id}-${width}.png`) })
      }
    }
  })
}

test('Connections supports incorrect groups, selection limit, solving, and reset', async ({
  page,
}) => {
  await page.goto('/')
  for (const group of connectionGroups)
    await page.getByRole('button', { name: group.terms[0], exact: true }).click()
  await page.getByRole('button', { name: 'Submit group' }).click()
  await expect(page.locator('.board-message')).toContainText('span more than one group')
  await page.getByRole('button', { name: 'Personalized feeds', exact: true }).click()
  await expect(page.locator('.connection-tile[aria-pressed="true"]')).toHaveCount(4)
  await page.getByRole('button', { name: 'Clear', exact: true }).click()
  for (const group of connectionGroups) {
    for (const term of group.terms)
      await page.getByRole('button', { name: term, exact: true }).click()
    await page.getByRole('button', { name: 'Submit group' }).click()
    await expect(page.locator('.solved-group').filter({ hasText: group.title })).toBeVisible()
  }
  await expect(page.locator('.board-message')).toContainText('All four groups found')
  await expect(page.locator('.connection-tile')).toHaveCount(0)
  await page.getByRole('button', { name: 'Try again', exact: true }).click()
  await expect(page.locator('.connection-tile')).toHaveCount(16)
})

test('reveal, keyboard controls, relationship links, and reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused()
  await page.keyboard.press('Enter')
  const systems = page.getByRole('button', { name: 'systems', exact: true })
  await systems.focus()
  await page.keyboard.press('Enter')
  await expect(systems).toHaveAttribute('aria-pressed', 'true')
  await expect(page.locator('#tata')).toHaveClass(/related/)
  await page.getByRole('button', { name: 'GUARD', exact: true }).click()
  await expect(page.locator('#tata .mode-detail')).toContainText('Six-layer defense-in-depth')
  await page.getByRole('button', { name: 'HPC', exact: true }).click()
  await expect(page.locator('#amd .mode-detail')).toContainText('supercomputer deployment data')
  await page.getByRole('button', { name: 'Reveal All', exact: true }).click()
  await expect(page.locator('.solved-group')).toHaveCount(4)
  await page.getByRole('button', { name: 'Try again', exact: true }).click()
  await expect(page.locator('.connection-tile')).toHaveCount(16)
  await page.locator('#ironviz a').click()
  await expect(page).toHaveURL(/#grant-planner$/)
  await expect(page.locator('#grant-planner')).toHaveClass(/related/)
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe(
    'auto',
  )
})
