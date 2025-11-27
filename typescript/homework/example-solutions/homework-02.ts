// Homework 02 - Conditional Statements

// Excercise 1: Use a boolean as a if/else condition
// Step 1: Declare a boolean variable if a person is male or female and assign it a value of true or false.
// Step 2: Use the boolean variable as a condition in an if/else statement.
// Step 3: Log both possible results.

const isPersonMale: boolean = true;

if (!isPersonMale) {
  console.log('Person is female');
} else {
  console.log('Person is male');
}

// Exercise 2: Check if a number is betweern two other numbers
// Step 1: Declare 3 number variables.
// Step 2: Check if the first number is between the second and third number using if-else statements.
// Step 3: Log the result like so:
// "The number {first number} is between {second number} and {third number}"
// "The number {first number} is NOT between {second number} and {third number}"

const firstNumber: number = 10;
const secondNumber: number = 1;
const thirdNumber: number = 5;

if (firstNumber > secondNumber && firstNumber < thirdNumber) {
  console.log(`The number ${firstNumber} is between ${secondNumber} and ${thirdNumber}`);
} else {
  console.log(`The number ${firstNumber} is NOT between ${secondNumber} and ${thirdNumber}`);
}

// Exercise 3: Multiple number comparison
// Step 1: Declare 3 number variables.
// Step 2: Log the numbers in ascending order using if-else statements.

const number1: number = 2;
const number2: number = 1;
const number3: number = 3;

if (number1 < number2 && number1 < number3) {
  if (number2 < number3) {
    console.log(`Logging in ascending order: ${number1}, ${number2}, ${number3}`);
  } else {
    console.log(`Logging in ascending order: ${number1}, ${number3}, ${number2}`);
  }
} else if (number2 < number1 && number2 < number3) {
  if (number1 < number3) {
    console.log(`Logging in ascending order: ${number2}, ${number1}, ${number3}`);
  } else {
    console.log(`Logging in ascending order: ${number2}, ${number3}, ${number1}`);
  }
} else if (number2 < number1) {
  console.log(`Logging in ascending order: ${number3}, ${number2}, ${number1}`);
} else {
  console.log(`Logging in ascending order: ${number3}, ${number1}, ${number2}`);
}

// Exercise 4: Check if a string has more than 10 characters
// Step 1: Declare a variable and assign any string to it.
// Step 2: Check if the length of first variable is greater than 10 using if/else statements.

const myString: string = 'Hello World';

if (myString.length > 10) {
  console.log(`The string "${myString}" has more than 10 characters.`);
} else {
  console.log(`The string "${myString}" does NOT have more than 10 characters.`);
}

// EExercise 5: Check if a string contains the letter 'B'
// Step 1: Declare a variable and assign a 3 character string to it.
// Step 2: Check if the string contains the letter 'A' using if/else statements.
// "The string {string} contains the letter 'B'"
// "The string {string} does NOT contain the letter 'B'"

const myCharString: string = 'ABC';

if (myCharString.includes('A')) {
  console.log(`The string "${myCharString}" contains the letter 'A'.`);
} else {
  console.log(`The string "${myCharString}" does NOT contain the letter 'A'.`);
}

// Exercise 6: Check if a client will be allowed in a karting competition.
// Step 1: Declare 2 number variables for client's age (whole number) and best lap time (using a floating point values number).
// Step 2: Check if the client is older than 18 (inclduing) and younger then 65 (excluding) and has a best lap time less than 60 seconds using if-else statements.
// Step 3: Log the client's age, best lap time and if the client is allowed to compete or not.

const age: number = 24;
const bestLapTime: number = 59.17;

if (age >= 18 && age < 65 && bestLapTime < 60) {
  console.log(`The client with age ${age} and ${bestLapTime} is allowed to compete`);
} else {
  console.log(`The client with age ${age} and ${bestLapTime} is NOT allowed to compete`);
}
