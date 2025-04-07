import test, { expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/login.page";
import { TransactionsPage } from "../../page-objects/transactions.page";
import { DepositPage } from "../../page-objects/deposit.page";

test.describe('Banking Software Test - Customer View', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto();
    await loginPage.loginAs('Hermoine Granger')
  })

  test('should deposit money and verify transaction', async ({ page }) => {
    const depositPage = new DepositPage(page);
    await depositPage.navigateTo();
    await depositPage.depositToAccount(500);
    const transactionsPage = new TransactionsPage(page)
    await transactionsPage.navigateTo()
    await transactionsPage.revertSortingByDate()
    await expect(await transactionsPage.getFirstTransactionAmount()).toContainText('500');
    await expect(await transactionsPage.getFirstTransactionType()).toContainText('Credit');
  })
});