import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { initialTiles, connectionGroups } from '../src/data/connections'

test.use({ hasTouch: true })
for (const width of [375, 430, 768, 1440]) {
  test(`section accents, two-tile hints, and scan hierarchy at ${width}px`, async ({
    page,
  }, testInfo) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    await expect(page.locator('#projects')).toBeAttached()
    await page.evaluate(() => document.fonts.ready)
    expect(
      await page
        .locator('.connections-panel')
        .evaluate((el) => el.previousElementSibling?.classList.contains('project-grid')),
    ).toBe(true)
    const accents = await page
      .locator('.hero, #experience, #research, #projects')
      .evaluateAll((elements) =>
        elements.map((el) => getComputedStyle(el).getPropertyValue('--accent').trim()),
      )
    expect(accents).toEqual(['#56774b', '#56774b', '#426f86', '#725786'])
    await page.getByRole('button', { name: 'manufacturing', exact: true }).tap()
    await expect(page.locator('#tata')).toHaveClass(/related/)
    await expect(page.locator('#amd')).toHaveClass(/related/)
    const guard = page.getByRole('button', { name: 'GUARD', exact: true })
    await guard.tap()
    await expect(page.locator('#tata .mode-detail')).toContainText('500+')
    await expect(page.locator('#tata .detail-facts')).toContainText('Recovery')
    await page.keyboard.press('Tab')
    await guard.focus()
    expect(await guard.evaluate((el) => getComputedStyle(el).outlineOffset)).toBe('6px')
    for (const selector of ['.word-controls button[aria-pressed="true"]']) {
      expect(
        await page
          .locator(selector)
          .first()
          .evaluate((el) => getComputedStyle(el).backgroundColor),
      ).not.toBe('rgb(86, 119, 75)')
    }
    await expect.poll(() => page
        .locator('#tata button[aria-pressed="true"] .letter-row > span')
        .first()
        .evaluate((el) => getComputedStyle(el).backgroundColor),
    ).toBe('rgb(86, 119, 75)')
    await expect(page.locator('.project-note .award-hex')).toHaveCount(0)
    await expect(page.locator('.teaching-course a')).toHaveAttribute(
      'href',
      'https://www.cs.cmu.edu/~15122/',
    )
    await expect(page.locator('.teaching-course a')).toHaveAttribute('target', '_blank')
    await expect(page.locator('.teaching-course a')).toContainText(
      '15-122: Principles of Imperative Computation',
    )
    await expect(page.locator('#arabica .strand-tabs button')).toHaveText([
      'Econometric Analysis',
      'Machine-Learning Forecasting',
    ])
    await expect(page.locator('.project-card .award-link')).toHaveCount(3)
    await expect(page.locator('.project-card .award-link .award-hex')).toHaveCount(3)
    for (const hex of await page.locator('.project-card .award-hex').all())
      expect(await hex.evaluate((el) => el.getBoundingClientRect().width)).toBeLessThanOrEqual(20)
    for (const list of await page.locator('.experience-row .tags, .project-card .tags').all())
      expect(await list.locator('li').count()).toBeLessThanOrEqual(5)
    await expect(page.locator('.project-links a[target="_blank"]')).toHaveCount(5)
    await expect(page.locator('#loom .project-links a').first()).toHaveAttribute(
      'href',
      'https://loom-art-app.vercel.app/',
    )
    await expect(page.locator('svg.external-arrow')).toHaveCount(0)
    const hint = page.getByRole('button', { name: 'Hint', exact: true })
    await hint.tap()
    await expect(page.locator('.hinted')).toHaveCount(0)
    await hint.tap()
    await expect(page.locator('.hinted')).toHaveCount(2)
    await expect(page.locator('.connection-tile.selected')).toHaveCount(0)
    const hinted = page.locator('.hinted').first()
    expect(await hinted.evaluate((el) => getComputedStyle(el).borderTopStyle)).toBe('dashed')
    await hinted.tap()
    await expect(hinted).toHaveClass(/selected/)
    await expect(page.locator('.hinted')).toHaveCount(2)
    await page
      .locator('.connections-panel')
      .screenshot({ path: testInfo.outputPath(`hint-${width}.png`) })
    await page.getByRole('button', { name: 'Clear', exact: true }).tap()
    const first = initialTiles.filter((tile) => tile.groupId === connectionGroups[0].id)
    for (const tile of first.slice(0, 3))
      await page.getByRole('button', { name: tile.label, exact: true }).tap()
    await page
      .getByRole('button', {
        name: initialTiles.find((tile) => tile.groupId !== first[0].groupId)!.label,
        exact: true,
      })
      .tap()
    await page.getByRole('button', { name: 'Submit group', exact: true }).tap()
    await expect(page.locator('.board-message')).toContainText('One away')
    await page.getByRole('button', { name: 'Clear', exact: true }).tap()
    for (const tile of first)
      await page.getByRole('button', { name: tile.label, exact: true }).tap()
    await page.getByRole('button', { name: 'Submit group', exact: true }).tap()
    await expect(page.locator('.solved-group')).toHaveCount(1)
    await hint.tap()
    await hint.tap()
    await expect(page.locator('.hinted')).toHaveCount(2)
    for (const tile of first)
      await expect(page.getByRole('button', { name: tile.label, exact: true })).toHaveCount(0)
    await page.getByRole('button', { name: 'Reveal All', exact: true }).tap()
    await expect(page.locator('.solved-group')).toHaveCount(4)
    const solvedColors = await page
      .locator('.solved-group')
      .evaluateAll((elements) => elements.map((el) => getComputedStyle(el).backgroundColor))
    expect(new Set(solvedColors).size).toBe(4)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    const axe = await new AxeBuilder({ page })
      .include('#projects')
      .include('#experience')
      .include('#research')
      .analyze()
    expect(axe.violations).toEqual([])
    for (const id of ['tata', 'arabica', 'loom'])
      await page.locator(`#${id}`).screenshot({ path: testInfo.outputPath(`${id}-${width}.png`) })
  })
}
