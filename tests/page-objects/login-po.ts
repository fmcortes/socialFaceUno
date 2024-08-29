import { Page } from "@playwright/test";

export class LoginPage {
  
  page: Page

  constructor(page:Page) {
    this.page = page
  }

  visit = async () => {
    await this.page.goto('/login')
  }

  login = async() => {
    await this.page.getByTestId('email-field').fill('kamui1@mail.com');
    await this.page.getByTestId('password-field').fill('kamui1');
    await this.page.getByTestId('submit-button').click();
  }

}