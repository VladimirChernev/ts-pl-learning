import { Page } from '@playwright/test';
import { PracticeSteps } from './Practice.steps';

export class StepFactory {
   static getPracticeSteps(page: Page) {
    return new PracticeSteps(page);
  }
}
