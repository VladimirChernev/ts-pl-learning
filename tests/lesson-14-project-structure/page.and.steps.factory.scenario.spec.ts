import { test } from '@tests/steps/step.factory';

[
  { username: 'karamfilovs@gmail.com', password: '111111' },
  // { username: 'another-user', password: 'another-password' },
  // { username: 'third-user', password: 'third-password' },
].forEach(({ username, password }) => {
  test.only(`Page and Steps Factory Scenario Example`, async ({ sharedSteps, landingSteps }) => {
    await sharedSteps.navigateToLoginPage();
    await sharedSteps.login(username, password);
    await landingSteps.NavigateToNewInvoicePage();
  });
});
