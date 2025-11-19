// base:
import { test as baseTest } from '../../fixtures';

// Step Definitions:
import SharedSteps from '@tests/steps/Shared.steps';
import LandingSteps from '@tests/steps/Landing.Page.steps';
import DocumentsPageSteps from '@tests/steps/Documents.Page.steps'

// Declare the types of your fixtures.
type MyFixtures = {
  sharedSteps: SharedSteps;
  landingSteps: LandingSteps;
  documentsPageSteps: DocumentsPageSteps;
};

// Extend base test by providing your page fixtures.
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
const test = baseTest.extend<MyFixtures>({
  sharedSteps: async ({ page, context }, use) => {
    await use(new SharedSteps(page, context));
  },
  landingSteps: async ({ page, context }, use) => {
    await use(new LandingSteps(page, context));
  },
  documentsPageSteps: async ({ page, context}, use) => {
    await use(new DocumentsPageSteps(page, context));
  },
});

// export default test;
export { test };
