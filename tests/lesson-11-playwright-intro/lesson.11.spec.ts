
// use the code gen tool in VScode Testing tab to generate the following scenario:
// go to https://pragmatic.bg/
// hover on "Курсове"
// click on "Автоматизирано Тестване с Playwright и TypeScript"
// check the name of lecture 12

// afterwords you will have a new file in project/tests folder. Copy its contents into this file and remove the old one.

import { test, expect } from '@playwright/test';

// documentation: https://playwright.dev/docs/writing-tests

test('Basic Scenario', async ({ page }) => {
  await page.goto('https://playwright.dev/'); // Open a new browser, context, page tab and navigate to URL
  await expect(page).toHaveTitle(/Playwright/); // Expect a "title" to contain a substring

  await page.getByRole('link', { name: 'Get started' }).click(); // Click the Get "Started" link
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible(); // Expects page to have a heading with the name "Installation"
});

test('test', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');
  await page.getByRole('link', { name: 'Курсове', exact: true }).hover();
  await page.locator('#menu-item-9220').getByRole('link', { name: 'Автоматизирано Тестване с' }).click();
  await page.getByRole('link', { name: 'Основи на тестването с' }).click();
});