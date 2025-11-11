import { test, expect } from '@playwright/test';

// https://playwright.dev/docs/api/class-test#test-describe

test.describe('Test Suite #1', () => {
  test('Scenario #1', async ({ page }) => {
    await test.step('Navigate to Landing Page', async () => {
      await page.goto('https://st2016.inv.bg/');
      await expect(page).toHaveTitle('Вход - QA Ground');
    });

    await test.step('Login', async () => {
      await page.locator('#loginusername').fill('karamfilovs@gmail.com');
      await page.locator('#loginpassword').fill('111111');
      await page.locator('#loginsubmit').click();
    });

    await test.step('Navigate to New Invoice Page', async () => {
      await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
      await expect.soft(page.getByRole('heading', { name: 'Нова фактура' }), 'At correct page').toBeVisible();
    });
  });

  test('Scenario #2', async ({ page }) => {
    await test.step('Navigate to Landing Page', async () => {
      await page.goto('https://st2016.inv.bg/');
      await expect(page).toHaveTitle('Вход - QA Ground');
    });

    await test.step('Login', async () => {
      await page.locator('#loginusername').fill('karamfilovs@gmail.com');
      await page.locator('#loginpassword').fill('111111');
      await page.locator('#loginsubmit').click();
    });

    await test.step('Navigate to New Invoice Page', async () => {
      await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
      await expect.soft(page.getByRole('heading', { name: 'Нова фактура' }), 'At correct page').toBeVisible();
    });
  });

  test('Scenario #3', async ({ page }) => {
    await test.step('Navigate to Landing Page', async () => {
      await page.goto('https://st2016.inv.bg/');
      await expect(page).toHaveTitle('Вход - QA Ground');
    });

    await test.step('Login', async () => {
      await page.locator('#loginusername').fill('karamfilovs@gmail.com');
      await page.locator('#loginpassword').fill('111111');
      await page.locator('#loginsubmit').click();
    });

    await test.step('Navigate to New Invoice Page', async () => {
      await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
      await expect.soft(page.getByRole('heading', { name: 'Нова фактура' }), 'At correct page').toBeVisible();
    });
  });
});
