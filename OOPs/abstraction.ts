// Abstraction .
// Abstraction hides unnecessary details/data from client. and  showcase only what is necessary to client.
// Example -> Car and Owner .

// create a class that is abstract and has some abstract methods and some normal methods.
// An abstract is a class that cannot be instantiated directly. It can only be extended by other classes.
// Abstract classes can contain both abstract methods (methods without implementation) and concrete methods (methods with implementation).
abstract class Car {
  // we can also use interface instead of abstract class but we cannot have normal methods in interface.
  // Abstract method (does not have a body)

  abstract startEngine(): void;
  abstract stopEnginE(): void;
  abstract accelerate(): void;
  abstract brake(): void;
}

class SportsCar extends Car {
  // Implementing the abstract methods
  startEngine(): void {
    console.log("SportsCar engine started.");
  }

  stopEnginE(): void {
    console.log("SportsCar engine stopped.");
  }

  accelerate(): void {
    console.log("SportsCar is accelerating.");
  }

  brake(): void {
    console.log("SportsCar is braking.");
  }
}

function main(): void {
  const myCar: Car = new SportsCar();
  myCar.startEngine();
  myCar.accelerate();
  myCar.brake();
  myCar.stopEnginE();
}

main();
