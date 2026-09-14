import { test, expect } from '@playwright/test'
import { coffeeStrands } from '../src/data/coffee'

for (const width of [375, 768, 1440]) {
  test(`education, consolidated recognition, and coffee approaches at ${width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.locator('.education-main')).toContainText('GPA: 3.90 / 4.00 · Dean’s List every semester')
    await expect(page.locator('.education-main')).toContainText('Minor in Robotics')
    await expect(page.locator('.teaching')).toContainText('15-122 Teaching Assistant')
    await expect(page.locator('.teaching .work-bullets li')).toHaveCount(2)
    await expect(page.locator('.award-item')).toHaveCount(6)
    await expect(page.locator('#math-prize')).toHaveCount(0)
    await expect(page.locator('#aime')).toContainText('AMC 10 Distinction · Math Prize for Girls Invitational')
    for (const text of ['1st Place — FBLA Nationals', 'DECA International Finalist', '4× ICDC Qualifier', '2× FBLA NLC Qualifier']) await expect(page.locator('#fbla')).toContainText(text)
    await expect(page.locator('#national-merit')).toContainText('Perfect 1520 PSAT')
    await expect(page.locator('#hacking4humanity')).toContainText('Pennsylvania Governor’s Residence · AI Policy Roundtable')
    for (const [award, project] of [['ironviz','grant-planner'],['march-competition','march-madness'],['hacking4humanity','loom']]) await expect(page.locator(`#${award} a`)).toHaveAttribute('href', `#${project}`)
    const widget = page.locator('#arabica .strand-widget')
    await expect(widget.locator('.strand-tabs button')).toHaveText(['Econometric Analysis', 'Machine-Learning Forecasting'])
    for (const strand of coffeeStrands) {
      await widget.getByRole('button', { name: strand.title, exact: true }).click()
      const nodes = widget.locator('.strand-node')
      await expect(nodes).toHaveCount(strand.nodes.length)
      for (const node of await nodes.all()) await node.click()
      await expect(widget.locator('.strand-board')).toHaveClass(/complete/)
      await expect(widget.locator('.strand-result')).toHaveText(strand.result)
      const boxes = await nodes.evaluateAll(elements => elements.map(el => { const r = el.getBoundingClientRect(); return {left:r.left,right:r.right,top:r.top,bottom:r.bottom} }))
      for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
        const a=boxes[i], b=boxes[j]
        expect(a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top).toBe(true)
      }
      await widget.getByRole('button', { name: 'Reset', exact: true }).click()
      await expect(widget.locator('.connected')).toHaveCount(0)
      await widget.getByRole('button', { name: 'Show connections', exact: true }).click()
      await expect(widget.locator('.connected')).toHaveCount(strand.nodes.length)
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    await widget.screenshot({ path: testInfo.outputPath(`coffee-${width}.png`) })
    await page.locator('#recognition').screenshot({ path: testInfo.outputPath(`recognition-${width}.png`) })
  })
}
