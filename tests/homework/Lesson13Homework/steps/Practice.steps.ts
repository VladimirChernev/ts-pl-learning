import { expect, Page } from '@playwright/test';
import { PracticePage } from '../pages/Practice.page';

export class PracticeSteps {
  private practice: PracticePage;

  constructor(page: Page) {
    this.practice = new PracticePage(page);
  }

  async navigateToPracticePage() {
    await this.practice.open();
    await expect.soft(this.practice.page).toHaveTitle('Practice Page');
  }

  async radioButtonExample() {
    await this.practice.selectRadio2();
    await expect.soft(this.practice.RADIO_OPTION2).toBeChecked();
  }
  async dropdownExample() {
    await this.practice.selectDropdownOption2();
    await expect.soft(this.practice.DROPDOWN_MENU).toHaveValue('option2');
  }

  async checkboxExample() {
    await this.practice.selectCheckbox3();
    await expect.soft(this.practice.CHECKBOX_OPTION3).toBeChecked();
  }

  async elementDisplayedExample() {
    await this.practice.hideInput();
    await expect.soft(this.practice.INPUT_ELEMENT).not.toBeVisible();
  }

  async mouseHoverExample() {
    await this.practice.hoverMouse();
    await expect.soft(this.practice.TOP_LINK).toBeVisible();
  }
  async suggessionClassExample() {
    await this.practice.enterCountry('Bulgaria');
    await this.practice.selectFirstSuggestion();
    await expect.soft(this.practice.SUGGESTION_INPUT).toHaveValue('Bulgaria');
  }
}