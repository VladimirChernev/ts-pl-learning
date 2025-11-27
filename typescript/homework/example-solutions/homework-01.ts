// Homework 01 - Simple Types

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.

let number1: number = 4;
let number2: number = 8;
console.log(`Original values:: number1 = ${number1}, number2 = ${number2}`);

const number3: number = number1;
number1 = number2;
number2 = number3;

// alternatively we can swap the values as a collection
// [number1, number2] = [number2, number1];

console.log(`Swapped values: number1 = ${number1}, number2 = ${number2}`);

// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check if first variable is even.
// Step 3: Log the result

const number: number = 5; // You can change this number to test with different values
const isEven: boolean = number % 2 === 0;

console.log(`Is the number ${number} even: ${isEven}`);

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if first variable is greater than 0.
// Step 3: Log the result

const numberToCheck: number = -3; // You can change this number to test with different values
const isPositive: boolean = numberToCheck > 0;

console.log(`Is the number ${numberToCheck} positive: ${isPositive}`);

// Exercise 4: Check if a string is empty (empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable is an empty string.
// Step 3: Log the result

const text: string = ''; // You can change this string to test with different values
const isEmpty: boolean = text === '';
console.log(`Is the string "${text}" empty: ${isEmpty}`);

// Exercise 5: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable starts with 'A'.
// Step 3: Log the result

const textToCheck: string = 'Apple'; // You can change this string to test with different values
const startsWithA: boolean = textToCheck.startsWith('A');
console.log(`Does the string "${textToCheck}" start with 'A': ${startsWithA}`);

// Exercise 6: Write code calculating the ammount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare a variables: QA name (string), number of functionalities (whole number), lets accpet time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities and the total time needed to test all functionalities using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."

const qaName: string = 'Test Testov';
const numberOfFunctionalities: number = 5;

console.log(`The QA ${qaName} will need ${numberOfFunctionalities * 2} hours to complete ${numberOfFunctionalities} project/s.`);
