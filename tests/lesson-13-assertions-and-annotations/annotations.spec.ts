import { test, expect } from '@playwright/test';

// documentation"https://playwright.dev/docs/test-annotations

// Annotations allow for basic test structure

// test.describe() - creates a test suite
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
    await test.step('Navigate to landing page', async () => {
      await page.goto('https://banker3-qa.test.procreditbank.bg/');
    });

    await test.step('Navigate to login page', async () => {
      await page.getByRole('link', { name: 'Login' }).click();
      await expect(page).toHaveTitle('Банкер 3 OnLine Вход в системата');
    });
  });

  test('Scenario #2', async ({ page, browserName }) => {
    // skip this test if the browser is not Chromium
    test.skip(browserName !== 'chromium', 'This feature is Chromium-only');
    await test.step('Navigate to landing page', async () => {
      await page.goto('https://banker3-qa.test.procreditbank.bg/');
    });

    await test.step('Navigate to login page', async () => {
      await page.getByRole('link', { name: 'Login' }).click();
      await expect(page).toHaveTitle('Банкер 3 OnLine Вход в системата');
    });
  });

  test('Scenario #3', async ({ page }) => {
    // skip this test because of active bug ticket
    test.fixme(true, 'Bug #12345: This test is not working as expected');
    await test.step('Navigate to landing page', async () => {
      await page.goto('https://banker3-qa.test.procreditbank.bg/');
    });

    await test.step('Navigate to login page', async () => {
      await page.getByRole('link', { name: 'Login' }).click();
      await expect(page).toHaveTitle('Банкер 3 OnLine Вход в системата');
    });
  });
});

// test.describe.parallel creates a test suite that forces execution of tests within in parallel
test.describe.parallel('Test Suite #2', () => {
  // test.fail creates a test that will be marked as failed always (for testing purposes to find false positives)
  test.fail('Scenario #1', async ({ page }) => {
    await test.step('Navigate to landing page', async () => {
      await page.goto('https://banker3-qa.test.procreditbank.bg/');
    });

    await test.step('Navigate to login page', async () => {
      await page.getByRole('link', { name: 'Login' }).click();
      await expect(page).toHaveTitle('Банкер 3 OnLine Вход в системата');
    });
  });

  // test.only creates a custom test scope, only tests within this scope will be executed
  test.only('Scenario #2', async ({ page }) => {
    test.slow(); // this test will be marked as slow = tripple default timeout
    await test.step('Navigate to landing page', async () => {
      await page.goto('https://banker3-qa.test.procreditbank.bg/');
    });

    await test.step('Navigate to login page', async () => {
      await page.getByRole('link', { name: 'Login' }).click();
      await expect(page).toHaveTitle('Банкер 3 OnLine Вход в системата');
    });
  });
});
