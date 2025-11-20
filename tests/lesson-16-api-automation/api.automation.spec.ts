import { test } from '@tests/steps/step.factory';

[
  {
    username: 'karamfilovs@gmail.com',
    password: '111111',
    fileName: 'empty.jpeg',
  },
].forEach(({ username, password, fileName }) => {
  test.only(
    `Upload Document File Type: ${fileName}`,
    {
      tag: ['@possitive', '@documents'],
      annotation: [
        { type: 'username', description: `${username}` },
        { type: 'password', description: 'secret' },
        { type: 'fileName', description: `${fileName}` },
      ],
    },
    async ({ sharedSteps, landingSteps }) => {
      await sharedSteps.navigateToLoginPage();
      await sharedSteps.login(username, password);
      await landingSteps.NavigateToDocumentsPage();
    },
  );
});
