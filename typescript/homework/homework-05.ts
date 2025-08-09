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

// Excercise 2 - User ID System (Interface basics)
// Step 1: Define an interface named "WithID" with a property id: number
// Step 2: Define an interface named "User" that inherits the "WithID" interface and adds properties name: string, age: number
// Step 3: Create an object of the interface User and assign values to all properties.
// Step 4: Print the object to the console.

// Excercise 3 - Car rental service (Encapsulation)
// Step 1: Define a class named "CarRental" with properties: carType, costPerDay and methods setCostPerDay, getCostPerDay rentCar and a constructor setting the 2 properties.
// Step 2: carType should be visible outside the class, but costPerDay should be private.
//         All methods should be visible outside the class.
//         The property's value for carType should not be changable.
// Step 2: Create three objects of the class CarRental with different car types and costs for example: Hatchback, Sedan, SUV
// Step 3: Print the car rental details in the console by calling the method rentCar() for each object with different number of days rented.
// Example output: "Renting a Hatchback for 3 days will cost: $150"
// Step 4: Change the costPerDay for one of the car types and print the new rental details in the console.

// Excercise 4 - Furtniture Factory (Inheritance)
// Step 1: Create a class called "Chair" from the base class "Furniture".
// Step 2: "Teakwood" should be the type of furniture used by all furnitures by default.
// Step 3: Create an option to change the type of furniture for each object created from the class "Chair".
// Step 4: The number of legs of a chair should be a property that should not be alterabl outside the class.
// Step 5: Create an object of the class "Chair" and print the type of furniture and number of legs in the console.
// Step 6: Create another objerct of the class "Chair" with a different type of furniture and print the type of furniture and number of legs in the console.
// Example output: "Chair 1: Type - Teakwood, Legs - 4"

// Excercise 5 - Music Instruments (Abstraction)
// Step 1: Create an abstract class called "instrument" with a method "playMusic".
// Step 2: Create two subclasses "Guitar" and "Piano" that inherit from the base class "Instrument".
// Step 3: Implement the "playMusic" method in both subclasses to log a message indicating which instrument is playing music.
// Step 4: Create an object of each subclass and call the "playMusic" method to see the different outputs.

// Excercise 6 - Animal kingdom (Polymorphism)
// Step 1: Create a base class called "Mammal" with:
// constructor that takes a name parameter and assigns it to a property called name
// method "eat" that logs "{ name } eats food".
// Step 2: Create two subclasses "Carnivore" and "Herbivore" that inherit from the base class "Mammal".
// Step 3: Override the "eat" method in both subclasses to log a different message for each subclass.
// For example: "{ name } is a carnivore and eats meat" or "{ name } is a herbivore and eats plants".
// Step 4: Create an object of each subclass and call the "eat" method to see the different outputs.
