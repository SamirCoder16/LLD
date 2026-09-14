// Liskov subtitution principle (LSP) states that objects of a superclass should be replacable with object of its subclasses without effecting the correctness of the program.
// Iska simple matlab ye hie ki . koi client agar parent class se bat kare and uske child ko agar parent ki jagah use kare to program ka behavior same rehna chahiye.


abstract class Bird {
  abstract run(): void;
  abstract eat(): void;
}

interface FlyingBird {
  fly(): void;
}

class Sparrow extends Bird implements FlyingBird {
  fly(): void {
    console.log("Sparrow can fly");
  }

  eat(): void {
    console.log("Sparrow can eat");
  }

  run(): void {
    console.log("Sparrow can run");
  }
}

class Ostrich extends Bird {
  run(): void {
    console.log("Ostrich can run");
  }

  eat(): void {
    console.log("Ostrich can eat");
  }
}

function birdClient(bird: Bird): void {
  bird.eat();
  bird.run();
}

function flyingBirdClient(bird: FlyingBird): void {
  bird.fly();
}

birdClient(new Sparrow()); // Valid
birdClient(new Ostrich()); // Valid

flyingBirdClient(new Sparrow()); // Valid
flyingBirdClient(new Ostrich()); // TypeScript error
