// Open Close principle .
// Defination -> Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

// modification matlab -> purane code me changes karna / purane class ko mat cherna
// extension matlab -> naye feature ko add karna / naya class banana

abstract class PaymentMethod {
  protected readonly transactionId: string;
  constructor(transactionId: string) {
    this.transactionId = transactionId;
  }
  // Har payment provider ko apna payment logic dena hoga
  abstract pay(amount: number): void;

  // Common behavior sabke liye same hai
  protected logPayment(amount: number): void {
    console.log(
      `Transaction ${this.transactionId}: ₹${amount} payment started`,
    );
  }
}

class StripePayment extends PaymentMethod {
  constructor(transactionId: string) {
    super(transactionId);
  }
  pay(amount: number): void {
    this.logPayment(amount);
    console.log(`Processing ₹${amount} through Stripe`);
  }
}

class PaypalPayment extends PaymentMethod {
  constructor(transactionId: string) {
    super(transactionId);
  }
  pay(amount: number): void {
    this.logPayment(amount);
    console.log(`Processing ₹${amount} through Paypal`);
  }
}

class BHIMPayment extends PaymentMethod {
  constructor(transactionId: string) {
    super(transactionId);
  }
  pay(amount: number): void {
    this.logPayment(amount);
    console.log(`Processing ₹${amount} through BHIM`);
  }
}

class CheckoutService {
  processPayment(paymentMethod: PaymentMethod, amount: number): void {
    paymentMethod.pay(amount);
  }
}

const checkout = new CheckoutService();
checkout.processPayment(new StripePayment("txnn_10"), 1000);
checkout.processPayment(new PaypalPayment("txnn_11"), 2000);
checkout.processPayment(new BHIMPayment("txnn_12"), 3000);
