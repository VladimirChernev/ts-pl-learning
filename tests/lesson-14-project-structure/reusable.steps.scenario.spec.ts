import { test, BrowserContext } from '@playwright/test';
import { Steps } from '@tests/lesson-14-project-structure/Steps.steps';

let context: BrowserContext;
let steps: Steps;

test.beforeEach(async ({ page }) => {
  // set up browser context
  const context = page.context();

  // initialize steps objects
  steps = new Steps(page, context);
});

test.afterEach(async ({ page }) => {
  await context.close();
});

[
  { username: 'karamfilovs@gmail.com', password: '111111' },
  // { username: 'another-user', password: 'another-password' },
  // { username: 'third-user', password: 'third-password' },
].forEach(({ username, password }) => {
  test(`Reusable Steps Example`, async ({ page }) => {
    await steps.navigateToLoginPage();
    await steps.Login(username, password);
    await steps.NavigateToNewInvoicePage();
  });
});

[
  { username: 'karamfilovs@gmail.com', password: '111111' },
  // { username: 'another-user', password: 'another-password' },
  // { username: 'third-user', password: 'third-password' },
].forEach(({ username, password }) => {
  test(`Reusable Steps Example #2`, async ({ page }) => {
    await steps.navigateToLoginPage();
    await steps.Login(username, password);
    await steps.NavigateToNewInvoicePage();
  });
});

[
  { username: 'karamfilovs@gmail.com', password: '111111' },
  // { username: 'another-user', password: 'another-password' },
  // { username: 'third-user', password: 'third-password' },
].forEach(({ username, password }) => {
  test(`Reusable Steps Example #3`, async ({ page }) => {
    await steps.navigateToLoginPage();
    await steps.Login(username, password);
    await steps.NavigateToNewInvoicePage();
  });
});
