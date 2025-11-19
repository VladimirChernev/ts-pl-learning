// use the code gen tool in VScode Testing tab to generate the following scenario:
// go to https://pragmatic.bg/
// hover on "Курсове"
// click on "Автоматизирано Тестване с Playwright и TypeScript"
// check the name of lecture 12

// afterwords you will have a new file in project/tests folder. Copy its contents into this file and remove the old one.

import { test, expect } from '@playwright/test';

test('Homework-lesson-11 @homework11', async ({ page }) => {
  await test.step('Go to pragmatic.bg URL', async () => {
    await page.goto('https://pragmatic.bg/');
  });

  await test.step('Hover on "Курсове" menu', async () => {
    await page.getByRole('link', { name: 'Курсове' }).hover();
  });

  await test.step('Click on "Автоматизирано Тестване с Playwright и TypeScript" submenu', async () => {
    await page.locator('#menu-main-menu').getByRole('link', { name: 'Автоматизирано Тестване с Playwright и TypeScript' }).click();
  });

  await test.step('Verify the name of lecture 12', async () => {
    const expectedTitle = 'Основи на тестването с Playwright';
    const lectureLink = page.getByRole('link', { name: expectedTitle });

    await expect(lectureLink).toHaveText(expectedTitle);
  });
});
