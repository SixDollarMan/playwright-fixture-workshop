import { Locator, Page } from "@playwright/test";

export class TransactionsPage {
  constructor(public readonly page: Page) {}

  async navigateTo() {
        await this.page.getByText('Transactions').click()
  }

  async revertSortingByDate() {
    await this.page.locator('thead').locator('tr').locator('td:nth-of-type(1)').locator('a').click()
  }

  getFirstTransactionAmountField(): Locator {
    return this.page.locator('#anchor0').locator('td:nth-of-type(2)')
  }

  getFirstTransactionTypeField(): Locator {
    return this.page.locator('#anchor0').locator('td:nth-of-type(3)')
  }
}