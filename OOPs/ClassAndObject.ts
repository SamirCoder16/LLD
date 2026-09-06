// Class & Object

class Car {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    // constructor is a base initializer of a class .
    this.brand = brand;
    this.speed = speed;
  }

  accelerate(): void {
    this.speed += 10;
  }
  
  static getBrandName(brandName: string): string {
    // here static means we can call this function without create Car object
    // Static methods are called on the class itself, not on instances of the class.
    return brandName;
  }
}

const myCar = new Car("Toyota", 0);

myCar.accelerate();
console.log(myCar.speed); // Output: 10

// const brandName = Car.getBrandName("Toyota"); // Static method can be called without creating an instance of the class
// console.log(brandName); // Output: Toyota
