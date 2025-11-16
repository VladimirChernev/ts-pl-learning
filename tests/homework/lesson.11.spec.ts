import { test, expect } from '@playwright/test';

test('navigate to pragmatic.bg and verify lecture 12', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');

  await page.getByRole('link', { name: 'Курсове', exact: true }).hover();
  await page.locator('#menu-item-9220').getByRole('link', { name: 'Автоматизирано Тестване с' }).click();

  const lectureName = await page.getByRole('link', { name: 'Основи на тестването с' }).textContent();
  expect(lectureName).toContain('Основи на тестването с');
  await page.close();
});

// use the code gen tool in VScode Testing tab to generate the following scenario:
// go to https://pragmatic.bg/
// hover on "Курсове"
// click on "Автоматизирано Тестване с Playwright и TypeScript"
// check the name of lecture 12
// afterwords you will have a new file in project/tests folder. Copy its contents into this file and remove the old one.
