import { test, expect } from '@playwright/test';

// https://playwright.dev/docs/api/class-test#test-describe

test.describe('Test Suite #1', () => {
  test('Scenario #1', async ({ page }) => {
    await test.step('Navigate to landing page', async () => {
      await page.goto('https://banker3-qa.test.procreditbank.bg/');
    });

    await test.step('Navigate to login page', async () => {
      await page.getByRole('link', { name: 'Login' }).click();
      await expect(page).toHaveTitle('Банкер 3 OnLine Вход в системата');
    });
  });

  test('Scenario #2', async ({ page }) => {
    await test.step('Navigate to landing page', async () => {
      await page.goto('https://banker3-qa.test.procreditbank.bg/');
    });

    await test.step('Navigate to login page', async () => {
      await page.getByRole('link', { name: 'Login' }).click();
      await expect(page).toHaveTitle('Банкер 3 OnLine Вход в системата');
    });
  });

  test('Scenario #3', async ({ page }) => {
    await test.step('Navigate to landing page', async () => {
      await page.goto('https://banker3-qa.test.procreditbank.bg/');
    });

    await test.step('Navigate to login page', async () => {
      await page.getByRole('link', { name: 'Login' }).click();
      await expect(page).toHaveTitle('Банкер 3 OnLine Вход в системата');
    });
  });
});

