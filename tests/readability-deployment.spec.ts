import { test, expect } from '@playwright/test'
import { boardReducer, initialState } from '../src/components/connections/state'
import { connectionGroups, initialTiles } from '../src/data/connections'
test.use({ hasTouch: true })

test('hints cycle unsolved themes; one-away clues and guided groups preserve manual play', () => {
  expect(new Set(initialTiles.map((tile) => tile.label)).size).toBe(16)
  expect(connectionGroups.every((group) => group.terms.length === 4)).toBe(true)
  let state = initialState
  for (const group of connectionGroups) {
    state = boardReducer(state, { type: 'hint' })
    expect(state.message).toContain(group.clue)
    expect(state.selected).toHaveLength(0)
    expect(state.solved).toHaveLength(0)
    state = boardReducer(state, { type: 'hint' })
    expect(state.hinted).toHaveLength(2)
    state = boardReducer(state, { type: 'hint' })
    expect(state.hinted).toHaveLength(1)
  }
  const first = initialTiles.filter((tile) => tile.groupId === connectionGroups[0].id)
  for (const tile of first.slice(0, 3)) state = boardReducer(state, { type: 'toggle', id: tile.id })
  state = boardReducer(state, {
    type: 'toggle',
    id: initialTiles.find((tile) => tile.groupId !== first[0].groupId)!.id,
  })
  state = boardReducer(state, { type: 'submit' })
  expect(state.message).toContain('One away!')
  expect(state.solved).toHaveLength(0)
  state = boardReducer(state, { type: 'guide' })
  expect(state.selected).toHaveLength(4)
  expect(state.solved).toHaveLength(0)
  state = boardReducer(state, { type: 'submit' })
  expect(state.solved).toHaveLength(1)
  for (let i = 0; i < 4; i++) {
    state = boardReducer(state, { type: 'hint' })
    expect(state.message).not.toContain(connectionGroups[0].title)
  }
  state = boardReducer(state, { type: 'reveal' })
  expect(boardReducer(state, { type: 'hint' })).toEqual(state)
})

for (const width of [375, 430, 768, 1024, 1440]) {
  test(`readability and interaction cues at ${width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('./')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.locator('.quick-scan')).toHaveCount(0)
    await expect(page.getByText('At a glance', { exact: true })).toHaveCount(0)
    expect(await page.locator('.hero').evaluate((el) => el.nextElementSibling?.id)).toBe(
      'experience',
    )
    expect(
      await page
        .locator('.work-bullets')
        .first()
        .evaluate((el) => getComputedStyle(el).fontSize),
    ).toBe('15px')
    expect(
      await page
        .locator('.word-controls button')
        .first()
        .evaluate((el) => getComputedStyle(el).borderTopStyle),
    ).toBe('solid')
    expect(
      await page
        .locator('.award-link')
        .first()
        .evaluate((el) => getComputedStyle(el).textDecorationLine),
    ).toBe('underline')
    await page.getByRole('button', { name: 'Hint', exact: true }).tap()
    await expect(page.locator('.board-message')).toContainText('Hint:')
    await expect(page.locator('.connection-tile.selected')).toHaveCount(0)
    await page.getByRole('button', { name: 'Try a group', exact: true }).click()
    await expect(page.locator('.connection-tile.selected')).toHaveCount(4)
    await page.getByRole('button', { name: 'Submit group' }).click()
    await expect(page.locator('.solved-group')).toHaveCount(1)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    await page
      .locator('.connections-panel')
      .screenshot({ path: testInfo.outputPath(`connections-${width}.png`) })
  })
}

test('production assets, Loom destinations, and anchored refresh work at configured base', async ({
  page,
  request,
  baseURL,
}) => {
  const broken: string[] = []
  page.on('response', (response) => {
    if (response.status() >= 400) broken.push(response.url())
  })
  page.on('pageerror', (error) => broken.push(error.message))
  await page.goto('./')
  const base = new URL(baseURL!).pathname
  const checked = new Set<string>()
  for (const figure of await page.locator('.work-visual').all()) {
    const choices = figure.locator('.media-choices button')
    for (let i = 0; i < Math.max(1, await choices.count()); i++) {
      if (await choices.count()) await choices.nth(i).click()
      for (const img of await figure.locator('.visual-open img').all()) {
        await img.scrollIntoViewIfNeeded()
        await expect
          .poll(() => img.evaluate((el) => (el as HTMLImageElement).naturalWidth))
          .toBeGreaterThan(0)
        const src = await img.evaluate((el) => (el as HTMLImageElement).src)
        expect(new URL(src).pathname.startsWith(base)).toBe(true)
        checked.add(src)
      }
    }
  }
  expect(checked.size).toBe(11)
  for (const img of await page.locator('.company-logo img').all()) {
    await expect
      .poll(() => img.evaluate((el) => (el as HTMLImageElement).naturalWidth))
      .toBeGreaterThan(0)
    expect(
      new URL(await img.evaluate((el) => (el as HTMLImageElement).src)).pathname.startsWith(base),
    ).toBe(true)
  }
  const favicon = await page.locator('link[rel="icon"]').getAttribute('href')
  expect((await request.get(new URL(favicon!, baseURL).href)).ok()).toBe(true)
  await expect(page.locator('#loom').getByRole('link', { name: /Live Demo/ })).toHaveAttribute(
    'href',
    'https://loom-art-app.vercel.app/',
  )
  await expect(page.locator('#loom').getByRole('link', { name: /GitHub/ })).toHaveAttribute(
    'href',
    'https://github.com/shreyap15/loom-anti-scraping',
  )
  await page.getByRole('navigation').getByRole('link', { name: 'Projects', exact: true }).click()
  await page.reload()
  expect(new URL(page.url()).pathname).toBe(base)
  expect(new URL(page.url()).hash).toBe('#projects')
  await expect(page.locator('#projects')).toBeVisible()
  expect(broken).toEqual([])
})
