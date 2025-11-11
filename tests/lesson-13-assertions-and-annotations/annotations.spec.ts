import { test, expect } from '@playwright/test';

// documentation"https://playwright.dev/docs/test-annotations

/*
  Annotations allow for basic test structure
*/

// test.describe() - creates a test suite
// test.describe.skip - can skip whole test suites
// test.describe.parallel() - creates a test suite that forces execution of tests within in parallel
// test.step() - creates a test step which can contain multiple actions for better reporting
// tet.only (run only this test, used for development purposes)
// test.skip() - creates a test that will be skipped (can be added inside a test with condition)
// test.fixme (+ comment bug:#)
// test.fail(); (check for false possitve)
// test.slow(); (triple default timeout)
