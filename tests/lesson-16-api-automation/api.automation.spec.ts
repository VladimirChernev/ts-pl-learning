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
    name: customFaker.commerce.product(), // return product value in russian for cyrillic testing
    nameEn: faker.commerce.product(), // return product value in english as default language. Note: this and above product name would be generated sepperately and mean different things
    price: faker.number.float({ max: 100, multipleOf: 0.01 }), // generate a price like float number for example: 10.99
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
