import { test, expect } from '@playwright/test';

test('navigate to pragmatic.bg and verify lecture 12', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');

  await page.getByRole('link', { name: 'Курсове', exact: true }).hover();
  await page.locator('#menu-item-9220').getByRole('link', { name: 'Автоматизирано Тестване с' }).click();

  const lectureName = await page.getByRole('link', { name: 'Основи на тестването с' }).textContent();
  expect(lectureName).toContain('Основи на тестването с');
  await page.close();
});
