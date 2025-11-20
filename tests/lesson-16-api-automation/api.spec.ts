import { test, expect, APIResponse } from '@playwright/test';

const apiToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmaXJtSUQiOjI4OTAwLCJ1c2VySUQiOjQsImlhdCI6MTc1NTgwMDY0NiwiZXhwIjoxNzU1ODg3MDQ2LCJzY29wZSI6WyJodW1hbiIsImFkbWluIl19.Z1UEeVkeBP2-lYGRJ5E9uLZSCmtuy4ogd0wmv02RWYE';
const defaultHeaders = {
  Accept: `application/json'`,
  'Content-Type': 'application/json',
  Authorization: `Bearer ${apiToken}`,
  'Accept-Language': 'bg',
};

[
  {
    url: 'https://api.inv.bg/v3/login/token',
    headers: {
      Accept: `application/json'`,
      'Content-Type': 'application/json',
    },
    body: {
      email: 'karamfilovs@gmail.com',
      password: '111111',
      domain: 'st2016',
    },
  },
].forEach(({ url, headers, body }) => {
  test(`Obtain Token`, { tag: ['@api'] }, async ({ request }) => {
    console.log(`POST: ${url}`);
    console.log('Request Body:\n', JSON.stringify(body, null, 2));

    const response: APIResponse = await request.post(url, {
      headers: headers,
      data: body,
    });

    const responseBody = await response.json();
    console.log('Respone Status:', response.status());
    console.log('Response Body:\n', JSON.stringify(responseBody, null, 2));

    expect(response.status()).toBe(200);
  });
});

[
  {
    url: 'https://api.inv.bg/v3/items',
    headers: defaultHeaders,
    body: {
      name: 'дъвка Turbo',
      price: 0.23,
      currency: 'BGN',
      price_for_quantity: 1,
      quantity_unit: 'кг.',
      is_limited: true,
      catalog_number: 'string',
      outside_id: 0,
      name_en: 'chewing gum Turbo',
      tags: ['tag_1', 'tag_2'],
    },
  },
].forEach(({ url, headers, body }) => {
  test(`Create item`, { tag: ['@api'] }, async ({ request }) => {
    console.log(`POST: ${url}`);
    console.log('Request Headers:\n', JSON.stringify(headers, null, 2));
    console.log('Request Body:\n', JSON.stringify(body, null, 2));

    const response: APIResponse = await request.post(url, {
      headers: headers,
      data: body,
    });

    const responseBody = await response.json();
    console.log('Respone Status:', response.status());
    console.log('Response Body:\n', JSON.stringify(responseBody, null, 2));

    expect(response.status()).toBe(201);
  });
});

[
  {
    url: 'https://api.inv.bg/v3/items',
    headers: defaultHeaders,
  },
].forEach(({ url, headers }) => {
  test(`Get items`, { tag: ['@api'] }, async ({ request }) => {
    console.log(`GET: ${url}`);
    console.log('Request Headers:\n', JSON.stringify(headers, null, 2));

    const response: APIResponse = await request.get(url, {
      headers: headers,
    });

    const responseBody = await response.json();
    console.log('Respone Status:', response.status());
    console.log('Response Body:\n', JSON.stringify(responseBody, null, 2));

    expect(response.status()).toBe(200);
  });
});

[
  {
    url: 'https://api.inv.bg/v3/items/8276',
    headers: defaultHeaders,
  },
].forEach(({ url, headers }) => {
  test(`Get item`, { tag: ['@api'] }, async ({ request }) => {
    console.log(`GET: ${url}`);
    console.log('Request Headers:\n', JSON.stringify(headers, null, 2));

    const response: APIResponse = await request.get(url, {
      headers: headers,
    });

    const responseBody = await response.json();
    console.log('Respone Status:', response.status());
    console.log('Response Body:\n', JSON.stringify(responseBody, null, 2));

    expect(response.status()).toBe(200);
  });
});

[
  {
    url: 'https://api.inv.bg/v3/items/8276',
    headers: defaultHeaders,
  },
].forEach(({ url, headers }) => {
  test(`Delete item`, { tag: ['@api'] }, async ({ request }) => {
    console.log(`DELETE: ${url}`);
    console.log('Request Headers:\n', JSON.stringify(headers, null, 2));

    const response: APIResponse = await request.delete(url, {
      headers: headers,
    });

    console.log('Respone Status:', response.status());

    expect(response.status()).toBe(204);
  });
});
