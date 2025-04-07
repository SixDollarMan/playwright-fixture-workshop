import { test as baseTest, Page } from '@playwright/test'

interface TestFixtures {
  // Add any custom fixtures here
  page: Page
}

export const test = baseTest.extend<TestFixtures>({
  page: async ({ browser }, use) => {
    // Setup here
    const context = await browser.newContext()
    const page = await context.newPage()
    // This is the part where it's added to your test
    await use(page)
    // Teardown here
    await context.close()
  },
})

export { expect } from '@playwright/test'