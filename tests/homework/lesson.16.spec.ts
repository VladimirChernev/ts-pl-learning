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
      // make an api request to get all items list: "GET /items" and extract "total" number from response
      const itemId: number = await apiSteps.createItem(token, name, nameEn, price);
      // make an api request to get specific item details: "GET /items/{id}" of the item we created and verify item's name is the one we gave it
      // make an api request to get all items list: "GET /items" again and extract the new "total" number from response
      // compare original "total" items number to new "total" items number expecting for the new one to be incremented by 1
      await apiSteps.deleteItem(token, itemId);
    },
  );
});
