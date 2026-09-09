// Encapsulation
// Encapsulation is an OOP principle that restricts direct access to an object's internal state and behavior,
// allowing controlled access through public methods (getters and setters).
// It helps protect the integrity of the object's data and promotes modularity and maintainability.

class BankAccount {
  // characters -> variables
  accountNumber: string;
  private balance: number;

  constructor(accountNumber: string, balance: number = 0) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  // behaviours -> methods
  deposit(amount: number): void {
    this.setBalance(amount);
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount <= 0 && amount > this.balance) {
      console.log("Insufficient balance or invalid withdrawal amount.");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    return;
  }

  checkBalance(): void {
    let balance: number = this.getBalance();
    console.log(`Current balance: ${balance}`);
  }

  // to get and set the balance we can use getter and setter methods
  private getBalance(): number {
    return this.balance;
  }

  private setBalance(amount: number): void {
    if (amount < 0) {
      console.log("Balance cannot be negative.");
    }
    this.balance += amount;
  }
}

const myAccount = new BankAccount("123456", 1000);
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.checkBalance();
