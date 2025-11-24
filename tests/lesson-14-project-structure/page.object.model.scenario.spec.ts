import { test, expect } from '@playwright/test';
import  LoginPage from '@tests/pages/Login.page';
import  LandingPage from '@tests/pages/Landing.page';
import  NewInvoicePage from '@tests/pages/New.Invoice.page';

// documentation: https://playwright.dev/docs/pom

[
  { username: 'karamfilovs@gmail.com', password: '111111' },
  // { username: 'another-user', password: 'another-password' },
  // { username: 'third-user', password: 'third-password' },
].forEach(({ username, password }) => {
  test(`Page Object Model Example`, async ({ page }) => {
    // set up browser context
    const context = page.context();

    // initialize page objects
    const loginPage = new LoginPage(page, context);
    const landingPage = new LandingPage(page, context);
    const newInvoicePage = new NewInvoicePage(page, context);

    // actual test steps
    await test.step('Navigate to Login Page', async () => {
      await page.goto('https://st2016.inv.bg/');
      await expect.soft(page).toHaveTitle(loginPage.TITLE);
    });

    await test.step('Login', async () => {
      await loginPage.EMAIL_INPUT.fill(username);
      await loginPage.PASSWORD_INPUT.fill(password);
      await loginPage.LOGIN_BUTTON.click();
      await expect.soft(page).toHaveTitle(landingPage.TITLE);
    });

    await test.step('Navigate to New Invoice Page', async () => {
      await landingPage.NEW_INVOICE_BUTTON.click();
      await expect.soft(page).toHaveTitle(newInvoicePage.TITLE);
    });
  });
});
