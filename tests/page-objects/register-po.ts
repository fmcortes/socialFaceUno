import { Page } from '@playwright/test';

export class RegisterPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  visit = async () => {
    await this.page.goto('/auth/register');
  };
}
