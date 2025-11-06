import { test, expect } from '@playwright/test';

test('Scenario Name' , async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});