import { test } from '@tests/steps/step.factory';
import { expect } from '@playwright/test';
import { Credentials } from '@lib/enums/credentials';

[
  {
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    name: 'дъвка Turbo',
    name_en: 'chewing gum Turbo',
    price: 0.25,
  },
].forEach(({ username, password, name, name_en, price }) => {
  test(
    `Item Life Cycle`,
    {
      tag: ['@api'],
      annotation: [
        { type: 'username', description: `${username}` },
        { type: 'password', description: 'secret' },
        { type: 'name', description: `${name}` },
        { type: 'name_en', description: `${name_en}` },
        { type: 'price', description: `${price}` },
      ],
    },
    async ({ apiSteps }) => {
      // get an active api token
      const token = await apiSteps.obtainAuthToken(username, password);
      // get initial item count
      const ItemCountAtStart: number = await apiSteps.getItemsCount(token);

      // create item
      const itemId: number = await apiSteps.createItem(token, name, name_en, price);
      // Get Created Item's Details
      const itemDetails: {
        id: number;
        deleted: boolean;
        create_date: string;
        name: string;
        price: number;
        currency: string;
        price_for_quantity: number;
        quantity_unit: string;
        is_limited: boolean;
        catalog_number: string;
        outside_id: number;
      } = await apiSteps.getItem(token, itemId);
      // Verify Created Items Details
      expect.soft((itemDetails.name = name)).toBeTruthy();
      expect.soft((itemDetails.price = price)).toBeTruthy();

      // get item count after item creation
      const ItemCountAfterCreation: number = await apiSteps.getItemsCount(token);
      // verify item count has increment by 1
      expect.soft(ItemCountAtStart + 1 == ItemCountAfterCreation).toBeTruthy();

      // delete created item
      await apiSteps.deleteItem(token, itemId);

      // get item count after deleting the created item
      const ItemCountFinal: number = await apiSteps.getItemsCount(token);
      // verify final item count is equal to starting item count
      expect.soft(ItemCountAtStart == ItemCountFinal).toBeTruthy();
    },
  );
});
