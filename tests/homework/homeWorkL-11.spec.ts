import { test, expect, chromium } from '@playwright/test';
// use the code gen tool in VScode Testing tab to generate the following scenario:
// go to https://pragmatic.bg/
// hover on "Курсове"
// click on "Автоматизирано Тестване с Playwright и TypeScript"
// check the name of lecture 12

// afterwords you will have a new file in project/tests folder. Copy its contents into this file and remove the old one.

test('Pragmatic', async ({ page }) => {
const browser = await chromium.launch();
await page.goto('https://pragmatic.bg/');
await page.getByRole('link', { name: 'Курсове', exact: true }).click();
await page.locator('#menu-item-9220').click();
//await page.locator('#menu-item-9220').getByRole('link', { name: 'Автоматизирано Тестване с' }).click();
await page.locator("//a[contains(text(),'Основи на тестването с Playwright')]").click();
await page.locator("//h2[contains(text(),'Основи на тестването с Playwright')]").isVisible;
await expect(page.getByRole('link', { name: 'Основи на тестването с' })).toHaveText(/Основи на тестването с Playwright/);
await browser.close()
});
