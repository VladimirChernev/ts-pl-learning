
// use the code gen tool in VScode Testing tab to generate the following scenario:
// go to https://pragmatic.bg/
// hover on "Курсове"
// click on "Автоматизирано Тестване с Playwright и TypeScript"
// check the name of lecture 12
// afterwords you will have a new file in project/tests folder. Copy its contents into this file and remove the old one.


import { test, expect } from '@playwright/test';

test('Open Automation Testing Course', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');
  await page.getByRole('link', { name: 'Автоматизирано Тестване с Playwright и TypeScript' }).click();
  await page.getByRole('link', { name: 'Основи на тестването с' }).click();
  await expect(page.getByRole('heading', { name: 'Основи на тестването с' })).toBeVisible();
});