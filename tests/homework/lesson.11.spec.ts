import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');
  await page.getByRole('link', { name: 'Курсове', exact: true }).hover();
  await page.locator('#menu-item-9220').getByRole('link', { name: 'Автоматизирано Тестване с' }).click();
  const locator = await page.getByRole('link', { name: 'Основи на тестването с' });
  await expect(locator).toContainText('Основи на тестването с Playwright');
});