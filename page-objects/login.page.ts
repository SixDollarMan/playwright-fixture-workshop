import { Page } from "@playwright/test";

export class LoginPage {

  constructor(public readonly page: Page) {}

  async goto() {
    await this.page.goto('');
  }
  
  async loginAs(username: string) {
    await this.page.getByText('Customer Login').click();
    await this.page.selectOption('#userSelect', username);
    await this.page.getByText('Login').click();
  }
}