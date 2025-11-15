import { Page, Locator, expect } from '@playwright/test';

export class PracticePage {
  readonly page: Page;
  readonly radio2: Locator;
  readonly autocompleteInput: Locator;
  readonly firstSuggestion: Locator;
  readonly dropdown: Locator;
  readonly checkbox3: Locator;
  readonly hideButton: Locator;
  readonly displayedInput: Locator;
  readonly hoverArea: Locator;
  readonly topLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.radio2 = page.locator('input[value="radio2"]');
    this.autocompleteInput = page.locator('#autocomplete');
    this.firstSuggestion = page.locator('.ui-menu-item div').first();
    this.dropdown = page.locator('#dropdown-class-example');
    this.checkbox3 = page.locator('#checkBoxOption3');
    this.hideButton = page.locator('#hide-textbox');
    this.displayedInput = page.locator('#displayed-text');
    this.hoverArea = page.locator('#mousehover');
    this.topLink = page.locator('text=Top');
  }

  async goto() {
    await this.page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  }

  async verifyPageTitle() {
    await expect.soft(this.page, 'Verify Page Title')
      .toHaveTitle('Practice Page');
  }

  async selectRadioButton2() {
    await this.radio2.check();
    await expect.soft(this.radio2, 'Verify Radio button #2 is checked')
      .toBeChecked();
  }

  async fillSuggestionInput(country: string) {
    await this.autocompleteInput.fill(country);
    await this.firstSuggestion.click();
    await expect.soft(
      this.autocompleteInput,
      `Verify the input value is "${country}"`
    ).toHaveValue(country);
  }

  async selectDropdownOption2() {
    await this.dropdown.selectOption('option2');
    await expect.soft(this.dropdown, 'Verify selected option is "option2"')
      .toHaveValue('option2');
  }

  async checkCheckbox3() {
    await this.checkbox3.check();
    await expect.soft(this.checkbox3, 'Verify checkbox #3 is checked')
      .toBeChecked();
  }

  async hideElement() {
    await this.hideButton.click();
    await expect.soft(this.displayedInput, 'Verify input element is hidden')
      .toBeHidden();
  }

  async hoverMouse() {
    await this.hoverArea.hover();
    await expect.soft(this.topLink, 'Verify "Top" link is visible')
      .toBeVisible();
  }
}
