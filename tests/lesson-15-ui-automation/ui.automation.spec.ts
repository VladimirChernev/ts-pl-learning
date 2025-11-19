import { test } from '@tests/steps/step.factory';

[
  {
    scenarioInfo: '',
    username: 'karamfilovs@gmail.com',
    password: '111111',
    usingEnterKey: false,
  },
  {
    scenarioInfo: ' using Enter key',
    username: 'karamfilovs@gmail.com',
    password: '111111',
    usingEnterKey: true,
  },
].forEach(({ scenarioInfo, username, password, usingEnterKey }) => {
  test(
    `Login${scenarioInfo} and Logout`,
    {
      tag: ['@possitive'],
      annotation: [
        { type: 'scenarioInfo', description: `${scenarioInfo}` },
        { type: 'username', description: `${username}` },
        { type: 'password', description: 'secret' },
        { type: 'usingEnterKey', description: `${usingEnterKey}` },
      ],
    },
    async ({ sharedSteps }) => {
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
      tag: ['@negative'],
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
    username: 'karamfilovs@gmail.com',
    password: '111111',
    fileName: 'empty.jpeg',
  },
  {
    username: 'karamfilovs@gmail.com',
    password: '111111',
    fileName: 'empty.pdf',
  },
  {
    username: 'karamfilovs@gmail.com',
    password: '111111',
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
      await landingSteps.NavigateToDocumentsPage();
      await documentsPageSteps.ClickUploadNewDocumentButton();
      await documentsPageSteps.UploadNewDocumentFile(fileName);
    },
  );
});