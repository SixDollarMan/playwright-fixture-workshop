# playwright-fixture-workshop
In this workshop you will learn to create and use fixtures for better readable and scalable tests with Playwright.

## Setup

What you need for this workshop:

- [Node.js](https://nodejs.org/en) (>=18.0.0)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Playwright Test for VSCode ](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

After you have installed the prerequisites, you can clone this repository and install the dependencies:

```
npm install
```

Install the Playwright browser binaries by running:

```
npx playwright install --with-deps
```

## Workshop Content

You can find the slides for this workshop here: Insert link as soon as available

### Exercise 1 (Syncing up Playwright Syntax)

Implement the following test case:

1. Go to the XYZ Bank website
1. Login as Hermoine Granger
1. Navigate to the Deposit page
1. Fill in 500 Dollar into the amount field
1. Submit the form
1. Navigate to the Transactions page
1. Check the first entry and verify, that it's the 500 Dollar deposit previously performed

### Exercise 2 (Syncing up Page Object Model)

Reflect on which pages would be the best to implement as page objects.

Refactor your test to fit with the Page Object Model.

Hint:

1. Create a `LoginPage` class for handling login actions.
1. Create a `UserPage` for central actions after being logged ind
1. Create a `TransactionsPage` to read out transactions
1. Create a `DepositPage` for deposing money

After implementing this, the readability of your test should already be improved.

### Exercise 3 (Page Object Fixtures)

Fixtures determine which functionality your test case will use during the declaration of the test.

Create a fixture file that allows you to use the created page objects in your tests.

Example code for this fixtures can be found here. **(insert link as soon as avaliable)**

Refactor your test to use these fixtures. How did the readability of your test case change?

Optional: Write a new case to Withdraw money from an account and verify that it was successful. Create a new Page Object for new pages used in this exercise. Use existing fixtures and extend the fixtures with the newly created page object.