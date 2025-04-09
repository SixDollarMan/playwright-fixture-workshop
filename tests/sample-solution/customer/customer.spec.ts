import test, { expect } from "@playwright/test";

test.describe('Banking Software Test - Customer View (with PageObjects)', () => {
  test.beforeEach(async ({ page }) => {
    // 1. Go to the Login Page website
    await page.goto('');
    // 2. Login as Hermoine Granger
    await page.getByText('Customer Login').click();
    await page.selectOption('#userSelect', 'Hermoine Granger');
    await page.getByText('Login').click();
  })

  test('should deposit money and verify transaction', async ({ page }) => {
    // 3. Navigate to the Deposit page
    await page.getByText('Deposit').click()
    // 4. Fill in 500 Dollar into the amount field and submit the form
    await page.fill('[ng-model="amount"]', '500')
    await page.locator('button[type="submit"]').click()
    // usually a NoGo to use waitForTimeout, but for demo purposes
    await page.waitForTimeout(1000)
    // 6. Navigate to the Transactions page
    await page.getByText('Transactions').click();
    // 7. Check the last entry and verify, that it's the 500 Dollar deposit previously performed 
    await page.locator('thead').locator('tr').locator('td:nth-of-type(1)').locator('a').click()
    await expect(page.locator('#anchor0 > td:nth-child(2)')).toContainText('500');
    await expect(page.locator('#anchor0 > td:nth-child(3)')).toContainText('Credit');
  });
});