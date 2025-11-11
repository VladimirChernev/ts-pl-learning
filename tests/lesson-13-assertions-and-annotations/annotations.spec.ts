// import { test, expect } from '@playwright/test';

// documentation"https://playwright.dev/docs/test-annotations

/*
  Annotations allow for basic test structure
*/

// test.describe() - creates a group of tests like a test suite. Can have nested subgroups.
// test.describe.skip - can skip whole test suites
// test.describe.parallel() - creates a test suite that forces execution of tests within in parallel
// test.use({ colorScheme: 'dark' }); - set gropup specific scenario configurations
// tags - at suite and scenario levels
// test.step() - creates a test step which can contain multiple actions for better reporting
// tet.only (run only this test, used for development purposes)
// test.skip() - creates a test that will be skipped (can be added inside a test with condition)
// test.fixme (+ comment bug:#)
// test.fail(); (check for false possitve)
// test.slow(); (triple default timeout)
