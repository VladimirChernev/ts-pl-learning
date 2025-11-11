import { test, expect } from '@playwright/test';
// use the code gen tool in VScode Testing tab to generate the following scenario:

test('Verify the Name of Lecture 12', { tag: '@homework' }, async ({ page }) => {
  // go to https://pragmatic.bg/
  await page.goto('https://pragmatic.bg/');

  // hover on "Курсове"
  await page.getByRole('link', { name: 'Курсове', exact: true }).hover();

  // click on "Автоматизирано Тестване с Playwright и TypeScript"
  await page.locator('#menu-item-9220').getByRole('link', { name: 'Автоматизирано Тестване с Playwright и TypeScript' }).click();

  // check the name of lecture 12
  await expect(page.locator('ol')).toContainText('Основи на тестването с Playwright');
});

// afterwords you will have a new file in project/tests folder. Copy its contents into this file and remove the old one.
