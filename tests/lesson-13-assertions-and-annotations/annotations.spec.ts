import { test, expect } from '@playwright/test';

// documentation"https://playwright.dev/docs/test-annotations

/*
  Annotations allow for basic test structure
*/

// test.describe() - creates a test suite
// test.describe.skip - can skip whole test suites
// test.describe.parallel() - creates a test suite that forces execution of tests within in parallel
// test.step() - creates a test step which can contain multiple actions for better reporting
// tet.only (run only this test, used for development purposes)
// test.skip() - creates a test that will be skipped (can be added inside a test with condition)
// test.fixme (+ comment bug:#)
// test.fail(); (check for false possitve)
// test.slow(); (triple default timeout)

// test describe creates a test suite
test.describe('Test Suite #1', () => {
  // test.describe.skip - can skip whole test suites
  // test.skip creates a test that will be skipped
  test.skip('Scenario #1', async ({ page }) => {
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

  test('Scenario #2', async ({ page, browserName }) => {
    // skip this test if the browser is not Chromium
    test.skip(browserName !== 'chromium', 'This feature is Chromium-only');
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

    // run this test only up to here because of active bug ticket
    test.fixme(true, 'Bug #12345: This test is not working as expected');

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

// test.describe.parallel creates a test suite that forces execution of tests within in parallel
test.describe.parallel('Test Suite #2', () => {
  // test.fail creates a test that will be marked as failed always (for testing purposes to find false positives)
  test.fail('Scenario #1', async ({ page }) => {
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

  // test.only creates a custom test scope, only tests within this scope will be executed
  test.only('Scenario #2', async ({ page }) => {
    test.slow(); // this test will be marked as slow = tripple default timeout
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
