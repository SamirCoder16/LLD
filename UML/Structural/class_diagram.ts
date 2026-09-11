// class diagram

// composition
class Room {
  constructor(
    public name: string,
    public area: number,
  ) {}
}

class House {
  private rooms: Room[] = [];

  constructor(public address: string) {
    // The House owns the lifecycle of these Rooms
    this.rooms.push(new Room("Living Room", 40));
    this.rooms.push(new Room("Kitchen", 25));
  }

  public getHouseDetails(): string {
    const roomList = this.rooms.map((r) => r.name).join(", ");
    return `House at ${this.address} contains: ${roomList}`;
  }
}

// Usage
const myHouse = new House("123 Main Street");
console.log(myHouse.getHouseDetails());
