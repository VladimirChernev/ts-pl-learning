import{expect, Page, Locator} from '@playwright/test';
import { BasePage } from './base.page';
export class PracticePage extends BasePage {

public readonly RADIO_OPTION2: Locator;
public readonly CHECKBOX_OPTION3: Locator;
public readonly HIDE_BUTTON: Locator;
public readonly INPUT_ELEMENT: Locator;
public readonly HOVER_AREA: Locator;
public readonly TOP_LINK: Locator;

    constructor(page: Page) {
         super(page);      
   
       /* Page Variables */
     this.URL = 'https://rahulshettyacademy.com/AutomationPractice/';
     this.TITLE = 'Practice Page';

   this.RADIO_OPTION2 = this.page.getByLabel('radio2');
   this.CHECKBOX_OPTION3 = this.page.getByLabel('Option3');
   this.HIDE_BUTTON = this.page.getByRole('button', { name: 'Hide' });
   this.INPUT_ELEMENT = this.page.locator('#displayed-text');
   this.HOVER_AREA = this.page.getByRole('button', { name: 'Mouse Hover' });
   this.TOP_LINK = this.page.getByRole('link', { name: 'Top'});
    }
 async open() {
    await this.page.goto(this.URL);
    await expect.soft(this.page).toHaveTitle('Practice Page');
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

  async hoverMouse() {
    await this.HOVER_AREA.hover();
  }
}

