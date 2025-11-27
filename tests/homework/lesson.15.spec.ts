import { test } from '@tests/steps/step.factory';
import { expect } from '@playwright/test';

import { Credentials } from '@resources/enums/Credentials';

[
  {
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    usingEnterKey: false,
    clientName: Credentials.CLIENT_NAME,
  },
].forEach(({ username, password, usingEnterKey, clientName }) => {
  test(
    `Homework Lesson 15`,
    {
      tag: ['@possitive', '@login'],
      annotation: [
        { type: 'username', description: `${username}` },
        { type: 'password', description: 'secret' },
        { type: 'usingEnterKey', description: `${usingEnterKey}` },
        { type: 'clientName', description: `${clientName}` },
      ],
    },
    async ({ sharedSteps, landingSteps, clientsPageSteps, page }) => {  // add step fixtures here to gain access to ready steps
      await sharedSteps.navigateToLoginPage();
      await sharedSteps.login(username, password, usingEnterKey);
      // navigate to page "Клиенти"`
      // verify you are on the correct page
      await landingSteps.navigateToClientsPage();
      await expect(page).toHaveTitle('Клиенти - QA Ground');
      // click button "Нов Клиент" and verify you are on the correct page
      await clientsPageSteps.addNewClient(clientName);
      await clientsPageSteps.verifyClientsList(clientName);
      //delete user 
      await clientsPageSteps.deleteUser();
    },
  );
});

