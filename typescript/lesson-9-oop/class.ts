// npx ts-node lesson-8-oop/class.ts 

// TypeScript adds types and visibility modifiers to JavaScript classes
class Person {
  // property is a variable that belongs to the class
  name: string;

  // The constructor:
  // It has to have the exact name "constructor"
  // It is executed automatically when a new object is created
  // It is used to initialize object properties
  constructor(name: string) {
    this.name = name; // The this keyword in a class usually refers to the instance of the class (this is an example of polymorphism)
  }

  // method is a function that belongs to the class
  getName(): string {
    return this.name;
  }
}

// using a class:
const person = new Person("Jane"); // initialize an object of the class Person (like a type of object)
console.log(person.getName());
person.name = "Max"; // change the name property of the object person
console.log(person.getName()); // Max

// Parameter Properties
  // TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
class Person2 {
  // name is a private parameter of the constructor which automatically creates a private member variable with the same name.
  public constructor(private name: string) {}

  public getName(): string {
    return this.name; // this refers to the instance of the class, so this.name refers to the name property of the class decalred in the constructor.
  }
}

const person2 = new Person2("Jhonny");
console.log(person2.getName());


// readonly keyword can be used to make a property immutable, meaning it can only be set once, either at its declaration or in the constructor.
class Person3 {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person3 = new Person3("Maria");
console.log(person3.getName());