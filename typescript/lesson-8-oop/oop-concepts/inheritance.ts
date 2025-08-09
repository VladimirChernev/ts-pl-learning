// npx ts-node lesson-8-oop/inheritance.ts 

// Implements: 
    // Interfaces can be used to define the type a class must follow through the implements keyword.
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}
console.log(new Rectangle(10, 20).getArea()); // 200


// Extends: 
    // Classes can extend each other through the extends keyword. A class can only extends one other class.
class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Rectangle
}
console.log(new Square(10).getArea()); // 100
