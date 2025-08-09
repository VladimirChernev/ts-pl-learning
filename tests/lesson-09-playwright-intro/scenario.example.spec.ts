import { test, expect } from '@playwright/test';

// documentation: https://playwright.dev/docs/writing-tests

test('Basic Scenario', async ({ page }) => {
  await page.goto('https://banker3-qa.test.procreditbank.bg/');

  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page).toHaveTitle('Банкер 3 OnLine Вход в системата');

  await page.locator('#nickName').fill('it-qa1');
  await page.locator('#password').fill('it-qa1');
  await page.locator('#submit2').click();
  const iFrame = page.locator('#b3main').contentFrame();
  await expect.soft(iFrame.getByRole('link', { name: 'Касов модул' })).toBeVisible();
});
