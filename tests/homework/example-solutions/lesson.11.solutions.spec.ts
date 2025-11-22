
// use the code gen tool in VScode Testing tab to generate the following scenario:
// go to https://pragmatic.bg/
// hover on "Курсове"
// click on "Автоматизирано Тестване с Playwright и TypeScript"
// check the name of lecture 12

// afterwords you will have a new file in project/tests folder. Copy its contents into this file and remove the old one.

import { test, expect } from '@playwright/test';

test.only('test using code gen tool', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');
  await page.getByRole('link', { name: 'Курсове', exact: true }).hover(); // we had to add this one manually (or click on the element and update action to hover)
  await page.locator('#menu-item-9220').getByRole('link', { name: 'Автоматизирано Тестване с Playwright и TypeScript' }).click();
  await expect(page.locator('ol')).toContainText('Основи на тестването с Playwright'); // we had to add this one manually (or click on the element and change action to an expect )
});
