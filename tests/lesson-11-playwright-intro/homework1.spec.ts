import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');
  await page.locator('#menu-item-9220').getByRole('link', { name: 'Автоматизирано Тестване с' }).click();
  await expect(page.locator('#post-9199')).toContainText('Автоматизирано Тестване с Playwright и TypeScript');
  await expect(page.locator('ol')).toContainText('Основи на тестването с Playwright');
});