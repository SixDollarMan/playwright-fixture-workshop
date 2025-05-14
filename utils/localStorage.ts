import { Page } from "@playwright/test";

type User = {
  fName: string;
  lName: string;
  postCd: string;
  id: number;
  date: string;
  accountNo: number[];
};

type Account = {
  accountNo: number, 
  currency: "Rupee" | "Dollar" | "Pound", 
  userId: number, 
  date: string, 
  amount: number
}

type AccountsMap = {
  [key: string]: Account
}

type PeopleMap = {
  [key: string]: User
};

/**
 * Helper class to manage local storage for the application.
 * 
 * @example
 * // The goto step is needed to initialize the page context and local storage
 * await page.goto('');
 * const localStorageHelper = await LocalStorageHelper.initialize(page);
 * await localStorageHelper.addUserWithAccount();
 */
export class LocalStorageHelper {
  private newUser: User
  private newAccount: Account

  private constructor(private readonly page: Page) {
    this.page = page

    this.newUser = {
      fName: 'Harald',
      lName: 'Blauzahn',
      postCd: 'E643AB',
      id: 6,
      date: Date.now().toString(),
      accountNo: [1016]
    }

    this.newAccount = {
      accountNo: 1016,
      currency: 'Dollar',
      userId: 6,
      date: Date.now().toString(),
      amount: 0
    }

  }

  static async initialize(page: Page) {
    return new LocalStorageHelper(page)
  }

  async addUserWithAccount() {
    await this.page.evaluate(({ newUser, newAccount }) => {
      const userData = localStorage.getItem('User');
      const userObject = userData ? JSON.parse(userData) : {};
      const newUsers: PeopleMap = {
        ...userObject,
        [newUser.id]: newUser
      }
      const accountData = localStorage.getItem('Account');
      const accountObject = accountData ? JSON.parse(accountData) : {};
      const newAccounts: AccountsMap = {
        ...accountObject,
        [newAccount.accountNo]: newAccount
      }
      localStorage.setItem('Account', JSON.stringify(newAccounts))
      localStorage.setItem('maxAccountId', newAccount.accountNo.toString())

      localStorage.setItem('maxUserId', newUser.id.toString())
      localStorage.setItem('User', JSON.stringify(newUsers))
    }, { newUser: this.newUser, newAccount: this.newAccount })
  }
}