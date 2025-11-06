import { test } from '@playwright/test';

// documentation: https://playwright.dev/docs/Locators
// documentation: https://playwright.dev/docs/best-practices#best-practices

test('Locator Examples', async ({ page }) => {
  await page.goto('https://st2016.inv.bg/login');
});
