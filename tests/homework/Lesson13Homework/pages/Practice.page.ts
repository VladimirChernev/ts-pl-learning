import { Page, Locator } from '@playwright/test';
import { BasePage } from './Base.page';
export class PracticePage extends BasePage {
  public readonly RADIO_OPTION2: Locator;
  public readonly CHECKBOX_OPTION3: Locator;
  public readonly HIDE_BUTTON: Locator;
  public readonly INPUT_ELEMENT: Locator;
  public readonly HOVER_AREA: Locator;
  public readonly SUGGESTION_INPUT: Locator;
  public readonly FIRST_SUGGESTION: Locator;
  public readonly TOP_LINK: Locator;
  public readonly DROPDOWN_MENU: Locator;

  constructor(page: Page) {
    super(page);

    /* Page Variables */
    this.URL = 'https://rahulshettyacademy.com/AutomationPractice/';
    this.TITLE = 'Practice Page';

    this.RADIO_OPTION2 = this.page.locator('label').filter({ hasText: 'Radio2' }).getByRole('radio');
    this.CHECKBOX_OPTION3 = this.page.locator('#checkBoxOption3');
    this.HIDE_BUTTON = this.page.getByRole('button', { name: 'Hide' });
    this.INPUT_ELEMENT = this.page.locator('#displayed-text');
    this.HOVER_AREA = this.page.getByRole('button', { name: 'Mouse Hover' });
    this.TOP_LINK = this.page.getByRole('link', { name: 'Top' });
    this.SUGGESTION_INPUT = this.page.locator('#autocomplete');
    this.FIRST_SUGGESTION = this.page.locator('.ui-menu-item-wrapper').first();
    this.DROPDOWN_MENU = this.page.locator('#dropdown-class-example');
  }
  async open() {
    await this.page.goto(this.URL);
  }

  async selectRadio2() {
    await this.RADIO_OPTION2.check();
  }

  async selectCheckbox3() {
    await this.CHECKBOX_OPTION3.check();
  }

  async hideInput() {
    await this.HIDE_BUTTON.click();
  }

  async selectDropdownOption2() {
    await this.DROPDOWN_MENU.selectOption('option2');
  }

  async hoverMouse() {
    await this.HOVER_AREA.hover();
  }
  async enterCountry(text: string) {
    await this.SUGGESTION_INPUT.fill(text);
  }

  async selectFirstSuggestion() {
    await this.FIRST_SUGGESTION.click();
  }
}
