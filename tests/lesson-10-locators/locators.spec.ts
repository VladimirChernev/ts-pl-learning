import { test, expect } from '@playwright/test';

// documentation: https://playwright.dev/docs/locators

test('Banker Scenario', async ({ page }) => {
  await test.step('Navigate to landing page', async () => {
    await page.goto('https://banker3-qa.test.procreditbank.bg/');
  });

  await test.step('Navigate to login page', async () => {
    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveTitle('Банкер 3 OnLine Вход в системата');
  });

  // Build-in Locators:
  // find by Role:
  await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
  // find by Text and make text case sensitive:
  await expect(page.getByText('банкер 3 OnLine Вход в системата', { exact: true })).toBeVisible();
  // find by Label:
  await expect(page.getByLabel('Потребителско име')).toBeVisible();
  // find by Placeholder:
  await expect(page.getByPlaceholder('Потребителско име')).toBeVisible();
  //find by Alt text:
  await expect(page.getByAltText('ProCredit Bank')).toBeVisible();
  // find by Title:
  await expect(page.getByTitle('ProCredit Bank')).toBeVisible();
  // find by test ID (works only if the test ID is set in the HTML dom):
  await expect(page.getByTestId('nickName')).toBeVisible();

  // Custom Locators:
  // find by XPath (element type + ID):
  await expect(page.locator('//input[@id="nickName"]')).toBeVisible();
  // find by CSS (element type + ID):
  await expect(page.locator('input#nickName')).toBeVisible();
  // find by Attribute name:
  await page.locator('[name="password"]').fill('it-qa1');
  // find by Placeholder:
  await page.locator('[placeholder="Парола"]').fill('it-qa1');
  // find by Class (element type + class):
  await expect(page.locator('label.w-xs')).toBeVisible();
  // find by Text:
  await expect(page.locator('text="парола:"')).toBeVisible(); // remove the "" to make text NOT case sensitive
  // find by ID and filter by text (combination example):
  await expect(page.locator('#menuLogin').filter({ hasText: 'Login' })).toBeVisible();

  // Other Locator tricks:
  // find all elements by text:
  expect(page.locator('text=Login').all()).toBeGreaterThan(1); // notice: no auto wait!
  // these are not recommended and rely on the HTML DOM structure (use as a last resort):
  // find first element by text:
  await expect(page.locator('text=Login').first()).toBeVisible();
  // find last element by text:
  await expect(page.locator('text=Login').last()).toBeVisible();
  // find nth element by text (1 means the second element):
  await expect(page.locator('text=Login').nth(1)).toBeVisible();
});
