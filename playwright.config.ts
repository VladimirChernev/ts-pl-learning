import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests/',

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open: 'failure' }]],

  /* Maximum time one test can run for */
  timeout: 1 * 60 * 1000,

  /* Maximum time to wait for an assertion */
  expect: { timeout: 5 * 1000 }, // equals to 5 sec.

  /* Run tests in files in parallel */
  // fullyParallel: true,
  // workers: 1,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'https://st2016.inv.bg/',

    /* Browser height and width */
    // viewport: { width: 1500, height: 730 },

    /* Whether to ignore HTTPS errors when sending network requests */
    // ignoreHTTPSErrors: true,

    /* Enable File Downlaods in Chrome */
    // acceptDownloads: true,

    /* Add Report Artefacts */
    screenshot: 'only-on-failure', // Capture a screenshot upon scenario failure. Soft assertions fail scenarios at end of execution and will not screenshot the issue.
    video: 'retain-on-failure', // Captures a full video of the scenario execution.
    trace: 'retain-on-failure', // Collect trace when retrying the failed test. May cause issues in parallel execution. See https://playwright.dev/docs/trace-viewer

    /* Activates slow motion exectution in headed mode */
    launchOptions: {
      slowMo: 500,
      headless: false,
    },
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
