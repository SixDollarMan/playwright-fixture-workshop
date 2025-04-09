import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../../page-objects/sample-solution/login.page'
import { DepositPage } from '../../page-objects/sample-solution/deposit.page'
import { TransactionsPage } from '../../page-objects/sample-solution/transactions.page'
import { WithdrawlPage } from '../../page-objects/sample-solution/withdrawl.page'

interface TestFixtures {
  // Add any custom fixtures here
  loginPage: LoginPage
  depositPage: DepositPage
  transactionsPage: TransactionsPage
  // This is added in exercise 4
  withdrawlPage: WithdrawlPage
}

export const test = baseTest.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },

  depositPage: async ({ page }, use) => {
    await use(new DepositPage(page))
  },

  transactionsPage: async ({ page }, use) => {
    await use(new TransactionsPage(page))
  },

  // this is added in exercise 4
  withdrawlPage: async ({ page }, use) => {
    await use(new WithdrawlPage(page))
  }
})

export { expect } from '@playwright/test'