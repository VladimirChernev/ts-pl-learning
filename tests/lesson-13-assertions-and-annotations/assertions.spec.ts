import { test, expect } from '@playwright/test';

// original jest library documentation: https://jestjs.io/docs/expect
// playwright documentation: https://playwright.dev/docs/test-assertions

test('Assertions Examples', async ({ page }) => {
  await page.goto('https://st2016.inv.bg/');

  await page.locator('#loginusername').fill('karamfilovs@gmail.com');
  await page.locator('#loginpassword').fill('111111');

  await page.locator('#loginsubmit').click();
  await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();

  /* 
    Non-retrying (Synchronous) assertions
  */

  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
  expect(1).toEqual(1);
  expect('success').toBe('success');
  expect('Playwright').toContain('Play');

  // Polling
  expect
    .poll(
      async () => {
        return 'success';
      },
      {
        timeout: 5000,
        intervals: [1500, 3000, 4500],
      },
    )
    .toBe('success');

  /*
    Auto-retrying (Web-First) assertions
  */

  // Custom Timeout:
  await expect(page.getByRole('heading', { name: 'Нова фактура' })).toBeVisible({ timeout: 7000 });

  // check element visibility
  await expect(page.getByRole('heading', { name: 'Нова фактура' })).toBeVisible();
  await expect(page.locator('#firmPriceRounding')).toBeHidden();

  // check elemt text
  await expect(page.locator('#headline2')).toHaveText('нова фактура', { ignoreCase: true });
  await expect(page.locator('#headline2')).toContainText('фактура');
  await expect(page.locator('.icon-notifications')).toBeEmpty();

  // dropdown value assertions
  await expect(page.locator('#payment_type')).toHaveValue('cash');
  // await expect(page.locator('#payment_type')).toHaveValues(['cash', 'bank', 'card']);
  
  // element state assertions
  await expect(page.locator('#client_firmname')).toBeEnabled();
  await expect(page.locator('#inv_number')).toBeDisabled();
  await expect(page.locator('#client_firmname')).toBeEditable();
  await expect(page.locator('#client_firmname')).not.toBeFocused();
  await expect(page.locator('#is_person')).not.toBeChecked();

  // elemnt attribute assertions
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveId('act_create');
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveClass('invform_submit_btn btn_green selenium-submit-invoice');
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveAttribute('data-additional-text', 'и пренеси плащанията');
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveCSS('color', 'rgb(255, 255, 255)');
  // await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveCSS('color', '#fff');

  // Negative match (.not):
  expect(1).not.toEqual(2)
  await expect(page.locator('#client_firmname')).not.toBeFocused();

  // soft assertion
  await expect.soft(page.getByRole('heading', { name: 'Нова фактура' })).toBeVisible();
  await expect.soft(page.locator('#client_firmname')).toBeEnabled();
  await expect.soft(page.locator('#payment_type')).toHaveValue('cash');
  
  // assert comments
  expect(1, 'Check if numbers are equal').not.toEqual(2);
  await expect(page.getByRole('heading', { name: 'Нова фактура' }), 'Check if page heading is visible').toBeVisible();
});
