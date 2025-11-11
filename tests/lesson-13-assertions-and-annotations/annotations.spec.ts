import { test, expect } from '@playwright/test';

// documentation"https://playwright.dev/docs/test-annotations

/*
  Annotations allow for basic test structure
*/

// test.describe() - creates a group of tests like a test suite. Can have nested subgroups.
// test.describe.skip - can skip whole test suites
// test.describe.parallel() - creates a test suite that forces execution of tests within in parallel
// test.use({ colorScheme: 'dark' }); - set gropup specific scenario configurations
// tags - at suite and scenario levels
// test.step() - creates a test step which can contain multiple actions for better reporting
// tet.only (run only this test, used for development purposes)
// test.skip() - creates a test that will be skipped (can be added inside a test with condition)
// test.fixme (+ comment bug:#)
// test.fail(); (check for false possitve)
// test.slow(); (triple default timeout)

test.describe('Annotations Examples', { tag: '@sanity' }, () => {
  test.use({ baseURL: 'https://st2016.inv.bg/', colorScheme: 'light' });
  test('Scenario 1', { tag: '@smoke' }, async ({ page }) => {
    await test.step('Navigate to Landing page', async () => {
      await page.goto('/');
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
      await page.goto('/');
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
