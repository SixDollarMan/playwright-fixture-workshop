import { Page } from "@playwright/test";

export class DepositPage {
  constructor(private readonly page: Page) {}
  
  async navigateTo() {
    await this.page.getByText('Deposit').click()
  }

  async depositToAccount(amount: number) {
    await this.page.fill('[ng-model="amount"]', amount.toString())
    await this.page.locator('button[type="submit"]').click()
    // TODO: usually a NoGo to use waitForTimeout, but for demo purposes
    await this.page.waitForTimeout(1000)
  }
}