import { test } from '@tests/steps/step.factory';
import { Credentials } from '@lib/enums/Credentials';

[
  {
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    usingEnterKey: false,
  },
].forEach(({ username, password, usingEnterKey }) => {
  test(
    `Homework Lesson 15`,
    {
      tag: ['@possitive', '@login'],
      annotation: [
        { type: 'username', description: `${username}` },
        { type: 'password', description: 'secret' },
        { type: 'usingEnterKey', description: `${usingEnterKey}` },
      ],
    },
    async ({ sharedSteps }) => {
      const clientName = `Homework Client ${Date.now()}`;
      // add step fixtures here to gain access to ready steps
      await sharedSteps.navigateToLoginPage();
      await sharedSteps.login(username, password, usingEnterKey);
      // you may need to create new Page Object Model Classes and Steps !
      // navigate to page "Клиенти"` and verify you are on the correct page
      await sharedSteps.navigateToClientsPage();
      // click button "Нов Клиент" and verify you are on the correct page
      await sharedSteps.clickNewClientButton();
      // fill in "New Client" from's Name
      await sharedSteps.fillNewClientName(clientName);
      // click the "Запази" button
      await sharedSteps.saveNewClient();
      // Verify success message
      await sharedSteps.verifyClientSavedSuccessfully();
      // click on "Списък с Клиенти"
      await sharedSteps.openClientsList();
      // verify the newly created client is seen in the list
      await sharedSteps.verifyClientIsInList(clientName);
    },
  );
});
