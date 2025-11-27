import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');
  await page.getByRole('link', { name: 'Курсове', exact: true }).hover();
  await page.locator('#menu-item-9220').getByRole('link', { name: 'Автоматизирано Тестване с' }).click();
  await page.getByRole('heading', { name: 'Автоматизирано Тестване с' }).click();
});
