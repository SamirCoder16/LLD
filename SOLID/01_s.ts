// S of ( SOLID )
// S -> stands for Single Responsibility Principle .
// that means that a class should have only one reason to change .

class Product {
  private name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  getPrice(): number {
    return this.price;
  }
  getName(): string {
    return this.name;
  }
}

// [ has - a ] relationship between Cart and Product classes .
// This is a composition relationship, where a Cart "has a" collection of Product objects.
// This cart class is violating the (SRP) principle because it has multiple responsibilities: managing products, creating invoices, and saving to the database.
// Each of these responsibilities should be handled by separate classes to adhere to the Single Responsibility Principle.
class Cart {
  // 1..... *
  private products: Product[] = [];
  addProduct(product: Product): void {
    this.products.push(product);
  }
  getProducts(): Product[] {
    return this.products.length > 0 ? this.products : [];
  }
  calculateTotalPrice(): void {
    console.log(
      this.products.length > 0
        ? this.products.reduce(
            (total, product) => total + product.getPrice(),
            0,
          )
        : 0,
    );
  }
}

class GenerateInvoiceForCartProducts {
  generateInvoice(cart: Cart): void {
    const products: Product[] = cart.getProducts();
    console.log("Invoice created for products: ", products);
  }
}

class SaveCartProductsToDB {
  save(cart: Cart): void {
    const products: Product[] = cart.getProducts();
    console.log("Products saved to database: ", products);
  }
}

function main(): void {
  // Cart class is responsible for managing products.
  const cart = new Cart();
  cart.addProduct(new Product("Product 1", 10));
  cart.addProduct(new Product("Product 2", 20));
  console.log("Products in cart: ", cart);
  // Invoice generation class is responsible for generating invoices.
  const invoiceGenerator = new GenerateInvoiceForCartProducts();
  invoiceGenerator.generateInvoice(cart);
  // Database saving class is responsible for saving products to the database.
  const dbSaver = new SaveCartProductsToDB();
  dbSaver.save(cart);
}

main();
