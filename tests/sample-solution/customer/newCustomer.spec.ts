import { test, expect } from "../../../fixtures/sample-solution/base";

test.describe('Banking Software Test - New Customer View (Exercise 5)', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.loginAs('Harald Blauzahn');
  });

  test('should deposit money and verify transaction', async ({ depositPage, transactionsPage }) => {
    const amount = 500
    
    await depositPage.navigateTo();
    await depositPage.depositToAccount(amount);
    await transactionsPage.navigateTo()
    await transactionsPage.revertSortingByDate()
    await expect(await transactionsPage.getFirstTransactionAmount()).toContainText(amount.toString());
    await expect(await transactionsPage.getFirstTransactionType()).toContainText('Credit');
  })
});