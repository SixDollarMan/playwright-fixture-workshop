import { test as baseTest, Page } from '@playwright/test'
import { LoginPage } from '../../page-objects/sample-solution/login.page'
import { DepositPage } from '../../page-objects/sample-solution/deposit.page'
import { TransactionsPage } from '../../page-objects/sample-solution/transactions.page'
import { WithdrawlPage } from '../../page-objects/sample-solution/withdrawl.page'
import { LocalStorageHelper } from '../../utils/localStorage'

interface TestFixtures {
  // Add any custom fixtures here
  loginPage: LoginPage
  depositPage: DepositPage
  transactionsPage: TransactionsPage
  // This is added in exercise 4
  withdrawlPage: WithdrawlPage
  // This is added in exercise 5
  newUser: LocalStorageHelper
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
  },

  // this is added in exercise 5
  newUser: [async ({ page }, use) => {
    await page.goto('')
    const localStorageHelper = await LocalStorageHelper.initialize(page)
    await localStorageHelper.addUserWithAccount()
    await use(localStorageHelper)
  }, { auto: true }],
})

export { expect } from '@playwright/test'