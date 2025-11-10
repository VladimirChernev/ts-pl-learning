import { test, expect } from '@playwright/test';

// https://playwright.dev/docs/test-parameterize

[
  { username: 'it-qa1', password: 'it-qa1' },
  { username: 'another-user', password: 'another-password' },
  { username: 'third-user', password: 'third-password' },
].forEach(({ username, password }) => {
  test(`Data Driven Scenario with username: ${username}`, async ({ page }) => {
    await test.step('Navigate to landing page', async () => {
      await page.goto('https://banker3-qa.test.procreditbank.bg/');
    });

    await test.step('Navigate to login page', async () => {
      await page.getByRole('link', { name: 'Login' }).click();
      await expect(page).toHaveTitle('Банкер 3 OnLine Вход в системата');
    });

    await test.step('Login', async () => {
      await page.locator('#nickName').fill(username);
      await page.locator('#password').fill(password);
      await page.locator('#submit2').click();
      const iFrame = page.locator('#b3main').contentFrame();
      await expect.soft(iFrame.getByRole('link', { name: 'Касов модул' })).toBeVisible();
    });
  });
});
