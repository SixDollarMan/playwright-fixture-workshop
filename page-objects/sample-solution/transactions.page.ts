import { Locator, Page } from "@playwright/test";

export class TransactionsPage {
  constructor(private readonly page: Page) {}

  public async navigateTo() {
    await this.page.getByText('Transactions').click();
  }

  public async revertSortingByDate() {
    await this.page.locator('thead').locator('tr').locator('td:nth-of-type(1)').locator('a').click()
  }

  public async getFirstTransactionAmount(): Promise<Locator> {
    return this.page.locator('#anchor0 > td:nth-child(2)')
  }

  public async getFirstTransactionType(): Promise<Locator> {
    return this.page.locator('#anchor0 > td:nth-child(3)')
  }
}