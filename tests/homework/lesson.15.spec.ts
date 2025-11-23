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
    async ({ sharedSteps, clientPageSteps, landingSteps }) => {
      const { faker } = await import('@faker-js/faker');
      const clientName = faker.company.name();

      await sharedSteps.navigateToLoginPage();
      await sharedSteps.login(username, password, usingEnterKey);

      await landingSteps.navigateToClientsPage();

      await clientPageSteps.navigateToNewClientPage();
      await clientPageSteps.addNewClient(clientName);
      await clientPageSteps.verifyClientIsVisible(clientName);
    },
  );
});
