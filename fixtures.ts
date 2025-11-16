import { test as base } from '@playwright/test';

export const test = base.extend<{}, { forEachWorker: void }>({
  forEachWorker: [
    async ({}, use) => {
      // This code runs before all the tests in the worker process.
      const workerIndex = test.info().workerIndex;
      console.log(`Starting test worker #${workerIndex}`);
      await use();
      // This code runs after all the tests in the worker process.
      console.log(`Stopping test worker #${workerIndex}`);
    },
    { scope: 'worker', auto: true }, // automatically start for every worker.
  ],
});

// export const test = base.extend<{ forEachTest: void }>({
//   forEachTest: [
//     async ({ page }, use) => {
//       // This code runs before every test.
//       await page.goto("http://localhost:8000");
//       await use();
//       // This code runs after every test.
//       console.log("Last URL:", page.url());
//     },
//     { auto: true },  // automatically start for every test.
//   ],
// });
