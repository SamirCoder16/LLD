// Encapsulation matlab -> Data and methods ko ek sath rakhna aur unwanted access se bachana.

class BankAccount {
  private balance: number = 0;
  private accountNumber: string = "123456";

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  credit(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }

  //here we can also use getter and setter methods to access the private properties of the class.
  getAccountNumber(): string {
    return this.accountNumber;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
acc.credit(500);
console.log(acc.getBalance()); // Output: 500
