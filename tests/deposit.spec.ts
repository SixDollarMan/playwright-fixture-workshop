import { test, expect } from '@playwright/test'
import { LoginPage } from '../pageOjects/login.page'
import { DepositPage } from '../pageOjects/deposit.page'
import { TransactionsPage } from '../pageOjects/transactions.page'

test.describe('Money Deposit', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.loginAs('Hermoine Granger')
  })

  test('Deposit 500 Dollar in Hermoine Grangers account', async ({ page }) => {
    const amount = '500'
    const depositPage = new DepositPage(page)
    await depositPage.navigateTo()
    await depositPage.depositAmount(amount)
    const transactionsPage = new TransactionsPage(page)
    await transactionsPage.navigateTo()
    await transactionsPage.revertSortingByDate()
    await expect(transactionsPage.getFirstTransactionAmountField()).toHaveText(amount)
    await expect(transactionsPage.getFirstTransactionTypeField()).toHaveText('Credit')
  })
})