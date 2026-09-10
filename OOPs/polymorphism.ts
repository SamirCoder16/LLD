// polymorphism easy short and best way of definition is
// the ability of an object to take on many forms.

// 1. Run time polymorphism (Method Overriding) dynamic polymorphism
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;

  add(a: any, b: any): any {
    return a + b;
  }
}

const calculator = new Calculator();

console.log(calculator.add(10, 20)); // 30
console.log(calculator.add("Hello ", "Bro")); // Hello Bro

// 2. Compile time polymorphism (Method Overloading) static polymorphism
class Payment {
  pay(): void {
    console.log("Generic payment");
  }
}

class StripePayment extends Payment {
  override pay(): void {
    console.log("Payment through Stripe");
  }
}

class RazorpayPayment extends Payment {
  override pay(): void {
    console.log("Payment through Razorpay");
  }
}

const payment1: Payment = new StripePayment();
const payment2: Payment = new RazorpayPayment();

payment1.pay();
payment2.pay();
