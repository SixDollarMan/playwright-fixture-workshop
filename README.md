# [Workshop] Clean and Scalable Frontend Tests with Playwright Fixtures

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

### Test scenario

We are testing a banking software for the XYZ Bank. The login is rather simple by selecting a user via dropdown. On the main screen, the user can select the account, see a list of transactions, deposit and withdrawl money from the account.
Testing the administrative functions is out of scope.

### Exercise 1 (Syncing up Playwright Syntax)

Find instructions [here](exercises/exercise1.md).

### Exercise 2 (Syncing up Page Object Model)

Find instructions [here](exercises/exercise2.md).

### Exercise 3 (Page Object Fixtures)

Find instructions [here](exercises/exercise3.md).

### Exercise 4 (Apply knowledge)

Find instructions [here](exercises/exercise4.md).