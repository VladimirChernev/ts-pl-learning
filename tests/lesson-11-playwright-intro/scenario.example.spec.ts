import { test, expect } from '@playwright/test';

// documentation: https://playwright.dev/docs/writing-tests

test('Basic Scenario', async ({ page }) => {
  await page.goto('https://st2016.inv.bg/');
  await expect(page).toHaveTitle('Вход - QA Ground');

  await page.locator('#loginusername').fill('karamfilovs@gmail.com');
  await page.locator('#loginpassword').fill('111111');
  await expect(page.getByRole('radio', { name: 'Български' })).toBeChecked();

  await page.locator('#loginsubmit').click();
  await expect(page).toHaveTitle('Система за фактуриране - QA Ground');
});
