// Homework 05 - OOP

// Excercise 1 - Employee Info System (Class basics)
// Step 1: Define a class named "Employee":
// properties - name: string, age: number, position: string
// constructor - that requires parameter name: string
// methods - getName(): string
// methods - changeName(newName: string): void
// Step 2: Create an object of the class Employee.
// Step 3: Call the method getName() and print the result to the console.
// Step 4: Call the method changeName() and pass a new name as parameter.
// Step 5: Call the method getName() and print the result to the console.

class Employee {
  private name: string;
  private age: number;
  private position: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public changeName(newName: string): void {
    this.name = newName;
  }
}

const employee = new Employee('John Doe');
console.log('Employee name:', employee.getName());

employee.changeName('Jane Smith');
console.log('Updated employee name:', employee.getName());

// Excercise 2 - User ID System (Interface basics)
// Step 1: Define an interface named "WithID" with a property id: number
// Step 2: Define an interface named "User" that inherits the "WithID" interface and adds properties name: string, age: number
// Step 3: Create an object of the interface User and assign values to all properties.
// Step 4: Print the object to the console.

interface WithID {
  id: number;
}

interface User extends WithID {
  name: string;
  age: number;
}

const user: User = {
  id: 1,
  name: 'John Doe',
  age: 30,
};

console.log('user', user);

// Excercise 3 - Car rental service (Encapsulation)
// Step 1: Define a class named "CarRental" with properties: carType, costPerDay and methods setCostPerDay, getCostPerDay rentCar and a constructor setting the 2 properties.
// Step 2: carType should be visible outside the class, but costPerDay should be private.
//         All methods should be visible outside the class.
//         The property's value for carType should not be changable.
// Step 2: Create three objects of the class CarRental with different car types and costs for example: Hatchback, Sedan, SUV
// Step 3: Print the car rental details in the console by calling the method rentCar() for each object with different number of days rented.
// Example output: "Renting a Hatchback for 3 days will cost: $150"
// Step 4: Change the costPerDay for one of the car types and print the new rental details in the console.

class CarRental {
  public readonly carType: string;
  private costPerDay: number;

  public constructor(carType: string, constPerDay: number) {
    this.carType = carType;
    this.costPerDay = constPerDay;
  }

  public setCostPerDay(costPerDay: number): void {
    this.costPerDay = costPerDay;
  }

  public getCostPerDay(): number {
    return this.costPerDay;
  }

  public rentCar(days: number): number {
    return days * this.costPerDay;
  }
}

const hatchback = new CarRental('Hatchback', 50);
const sedan = new CarRental('Sedan', 70);
const suv = new CarRental('SUV', 100);

console.log(`Renting a ${hatchback.carType} for 3 days will cost: $${hatchback.rentCar(3)}`);
console.log(`Renting a ${sedan.carType} for 5 days will cost: $${sedan.rentCar(5)}`);
console.log(`Renting a ${suv.carType} for 7 days will cost: $${suv.rentCar(7)}`);

hatchback.setCostPerDay(60);
console.log(`After the cost increase renting a ${hatchback.carType} for 3 days will cost: $${hatchback.rentCar(3)}`);

// Excercise 4 - Furtniture Factory (Inheritance)
// Step 1: Create a class called "Chair" from the base class "Furniture".
// Step 2: "Teakwood" should be the type of furniture used by all furnitures by default.
// Step 3: Create an option to change the type of furniture for each object created from the class "Chair".
// Step 4: The number of legs of a chair should be a property that should not be alterabl outside the class.
// Step 5: Create an object of the class "Chair" and print the type of furniture and number of legs in the console.
// Step 6: Create another objerct of the class "Chair" with a different type of furniture and print the type of furniture and number of legs in the console.
// Example output: "Chair 1: Type - Teakwood, Legs - 4"

class Furniture {
  protected type: string;

  public constructor(type: string = 'Teakwood') {
    this.type = type;
  }
}

class Chair extends Furniture {
  private numberOfLegs: number = 4;

  public constructor(type?: string) {
    super(type);
  }

  public getType() {
    return this.type;
  }

  public setNumberOfLegs(legs: number) {
    this.numberOfLegs = legs;
  }

  public getNumberOfLegs() {
    return this.numberOfLegs;
  }
}

const chair1 = new Chair();
console.log(`Chair 1: Type - ${chair1.getType()}, Legs - ${chair1.getNumberOfLegs()}`);

const chair2 = new Chair('Oakwood');
chair2.setNumberOfLegs(3);
console.log(`Chair 2: Type - ${chair2.getType()}, Legs - ${chair2.getNumberOfLegs()}`);

// Excercise 5 - Music Instruments (Abstraction)
// Step 1: Create an abstract class called "instrument" with a method "playMusic".
// Step 2: Create two subclasses "Guitar" and "Piano" that inherit from the base class "Instrument".
// Step 3: Implement the "playMusic" method in both subclasses to log a message indicating which instrument is playing music.
// Step 4: Create an object of each subclass and call the "playMusic" method to see the different outputs.

abstract class Instrument {
  abstract playMusic(): void;
}

class Guitar extends Instrument {
  public playMusic(): void {
    console.log('Playing music on the guitar.');
  }
}

class Piano extends Instrument {
  public playMusic(): void {
    console.log('Playing music on the piano.');
  }
}

const guitar = new Guitar();
const piano = new Piano();

guitar.playMusic();
piano.playMusic();

// Excercise 6 - Animal kingdom (Polymorphism)
// Step 1: Create a base class called "Mammal" with:
// constructor that takes a name parameter and assigns it to a property called name
// method "eat" that logs "{ name } eats food".
// Step 2: Create two subclasses "Carnivore" and "Herbivore" that inherit from the base class "Mammal".
// Step 3: Override the "eat" method in both subclasses to log a different message for each subclass.
// For example: "{ name } is a carnivore and eats meat" or "{ name } is a herbivore and eats plants".
// Step 4: Create an object of each subclass and call the "eat" method to see the different outputs.

class Mammal {
  constructor(protected name: string) {}

  public eat(): void {
    console.log(`${this.name} eats food.`);
  }
}

class Carnivore extends Mammal {
  public override eat(): void {
    console.log(`${this.name} is a carnivore and eats meat.`);
  }
}

class Herbivore extends Mammal {
  public override eat(): void {
    console.log(`${this.name} is a herbivore and eats plants.`);
  }
}

const tiger = new Carnivore('Tiger');
const cow = new Herbivore('Cow');

tiger.eat();
cow.eat();
