import { test } from '@tests/steps/step.factory';
import { Credentials } from '@lib/enums/Credentials';
import { expect } from '@playwright/test';

// API Documentation: https://api.inv.bg/v3/swagger-ui/

[
  {
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    name: `Портокал-${Date.now()}`,
    nameEn: `Orange-${Date.now()}`,
    price: 0.1,
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
      // you will need to create new request methods in ApiActions and steps in ApiSteps
      // make an api request to get all items list: "GET /items" and extract "total" number from response
      const totalItems: number = await apiSteps.getAllItems(token);

      const itemId: number = await apiSteps.createItem(token, name, nameEn, price);
      // make an api request to get specific item details: "GET /items/{id}" of the item we created and verify item's name is the one we gave it
      const createdItemName = await apiSteps.getSpecificItem(token, itemId);
      expect.soft(createdItemName).toBe(name);

      // make an api request to get all items list: "GET /items" again and extract the new "total" number from response
      // compare original "total" items number to new "total" items number expecting for the new one to be incremented by 1
      const newTotalItems: number = await apiSteps.getAllItems(token);
      expect.soft(newTotalItems).toBe(totalItems + 1);

      await apiSteps.deleteItem(token, itemId);
    },
  );
});
