// npx ts-node lesson-5-collections/array.ts

// An array is a special variable, which can hold more than one value
// Why use arrays?
const car1: string = "Saab";
const car2: string = "Volvo";
const car3: string = "BMW";
console.log("Car list:", car1, car2, car3);

// Creating an array:
const cars: string[] = ["Saab", "Volvo", "BMW"];
console.log(cars);

// arrays return object type
console.log(typeof cars);

// You access an array element by referring to the index number. Array indexes start with 0.
const firstCar: string = cars[2];
console.log(firstCar);

// array built in methods and properties
const arrayLength = cars.length; // Returns the number of elements
console.log(arrayLength);

// return last element
const lastCar: string = cars[cars.length - 1];
console.log(lastCar);

// arrays are objects you can access array elements by their name if they have one like so
const person: { firstName: string; lastName: string; age: number } = { firstName: "John", lastName: "Doe", age: 46 };
console.log(person.firstName);
console.log(typeof person);

// array elements can be objects, functions or variables, if union type they can be of differenty types
const myArray = [Date.now, 1, "myCars"];
console.log(myArray);
console.log(typeof myArray[0]);

// array.push - adding array elements
const fruits: string[] = ["Banana", "Orange", "Apple"];
fruits.push("Lemon"); // Adds a new element (Lemon) to fruits
console.log(fruits);

// added elements must be of array type unless its any[]
fruits.push("Dylan"); // no error
// fruits.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// The readonly keyword can prevent arrays from being changed
const names: readonly string[] = ["Dylan", "Vanko"];
// names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'. Try removing the readonly modifier and see if it works?
console.log(names);

// TypeScript can infer the type of an array if it has values
const numbers = [4, 3, 2]; // inferred to type number[]
numbers.push(1); // no error
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
const firstNumber: number = numbers[0]; // no error
console.log(firstNumber);

// array.pop() removes the last element of an array and returns that element. This method changes the length of the array.
console.log(fruits);
const lastFruit: string = fruits.pop(); // Removes the last element (Dylan) from fruits and returns it as value for our variable
console.log(fruits);
console.log(lastFruit); // Outputs: Dylan

// array.shift() removes the first element of an array and returns that element. This method changes the length of the array.
const firstFruits: string = fruits.shift();
console.log(fruits);
console.log(firstFruits); // Outputs: Banana

// New element can also be added to an array using the length property
fruits[fruits.length] = "Kiwi"; // Adds "Kiwi" to fruits
console.log(fruits);

// Adding elements with high indexes can create undefined "holes" in an array
fruits[8] = "Pear"; // Creates undefined "holes" in fruits
console.log(fruits);

console.log(cars.sort()); // Sorts the array (alphabetically for strings)
console.log(numbers.sort()); // Sorts the array (numerically for numbers)

// To compare two arrays, you can use the JSON.stringify() method to convert them to strings and then compare the strings.
const numbers1: number[] = [1, 2, 3, 4];
const numbers2: number[] = [4, 3, 2, 1];

console.log(JSON.stringify(numbers1) === JSON.stringify(numbers2)); // false
console.log(JSON.stringify(numbers1.sort()) === JSON.stringify(numbers2.sort())); // true
