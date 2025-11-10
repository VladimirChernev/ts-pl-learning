import { test, expect } from '@playwright/test';

// documentation: https://playwright.dev/docs/test-assertions

test('Banker Scenario', async ({ page }) => {
  await test.step('Navigate to landing page', async () => {
    await page.goto('https://banker3-qa.test.procreditbank.bg/');
  });

  await test.step('Navigate to login page', async () => {
    await page.getByRole('link', { name: 'Login' }).click();
  });

  // Non-retrying (General) assertions:
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
  expect(1).toEqual(1);
  expect('success').toBe('success');
  expect('Playwright').toContain('play');

  // Auto-retrying (Web-First) assertions:
  // element visibility:
  await expect(page.getByRole('link', { name: 'Касов модул' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Касов модул' })).toBeHidden();

  // element text assertions:
  await expect(page.getByRole('link', { name: 'Касов модул' })).toHaveText('Касов модул');
  await expect(page.getByRole('link', { name: 'Касов модул' })).toContainText('Касов');
  await expect(page.getByRole('link', { name: 'Касов модул' })).toBeEmpty(); // has no text

  // dropdown has value:
  await expect(page.getByRole('link', { name: 'Dropdown ex' })).toHaveValue('0');
  const locator = page.locator('id=favorite-colors');
  await locator.selectOption(['R', 'G']);
  await expect(locator).toHaveValues([/R/, /G/]);

  // element state assertions:
  await expect(page.getByRole('link', { name: 'Касов модул' })).toBeFocused();
  await expect(page.getByRole('link', { name: 'Касов модул' })).toBeEditable();
  await expect(page.getByRole('link', { name: 'Касов модул' })).toBeChecked();
  await expect(page.getByRole('link', { name: 'Касов модул' })).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Касов модул' })).toBeDisabled();

  // element attribute assertions:
  await expect(page.getByRole('link', { name: 'Касов модул' })).toHaveId('id');
  await expect(page.getByRole('link', { name: 'Касов модул' })).toHaveAttribute('href', '/b3main/');
  await expect(page.getByRole('link', { name: 'Касов модул' })).toHaveClass(/active/);
  await expect(page.getByRole('link', { name: 'Касов модул' })).toHaveCSS('color', 'rgb(0, 0, 0)');

  // Negative match (.not):
  expect(1).not.toEqual(0);
  await expect(page.getByRole('link', { name: 'Касов модул' })).not.toContainText('wrong text');

  // Soft assertions:
  // Make a few checks that will not stop the test when failed...
  await expect.soft(page.getByTestId('status')).toHaveText('Success');
  await expect.soft(page.getByTestId('eta')).toHaveText('1 day');
  // ... and continue the test to check more things.
  await page.getByRole('link', { name: 'next page' }).click();
  await expect.soft(page.getByRole('heading', { name: 'Make another order' })).toBeVisible();

  // custom expect messages:
  await expect(page.getByText('Name'), 'should be logged in').toBeVisible();
  expect.soft(55, 'my soft assertion').toBe(56);
});
