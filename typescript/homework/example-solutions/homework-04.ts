// Homework 04 - Functions

// Exercise 1:
// Fix the following code to print the same message, each time when the functions is called.
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

function addItemInForm(tableRow: number, clientName: string, complaint: string, driverName: string, carNumber: number) {
  console.log('Printing the row');
  console.log(tableRow, clientName, complaint, driverName, carNumber);
}

addItemInForm(2556, 'Ivan', 'Driver smoked', 'Petko', 2523);

// Exercise 2:
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it is works

function add2Numbers(number1: number, number2: number): number {
  const result = number1 + number2;
  return result;
}

console.log(add2Numbers(2, 3));

// Excercise 3:
// Step 1: Define a function that prints in the console a person's Fist Name, Middle Name and Last Name, where Middle Name is optional
// Step 2: Use JSDoc to add description to the function, example:
/**
 * Multiply two numbers
 * @param {number} a - the first number to be multiplied
 * @param {number} b - the second number to be multiplied
 * @returns {number} the product of a and b
 */
// function multiply(a: number, b: number): number {
//     return a * b;
// }
// Step 3: Call the function with and without Middle Name to verify it works correctly

/**
 * Printing a person's names
 * @param {string} firstName - the first name to be printed
 * @param {string} lastName  - the last name to be printed
 * @param {string} [middleName] - the middle name which is optional
 */
function printPersonNames(firstName: string, lastName: string, middleName?: string) {
    let personNames = `First Name: ${firstName}`;
    if (middleName !== undefined) {
      personNames += `, Middle Name: ${middleName}, Last Name: ${lastName}`;
    } else {
      personNames += `, Last Name: ${lastName}`;
    }
    return personNames;
  }
  
  console.log(printPersonNames('Ivan', 'Ivanov', 'Ivanov'));
  console.log(printPersonNames('Ivan', 'Ivanov'));

// Excercise 4:
// Step 1: Define a function that returns concatenated strings: first name, last name and age
// Step 2: Use JSDoc to add description to the function
// Step 3: If the function is not called with arguments, it should return default arguments and message “Missing one or all arguments - first name, last name or age”
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

/**
 * Printing person's details
 * @param {string} [firstName=Jhon] - person's the first name
 * @param {string} [lastName=Doe] - person's the last name
 * @param {number} [age=18] - person's age
 */
function printPersonDetails(firstName: string = "Jhon", lastName: string = "Doe", age: number = 18) {
    if (firstName === "Jhon" || lastName === "Doe" || age === 18) {
      console.log('Missing one or all arguments - first name, last name or age');
    }
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}`)
  }

printPersonDetails(); // Without arguments
printPersonDetails("Ivan", "Ivanov"); // With some arguments
printPersonDetails("Mitko", "Mitkov", 28); // With all arguments

// Excercise 5:
// Step 1: Define a function that accepts 2 named parameters: programing language and compliment and prints in the console a message: "I love {programing language} because {compliment}"
// Step 2: Use JSDoc to add description to the function
// Step 3: Console log calls the function a few times with different arguments to verify it works correctly

/**
 * Complimenting a programming language
 * @param {string} programmingLanguage
 * @param {string} compliment
 */
function complimentLanguage(programmingLanguage: string, compliment: string) {
  console.log(`I love ${programmingLanguage} because ${compliment}`);
}

complimentLanguage('Typescript', "it's cool");
complimentLanguage('C#', "it's classy");
complimentLanguage('Python', "it's simple");

// Excercise 6:
// Step 1: Define a function that accepts a string and calculates the number of upper case letters and lower case letters
// Hint: you can find hints at the end of this file
// Example: Sample String:"Hello World"
// Expected Output:
// Number of Upper case characters: 2
// Number of Lower case Characters: 8

/**
 * Count upper and lower case characters in a string
 * @param {string} text - the input string
 * @returns {Object} an object containing the counts of upper and lower case characters
 */
function countUpperAndLowerCase(text: string): { upperCaseCharCount: number; lowerCaseCharCount: number } {
  let upperCaseCharCount = 0;
  let lowerCaseCharCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      upperCaseCharCount++;
    } else if (text[i] === text[i].toLowerCase()) {
      lowerCaseCharCount++;
    }
  }
  return {
    upperCaseCharCount,
    lowerCaseCharCount,
  };
}

console.log(`Number of Upper case characters: ${countUpperAndLowerCase('Hello World').upperCaseCharCount}`);
console.log(`Number of Lower case characters: ${countUpperAndLowerCase('Hello World').lowerCaseCharCount}`);

// Exercise 1 Hints:
// Order of the arguments in "add_item_in_form" call of the fucntion or order of the parameters in function should be fixed

// Exercise 2 Hints:
// 1. Missing closing bracket on print statement
// 2. Return is missing inside the function

// Excercise 6 Hints:
// 1. Use a for loop to iterate through the string
// 2. Use 2 variables to count the number of upper case and lower case letters
// 3. Use an if statement to check if the character is upper case or lower case and add to the respective counter
// 4. Use a collection as a return value to return both the number of upper case and lower case letters
