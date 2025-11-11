import { test, expect } from '@playwright/test';

// original jest library documentation: https://jestjs.io/docs/expect
// playwright documentation: https://playwright.dev/docs/test-assertions

test('Assertions Examples', async ({ page }) => {
  await test.step('Navigate to Landing Page', async () => {
    await page.goto('https://st2016.inv.bg/');
    await expect(page).toHaveTitle('Вход - QA Ground');
  });

  await test.step('Login', async () => {
    await page.locator('#loginusername').fill('karamfilovs@gmail.com');
    await page.locator('#loginpassword').fill('111111');
    await page.locator('#loginsubmit').click();
    await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
  });

  /* 
    Non-retrying (Synchronous) assertions:
  */
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
  expect(1).toEqual(1);
  expect('success').toBe('success');
  expect('Playwright').toContain('Play');

  /* 
    Auto-retrying (Web-First) assertions:
  */

  // element visibility:
  await expect(page.getByRole('heading', { name: 'Нова фактура' })).toBeVisible();
  await expect(page.locator('#firmPriceRounding')).toBeHidden();

  // element text assertions:
  await expect(page.getByRole('heading', { name: 'Нова фактура' })).toHaveText('Нова фактура'); // complete text
  await expect(page.getByRole('heading', { name: 'Нова фактура' })).toContainText('Нова'); // part of the text
  await expect(page.locator('.universalSearchInputIcon')).toBeEmpty(); // has no text

  // dropdown has value:
  await expect(page.locator('#payment_type')).toHaveValue('cash');
  // const locator = page.locator('id=favorite-colors');
  // await locator.selectOption(['R', 'G']);
  // await expect(locator).toHaveValues([/R/, /G/]);

  // element state assertions:
  await expect(page.locator('#client_firmname')).toBeEnabled();
  await expect(page.locator('#inv_number')).toBeDisabled();
  await expect(page.locator('#client_firmname')).toBeEditable();
  await expect(page.getByRole('checkbox', { name: 'Клиентът е физическо лице' })).not.toBeChecked();
  await expect(page.locator('#client_firmname')).not.toBeFocused();

  // element attribute assertions:
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveId('act_create');
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveAttribute('data-additional-text', 'и пренеси плащанията');
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveClass('invform_submit_btn btn_green selenium-submit-invoice');
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveCSS('color', 'rgb(255, 255, 255)');

  // Negative match (.not):
  expect(1).not.toEqual(0);
  await expect(page.getByRole('heading', { name: 'Нова фактура' })).not.toContainText('wrong text');

  // Soft assertions:
  // Make a few checks that will not stop the test when failed...
  await expect.soft(page.getByRole('heading', { name: 'Нова фактура' })).not.toContainText('wrong text');
  await expect.soft(page.getByRole('checkbox', { name: 'Клиентът е физическо лице' })).not.toBeChecked();
  await expect.soft(page.locator('#client_firmname')).not.toBeFocused();
  // ... and continue the test to check more things.
  await expect(page.getByRole('heading', { name: 'Нова фактура' })).toBeVisible();

  // custom expect messages:
  expect(56, 'Evaluate if numbers are equal').toBe(56);
  await expect.soft(page.getByRole('heading', { name: 'Нова фактура' }), 'At correct page').toBeVisible();
});
