import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { boardReducer, initialState } from '../src/components/connections/state'
import { initialTiles } from '../src/data/connections'
import { research } from '../src/data/research'
import { domains } from '../src/data/domains'
import { experiences } from '../src/data/experiences'

test('board state handles rapid selections, deselection, solved locks, reveal and reset', () => {
  let state = initialState
  const group = initialTiles.filter((tile) => tile.groupId === 'discovery')
  state = boardReducer(state, { type: 'submit' })
  expect(state.message).toContain('exactly four')
  state = boardReducer(state, { type: 'toggle', id: group[0].id })
  state = boardReducer(state, { type: 'toggle', id: group[0].id })
  expect(state.selected).toHaveLength(0)
  for (const tile of group) state = boardReducer(state, { type: 'toggle', id: tile.id })
  state = boardReducer(state, { type: 'submit' })
  expect(state.solved).toEqual(['discovery'])
  expect(boardReducer(state, { type: 'toggle', id: group[0].id })).toEqual(state)
  state = boardReducer(state, { type: 'reveal' })
  expect(state.solved).toHaveLength(4)
  expect(boardReducer(state, { type: 'reset' })).toEqual(initialState)
})

test('crossword includes all eight connected domains and maps to rendered work', async ({
  page,
}) => {
  await page.goto('/')
  expect(domains.map((word) => word.label)).toEqual(
    expect.arrayContaining(['MANUFACTURING', 'AI', 'ECONOMETRICS', 'FINANCE']),
  )
  const reached = new Set([domains[0].id])
  const cells = (word: (typeof domains)[number]) =>
    [...word.label].map(
      (_, i) =>
        `${word.row + (word.direction === 'down' ? i : 0)},${word.col + (word.direction === 'across' ? i : 0)}`,
    )
  for (let i = 0; i < domains.length; i++)
    for (const word of domains)
      if (
        domains.some(
          (other) =>
            reached.has(other.id) && cells(other).some((cell) => cells(word).includes(cell)),
        )
      )
        reached.add(word.id)
  expect(reached.size).toBe(8)
  for (const word of domains) {
    await page.getByRole('button', { name: word.id === 'ai' ? 'AI' : word.id, exact: true }).click()
    for (const id of word.related) await expect(page.locator(`#${id}`)).toHaveClass(/related/)
  }
})

test('every experience uses the shared reveal and every strand can be connected', async ({
  page,
}) => {
  await page.goto('/')
  for (const work of experiences) {
    for (const mode of work.modes!) {
      await page
        .locator(`#${work.id}`)
        .getByRole('button', { name: mode.label, exact: true })
        .click()
      await expect(page.locator(`#${work.id} .mode-detail`)).toHaveText(mode.detail)
    }
    await expect(page.locator(`#${work.id} .work-bullets`)).toBeVisible()
  }
  for (const work of research) {
    const widget = page.locator(`#${work.id} .strand-widget`)
    for (const strand of work.strands!) {
      if (work.strands!.length > 1)
        await widget.getByRole('button', { name: strand.title, exact: true }).click()
      await widget.locator('.strand-node').last().click()
      await expect(widget.getByRole('status')).toContainText('Next, select')
      for (let i = 0; i < strand.nodes.length; i++)
        await widget.locator('.strand-node').nth(i).click()
      await expect(widget.getByRole('status')).toHaveText(strand.result)
      await widget.getByRole('button', { name: 'Reset', exact: true }).click()
      await expect(widget.locator('.strand-node[aria-pressed="true"]')).toHaveCount(0)
      await widget.getByRole('button', { name: 'Show connections', exact: true }).click()
      await expect(widget.getByRole('status')).toHaveText(strand.result)
    }
  }
})

test('source visuals, logos, fonts, email links, and accessible enlarged view', async ({
  page,
}) => {
  await page.goto('/')
  await page.evaluate(() => document.fonts.ready)
  expect(await page.evaluate(() => document.fonts.check('16px "Instrument Sans Variable"'))).toBe(
    true,
  )
  expect(await page.evaluate(() => getComputedStyle(document.body).fontFamily)).toContain(
    'Instrument Sans',
  )
  expect(
    await page.evaluate(() => getComputedStyle(document.querySelector('h1')!).fontFamily),
  ).toContain('Newsreader')
  const logos = page.locator('.company-logo img')
  await expect(logos).toHaveCount(3)
  expect(
    await logos.evaluateAll((images) =>
      images.every(
        (image) =>
          (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0,
      ),
    ),
  ).toBe(true)
  await expect(page.locator('a[href="mailto:sprasha2@andrew.cmu.edu"]')).toBeVisible()
  await expect(page.locator('a[href="mailto:shreyaprashantha15@gmail.com"]')).toBeVisible()
  await page.getByRole('button', { name: 'Enlarge tang visual' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await expect(page.getByRole('button', { name: 'Close' })).toBeFocused()
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([])
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(page.getByRole('button', { name: 'Enlarge tang visual' })).toBeFocused()
  await expect(page.locator('body')).not.toContainText(
    /Selected work|a few connections|Following the data|Optional, of course/,
  )
})

test('full Connections play works by touch without activation', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  })
  const page = await context.newPage()
  await page.goto('http://127.0.0.1:5173')
  const first = initialTiles.filter((tile) => tile.groupId === 'physical')
  const tile = page.getByRole('button', { name: first[0].label, exact: true })
  await tile.tap()
  await expect(tile).toHaveAttribute('aria-pressed', 'true')
  await tile.tap()
  await expect(tile).toHaveAttribute('aria-pressed', 'false')
  for (const item of first) await page.getByRole('button', { name: item.label, exact: true }).tap()
  await page.getByRole('button', { name: 'Submit group' }).tap()
  await expect(page.locator('.solved-group')).toHaveCount(1)
  await expect(page.locator('.connection-tile')).toHaveCount(12)
  await page.getByRole('button', { name: 'Reveal All' }).tap()
  await expect(page.locator('.solved-group')).toHaveCount(4)
  await context.close()
})
