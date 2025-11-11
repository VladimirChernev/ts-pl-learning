import { test, expect } from '@playwright/test';

// https://playwright.dev/docs/test-parameterize

[
  { username: 'karamfilovs@gmail.com', password: '111111' },
  { username: 'another-user', password: 'another-password' },
  { username: 'third-user', password: 'third-password' },
].forEach(({ username, password }) => {
  test(`Data Driven Scenario with username: ${username}`, async ({ page }) => {
    await test.step('Navigate to Landing Page', async () => {
      await page.goto('https://st2016.inv.bg/');
      await expect(page).toHaveTitle('Вход - QA Ground');
    });

    await test.step('Login', async () => {
      await page.locator('#loginusername').fill(username);
      await page.locator('#loginpassword').fill(password);
      await page.locator('#loginsubmit').click();
    });

    await test.step('Navigate to New Invoice Page', async () => {
      await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
      await expect.soft(page.getByRole('heading', { name: 'Нова фактура' }), 'At correct page').toBeVisible();
    });
  });
});
