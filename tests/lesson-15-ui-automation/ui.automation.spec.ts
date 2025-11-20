import { test } from '@tests/steps/step.factory';
import { Credentials } from '@lib/enums/credentials';

[
  // test data parametrization for 2 scenarios:
  {
    // scenario 1:
    scenarioInfo: '',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    usingEnterKey: false,
  },
  {
    // scenario 2:
    scenarioInfo: ' using Enter key',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    usingEnterKey: true,
  },
  // pass the test data params forward to the test function:
].forEach(({ scenarioInfo, username, password, usingEnterKey }) => {
  test(
    `Login${scenarioInfo} and Logout`, // test scenario title + param 'scenarioInfo' to make the title unique for each scenario
    {
      tag: ['@possitive', '@login'], // tags for scenario categorization
      annotation: [
        { type: 'scenarioInfo', description: `${scenarioInfo}` }, // annotations for better reporting
        { type: 'username', description: `${username}` },
        { type: 'password', description: 'secret' },
        { type: 'usingEnterKey', description: `${usingEnterKey}` },
      ],
    },
    // inject fixtures here to be able to use their steps in the test body:
    async ({ sharedSteps }) => {
      // test body:
      await sharedSteps.navigateToLoginPage();
      await sharedSteps.login(username, password, usingEnterKey);
      await sharedSteps.logout();
    },
  );
});

[
  {
    scenarioInfo: 'Blank Email',
    username: '',
    password: '',
    errorMessage: 'Моля, попълнете вашия email',
  },
  {
    scenarioInfo: 'Blank Password',
    username: 'test@abv.bg',
    password: '',
    errorMessage: 'Моля, попълнете вашата парола',
  },
  {
    scenarioInfo: 'Wrong Credentials',
    username: 'test@abv.bg',
    password: '123456',
    errorMessage: 'Грешно потребителско име или парола. Моля, опитайте отново.',
  },
].forEach(({ scenarioInfo, username, password, errorMessage }) => {
  test(
    `Unsuccesful Login: ${scenarioInfo}`,
    {
      tag: ['@negative', '@login'],
      annotation: [
        { type: 'scenarioInfo', description: `${scenarioInfo}` },
        { type: 'username', description: `${username}` },
        { type: 'password', description: 'secret' },
        { type: 'errorMessage', description: `${errorMessage}` },
      ],
    },
    async ({ sharedSteps }) => {
      await sharedSteps.navigateToLoginPage();
      await sharedSteps.unsuccesfulLogin(username, password, errorMessage);
    },
  );
});

[
  {
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    fileName: 'empty.jpeg',
  },
  {
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    fileName: 'empty.pdf',
  },
  {
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    fileName: 'empty.doc',
  },
].forEach(({ username, password, fileName }) => {
  test(
    `Upload Document File Type: ${fileName}`,
    {
      tag: ['@possitive', '@documents'],
      annotation: [
        { type: 'username', description: `${username}` },
        { type: 'password', description: 'secret' },
        { type: 'fileName', description: `${fileName}` },
      ],
    },
    async ({ sharedSteps, landingSteps, documentsPageSteps }) => {
      await sharedSteps.navigateToLoginPage();
      await sharedSteps.login(username, password);
      await landingSteps.navigateToDocumentsPage();
      await documentsPageSteps.clickUploadNewDocumentButton();
      await documentsPageSteps.uploadNewDocumentFile(fileName);
      await documentsPageSteps.deleteDocumentFile(fileName);
    },
  );
});
