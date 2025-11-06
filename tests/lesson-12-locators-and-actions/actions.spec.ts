import { test } from '@playwright/test';

// documentation: https://playwright.dev/docs/input

test('Actions Examples', async ({ page }) => {
  await page.goto('https://st2016.inv.bg/login');
});
