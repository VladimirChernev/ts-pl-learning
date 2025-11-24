import { test } from '@tests/steps/step.factory';
import { Credentials } from '@lib/enums/Credentials';
import { faker } from '@faker-js/faker';

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
      tag: ['@possitive', '@login', '@newClient'],
      annotation: [
        { type: 'username', description: `${username}` },
        { type: 'password', description: 'secret' },
        { type: 'usingEnterKey', description: `${usingEnterKey}` },
      ],
    },
    async ({ sharedSteps, clientsPageSteps}) => {  // add step fixtures here to gain access to ready steps
      await sharedSteps.navigateToLoginPage();
      await sharedSteps.login(username, password, usingEnterKey);
      
      // Generate a unique client name for this test
      const clientName = faker.company.name();
      
      // navigate to page "Клиенти"
    
        await clientsPageSteps.navigateToClientsPage();
        // click button "Нов Клиент"
          await clientsPageSteps.clickNewClientButton();
      
      // fill in "New Client" form's Name
        await clientsPageSteps.fillClientName(clientName);
      
      // click the "Запази" button
        await clientsPageSteps.clickSaveButton();
      
      // Verify success message
        await clientsPageSteps.verifySuccessMessage();
      
      // click on "Списък с Клиенти"
        await clientsPageSteps.clickClientsListLink();
      
      // verify the newly created client is seen in the list
        await clientsPageSteps.verifyClientInList(clientName);
    },
  );
});
