import { test, expect } from '@playwright/test';

// https://playwright.dev/docs/api/class-test#test-describe

test.describe('Test Suite Examples', () => {
  test('Scenario 1', async ({ page }) => {
    await test.step('Navigate to Landing page', async () => {
      await page.goto('https://st2016.inv.bg/');
    });

    await test.step('Login into System', async () => {
      await page.locator('#loginusername').fill('karamfilovs@gmail.com');
      await page.locator('#loginpassword').fill('111111');
      await page.locator('#loginsubmit').click();
      await expect(page).toHaveTitle('Система за фактуриране - QA Ground');
    });

    await test.step('Navigate to New Invoice page', async () => {
      await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
      await expect(page.getByRole('heading', { name: 'Нова фактура' })).toBeVisible();
    });
  });

  test('Scenario 2', async ({ page }) => {
    await test.step('Navigate to Landing page', async () => {
      await page.goto('https://st2016.inv.bg/');
    });

    await test.step('Login into System', async () => {
      await page.locator('#loginusername').fill('karamfilovs@gmail.com');
      await page.locator('#loginpassword').fill('111111');
      await page.locator('#loginsubmit').click();
      await expect(page).toHaveTitle('Система за фактуриране - QA Ground');
    });

    await test.step('Navigate to New Invoice page', async () => {
      await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
      await expect(page.getByRole('heading', { name: 'Нова фактура' })).toBeVisible();
    });
  });

  test('Scenario 3', async ({ page }) => {
    await test.step('Navigate to Landing page', async () => {
      await page.goto('https://st2016.inv.bg/');
    });

    await test.step('Login into System', async () => {
      await page.locator('#loginusername').fill('karamfilovs@gmail.com');
      await page.locator('#loginpassword').fill('111111');
      await page.locator('#loginsubmit').click();
      await expect(page).toHaveTitle('Система за фактуриране - QA Ground');
    });

    await test.step('Navigate to New Invoice page', async () => {
      await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
      await expect(page.getByRole('heading', { name: 'Нова фактура' })).toBeVisible();
    });
  });
});
