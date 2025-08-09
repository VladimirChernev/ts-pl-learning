// npx ts-node lesson-8-oop/abstraction.ts 

// Abstract Classes
    // Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. 
    // This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword. 

abstract class Polygon {
  // The abstract class Polygon has a method getArea that is not implemented
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}
console.log(new Rectangle(10, 20).toString()); // Polygon[area=200]
