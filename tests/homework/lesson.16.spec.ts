import { test } from '@tests/steps/step.factory';
import { Credentials } from '@lib/enums/Credentials';
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
    `Homework Lesson 16`,
    {
      tag: ['@api'],
      annotation: [
        { type: 'username', description: `${username}` },
        { type: 'password', description: 'secret' },
      ],
    },
    async ({ apiSteps }) => {
      const token: string = await apiSteps.obtainAuthToken(username, password);
      const originalTotalResponse = await apiSteps.getTotalItems(token);
      const originalTotal = (await originalTotalResponse.json()).total;

      const itemId = await apiSteps.createItem(token, name, nameEn, price);
      await apiSteps.getItemById(token, itemId, name);

      const newTotalResponse = await apiSteps.getTotalItems(token);
      const newTotal = (await newTotalResponse.json()).total;

      await apiSteps.verifyTotalIncremented(originalTotal, newTotal);
      await apiSteps.deleteItem(token, itemId);
    },
  );
});
