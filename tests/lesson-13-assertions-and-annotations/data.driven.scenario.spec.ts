import { test, expect } from '@playwright/test';

// https://playwright.dev/docs/test-parameterize

[
  { username: 'karamfilovs@gmail.com', password: '111111' },
  { username: 'secondUsername', password: '2222' },
  { username: 'thirdUsername', password: '3333' },
].forEach(({ username, password }) => {
  test(`Parametrized Scenario with: ${username}`, { tag: '@smoke' }, async ({ page }) => {
    await test.step('Navigate to Landing page', async () => {
      await page.goto('/');
    });

    await test.step('Login into System', async () => {
      await page.locator('#loginusername').fill(username);
      await page.locator('#loginpassword').fill(password);
      await page.locator('#loginsubmit').click();
      await expect(page).toHaveTitle('Система за фактуриране - QA Ground');
    });

    await test.step('Navigate to New Invoice page', async () => {
      await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
      await expect(page.getByRole('heading', { name: 'Нова фактура' })).toBeVisible();
    });
  });
});
