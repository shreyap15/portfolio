import { test, expect } from '@playwright/test'

test.use({ hasTouch: true })

for (const width of [375, 430, 768, 1024, 1440]) {
  test(`refreshed research, CWL depth, and involvement at ${width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    await page.evaluate(() => document.fonts.ready)

    const biomechanics = page.locator('#research #szafron')
    await expect(page.locator('#research > article').first()).toHaveAttribute('id', 'szafron')
    await expect(biomechanics).toContainText('CMU Department of Biomechanics & Biomedical Engineering')
    await expect(biomechanics).toContainText('Research Assistant')
    await expect(biomechanics).toContainText('Prof. Jason Szafron')
    await expect(biomechanics).toContainText('Sep. 2026 – Present · Pittsburgh, PA')
    await expect(biomechanics).toContainText('automated MRI processing pipeline')
    await expect(biomechanics).toContainText('segment intervertebral discs and quantify loading asymmetries')
    await expect(biomechanics).toContainText('robotic testing of porcine spines')
    await expect(biomechanics).toContainText('idiopathic scoliosis progression')
    await expect(biomechanics.locator('button, img, .award-hex')).toHaveCount(0)
    await expect(page.locator('#research .strand-widget')).toHaveCount(3)

    const cwl = page.locator('#experience #cwl')
    await expect(cwl.locator('.work-bullets li')).toHaveCount(2)
    await expect(cwl.locator('.mode-buttons button')).toHaveText([
      /RECOMMEND/, /COLD START/, /SIGNALS/, /NLP/, /GROWTH/,
    ])
    await expect(cwl.locator('.work-bullets')).toContainText('inconsistent ordering channels')
    await expect(cwl.locator('.work-bullets')).toContainText('Neural Collaborative Filtering')
    await expect(cwl.locator('.work-bullets')).toContainText('2,500 customer survey responses')
    await expect(cwl.locator('.work-bullets')).toContainText('15% increase in Yelp visibility')
    await expect(cwl.locator('.work-bullets')).toContainText('approximately 500% more views')
    await cwl.getByRole('button', { name: 'COLD START', exact: true }).tap()
    await expect(cwl.locator('.mode-detail')).toContainText('Without a customer login')
    await cwl.getByRole('button', { name: 'SIGNALS', exact: true }).tap()
    await expect(cwl.locator('.mode-detail')).toContainText('owner knowledge')
    await expect(cwl.locator('.detail-facts')).toContainText('Domain knowledge')
    await cwl.getByRole('button', { name: 'NLP', exact: true }).tap()
    await expect(cwl.locator('.mode-detail')).toContainText('unstructured customer feedback')
    await cwl.getByRole('button', { name: 'GROWTH', exact: true }).tap()
    await expect(cwl.locator('.mode-detail')).toContainText('demographic engagement analysis')

    await expect(page.locator('.education-standing')).toContainText('GPA: 3.80 / 4.00')
    await expect(page.locator('#education #ucc')).toContainText('Undergraduate Consulting Club — Associate')
    await expect(page.locator('#ucc')).toContainText('Giant Eagle · Data Analysis & Strategy')
    await expect(page.locator('.involvement li')).toHaveCount(7)
    await expect(page.locator('.teaching .tags li')).toHaveCount(5)
    await expect(page.locator('#szafron .award-hex, #ucc .award-hex, .teaching .award-hex')).toHaveCount(0)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    for (const id of ['szafron', 'cwl', 'education']) {
      await page.locator(`#${id}`).screenshot({ path: testInfo.outputPath(`${id}-${width}.png`) })
    }
  })
}
