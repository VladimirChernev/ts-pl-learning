// Homework 04 - Functions

// Exercise 1:
// Fix the following code to print the same message, each time when the functions is called.
// Hint: you can find hints at the end of this file
// Call the function in order to verify it works

// function add_item_in_form(table_row: number, complain: string, client_name: string, driver_name: string, car_number: number) {
//     console.log("Printing the row");
//     console.log(table_row, complain, client_name, car_number, driver_name);
// }

// add_item_in_form(2556, "Driver smoked", "Ivan", 2523, "Petko")

// Exercise 2:
// Fix the errors in the code below:
// Hint: you can find hints at the end of this file
// Call the function in order to verify it is works

// function sum_2_numbers(number_1: number, number_2: number) {
//     const result = number_1 + number_2;
// }

// console.log(sum_2_numbers(2, 3);

// Excercise 3:
// Step 1: Define a function that prints in the console a person's Fist Name, Middle Name and Last Name, where Middle Name is optional
// Step 2: Use JSDoc to add description to the function, example:
/**
 * Multiply two numbers
 * @type {number} a - the first number to be multiplied
 * @type {number} b - the second number to be multiplied
 * @returns {number} the product of a and b
 */
// function multiply(a: number, b: number): number {
//     return a * b;
// }
// Step 3: Call the function with and without Middle Name to verify it works correctly

// Excercise 4:
// Step 1: Define a function that returns concatenated strings: first name, last name and age
// Step 2: Use JSDoc to add description to the function
// Step 3: If the function is not called with arguments, it should return default arguments and message “Missing one or all arguments - first name, last name or age”
// Step 4: Console log calls of the function once with all arguments and a few times with missing arguments to verify it works correctly

// Excercise 5:
// Step 1: Define a function that accepts 2 named parameters: programing language and compliment and prints in the console a message: "I love {programing language} because {compliment}"
// Step 2: Use JSDoc to add description to the function
// Step 3: Console log calls the function a few times with different arguments to verify it works correctly

// Excercise 6:
// Step 1: Define a function that accepts a string and calculates the number of upper case letters and lower case letters
// Hint: you can find hints at the end of this file
// Example: Sample String:"Hello World"
// Expected Output:
// Number of Upper case characters : 2
// Number of Lower case Characters : 8

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
