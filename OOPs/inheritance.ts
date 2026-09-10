// Inheritance is an OOPs concept that allows a class to inherit properties and methods from another class. In TypeScript,
// we can use the `extends` keyword to create a subclass that inherit from a superclass.
// This allows us to create a hierarchy of classes and reuse code effectively.

// parent class
class Car {
  protected Brand: string;
  protected Model: string;
  protected IsEngineOn: boolean;
  protected current_speed: number;

  constructor(brand: string, model: string) {
    this.Brand = brand;
    this.Model = model;
    this.IsEngineOn = false;
    this.current_speed = 0;
  }

  startEngine(): void {
    if (this.IsEngineOn === true) {
      console.log("Engine is already on.");
      return;
    }
    this.IsEngineOn = true;
    console.log("Engine started.");
  }

  stopEngine(): void {
    if (this.IsEngineOn === false) {
      console.log("Engine is already off.");
      return;
    }
    this.IsEngineOn = false;
    console.log("Engine stopped.");
  }

  accelerate(speed: number): void {
    if (this.IsEngineOn === false) {
      console.log("Cannot accelerate. Engine is off.");
      return;
    }
    this.current_speed += speed;
    console.log(`Accelerated to ${this.current_speed} km/h.`);
  }

  brake(): void {
    if (this.current_speed === 0) {
      console.log("Car is already stopped.");
      return;
    }
    this.current_speed = 0;
    console.log("Car stopped.");
    this.stopEngine();
  }
}

// child class
class ManualCar extends Car {
  private gear: number;
  constructor(brand: string, model: string) {
    super(brand, model);
    this.gear = 0; // Initialize gear to 0 (Neutral).
  }

  // Method to change gear
  public changeGear(gear: number): void {
    if (gear < 0 || gear > 5) {
      console.log("Invalid gear. Please select a gear between 0 and 5.");
      return;
    }
    this.gear = gear;
    console.log(`Gear changed to ${this.gear}.`);
  }
}

class ElectricCar extends Car {
  private batteryLevel: number;
  private charging: boolean;

  constructor(brand: string, model: string) {
    super(brand, model);
    this.batteryLevel = 20; // Initialize battery level to 20%.
    this.charging = false; // Initialize charging status to false.
  }

  // Method to charge the battery
  public chargeBatery(): void {
    if (this.charging) {
      console.log("Battery is already charging.");
      return;
    } else if (this.batteryLevel >= 100) {
      console.log("Battery is already fully charged.");
    }
    this.charging = true;
    console.log("Battery charging started.");
    setTimeout(() => {
      this.batteryLevel = 100; // Set battery level to 100% after charging.
      this.charging = false;
      console.log("Battery charging completed. Battery level is now 100%.");
    }, 5000);
  }
}

  const manualCar = new ManualCar("Toyota", "Corolla");
  const electricCar = new ElectricCar("Tesla", "Model S");

  // Start the engine of the manual car
  manualCar.startEngine();
  // Change the gear of the manual car
  manualCar.changeGear(1);
  // Start the engine of the electric car
  electricCar.startEngine();
  // Charge the battery of the electric car
  electricCar.chargeBatery();
