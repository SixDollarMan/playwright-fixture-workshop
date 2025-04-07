import { test, expect } from "../../fixtures/base";

test.describe('Banking Software Test - Customer View (with Fixtures)', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.loginAs('Hermoine Granger')
  });

  test('should deposit money and verify transaction', async ({ depositPage, transactionsPage }) => {
    const amount = 500
    
    await depositPage.navigateTo();
    await depositPage.depositToAccount(amount);
    await transactionsPage.navigateTo()
    await transactionsPage.revertSortingByDate()
    await expect(await transactionsPage.getFirstTransactionAmount()).toContainText(amount.toString());
    await expect(await transactionsPage.getFirstTransactionType()).toContainText('Credit');
  });

  // this is added with exercise 4
  test('should withdraw money and verify transaction', async ({ withdrawlPage, transactionsPage }) => {
    const amount = 100

    await withdrawlPage.navigateTo();
    await withdrawlPage.depositToAccount(amount);
    await transactionsPage.navigateTo()
    await transactionsPage.revertSortingByDate()
    await expect(await transactionsPage.getFirstTransactionAmount()).toContainText(amount.toString());
    await expect(await transactionsPage.getFirstTransactionType()).toContainText('Debit');
  });
});