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
    async ({ sharedSteps }) => {  // add step fixtures here to gain access to ready steps
      await sharedSteps.navigateToLoginPage();
      await sharedSteps.login(username, password, usingEnterKey);
      // you may need to create new Page Object Model Classes and Steps !
      // navigate to page "Клиенти"`
      // verify you are on the correct page
      // click button "Нов Клиент"
      // verify you are on the correct page
      // fill in "New Client" from's Name
      // click the "Запази" button
      // Verify success message
      // click on "Списък с Клиенти"
      // verify the newly created client is seen in the list
    },
  );
});
