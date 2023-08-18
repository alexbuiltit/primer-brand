/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Testimonial', () => {
  test('Testimonial / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-testimonial--playground&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Testimonial / Avatar', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-testimonial--avatar&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Testimonial / Logo', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-testimonial--logo&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Testimonial / Duo', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-testimonial--duo&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Testimonial / Trio', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-testimonial--trio&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Testimonial / Large', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-testimonial--large&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Testimonial / Highlighted Portion', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-testimonial--highlighted-portion&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
