import { test } from '@tests/steps/step.factory';
import { Credentials } from '@resources/enums/Credentials';
import { faker, ru, Faker } from '@faker-js/faker';

// API Documentation: https://api.inv.bg/v3/swagger-ui/

const customFaker = new Faker({
  locale: [ru],
});

[
  {
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    name: customFaker.commerce.product(),
    nameEn: faker.commerce.product(),
    price: faker.number.float({ max: 100, multipleOf: 0.01 }),
  },
].forEach(({ username, password, name, nameEn, price }) => {
  test(
    `API Automation`,
    {
      tag: ['@api'],
      annotation: [
        { type: 'username', description: `${username}` },
        { type: 'password', description: 'secret' },
      ],
    },
    async ({ apiSteps }) => {
      const token: string = await apiSteps.obtainAuthToken(username, password);
      const itemId: number = await apiSteps.createItem(token, name, nameEn, price);
      await apiSteps.deleteItem(token, itemId);
    },
  );
});
