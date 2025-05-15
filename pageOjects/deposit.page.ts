import { Page } from "@playwright/test";

export class DepositPage {
  constructor(public readonly page: Page) {}

  async navigateTo() {
    await this.page.getByText('Deposit').click()
  }

  async depositAmount(amount: string) {
    await this.page.fill('[ng-model="amount"]', amount)
    await this.page.locator('[type="submit"]').click()
    await this.page.waitForTimeout(1000)
  }
}