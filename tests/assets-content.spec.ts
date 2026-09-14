import { test, expect } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { marchMetrics } from '../src/data/marchMetrics'
import { coffeeStrands } from '../src/data/coffee'

test('March Madness comparison exactly matches saved repository holdout rows', async ({page}) => {
  const names:Record<string,string>={logistic:'Logistic regression',rf:'Random forest',ensemble:'Ensemble'}
  for(const pipeline of ['women','men'] as const){
    const csv=readFileSync(new URL(`../docs/sources/march-${pipeline}-metrics.csv`,import.meta.url),'utf8')
    for(const line of csv.trim().split(/\r?\n/).slice(1)){
      const [split,model,,value]=line.split(',')
      if(split==='holdout'&&names[model])expect(marchMetrics[pipeline].rows.find(row=>row.model===names[model])?.value).toBe(Number(value))
    }
  }
  await page.goto('/')
  const chart=page.locator('.march-comparison')
  await expect(chart).toContainText('0.4033')
  await chart.getByRole('button',{name:'Men',exact:true}).click()
  await expect(chart.locator('.best')).toContainText('Ensemble')
  await expect(chart).toContainText('0.6224')
  await chart.getByRole('button',{name:'Women',exact:true}).click()
  await expect(chart.locator('.best')).toContainText('Logistic regression')
})

test('coffee tracks, teaching, education and Loom facts remain visible', async ({page}) => {
  await page.goto('/')
  const coffee=page.locator('#arabica')
  for(const text of ['Coffee Econometrics & Machine Learning','Seyed Ghafouri','London Business School','Difference-in-Differences','Random Forest','Gradient Boosting','19 econometric variables','NDVI','precipitation','2035','cross-validation'])await expect(coffee).toContainText(text)
  await expect(coffee.locator('.research-track')).toHaveCount(2)
  await coffee.getByRole('button',{name:'MACHINE LEARNING',exact:true}).click()
  await expect(coffee.locator('.coffee-model-flow')).toContainText('2023–2035')
  await coffee.locator('summary').click()
  await expect(coffee.locator('.coffee-findings')).toContainText('Guatemala')
  await coffee.getByRole('button',{name:'ECONOMETRICS',exact:true}).click()
  for(const date of ['2009–2012','2012–2015','2015–2018','2018–2022'])await expect(coffee.locator('.coffee-timeline')).toContainText(date)
  await expect(coffee.locator('.research-track').last()).toBeVisible()
  expect(coffeeStrands).toHaveLength(5)
  const education=page.locator('#education')
  for(const text of ['Minor in Robotics','15-122 Teaching Assistant','CMU School of Computer Science','August 2026 – Present','500+','20+','representation invariants','loop invariants','asymptotic-complexity'])await expect(education).toContainText(text)
  await expect(education.locator('.teaching .tags li')).toHaveCount(6)
  await expect(page.locator('#loom').getByRole('link',{name:/Live Demo/})).toHaveAttribute('href','https://loom-art-app.vercel.app/')
  await expect(page.locator('#loom')).toContainText('Pennsylvania Governor’s Residence — AI Policy Roundtable')
})

test('supplied galleries load valid images, preserve fit, and support enlarged views', async ({page}) => {
  await page.goto('/')
  for(const id of ['loom','wheelway','grant-planner','tang','collis']){
    const figure=page.locator(`#${id} .work-visual`)
    const choices=figure.locator('.media-choices button')
    const count=await choices.count()
    for(let i=0;i<Math.max(count,1);i++){
      if(count)await choices.nth(i).click()
      const image=figure.locator('.visual-open img')
      await image.scrollIntoViewIfNeeded()
      await expect.poll(()=>image.evaluate(node=>(node as HTMLImageElement).naturalWidth)).toBeGreaterThan(0)
      expect(await image.evaluate(node=>getComputedStyle(node).objectFit)).toBe('contain')
      await figure.locator('.visual-open').click()
      await expect(figure.locator('dialog')).toBeVisible()
      await page.keyboard.press('Escape')
    }
  }
  const screens=page.locator('#cwl .app-screen-strip img')
  await expect(screens).toHaveCount(3)
  for(const screen of await screens.all()){
    await screen.scrollIntoViewIfNeeded()
    expect(await screen.evaluate(node=>node.getBoundingClientRect().width<=136)).toBe(true)
  }
  await expect(page.locator('.diagram-node')).toHaveCount(0)
})
