// npx ts-node lesson-7-functions/functions.ts

// A function is a block of code designed to perform a particular task.
// A function is executed when "something" invokes it (calls it).

// syntax:
// function name(parameter1, parameter2, parameter3) {
//   // code to be executed
// }

// examples:

// simplest implementation: void function, no parameters:
function printHello(): void {
  console.log("Hello!");
}
// function invocation:
printHello();

// function implementation with parameters and return value, and JSDoc to add description to the function:

/**
 * Multiply two numbers
 * @param {number} a - the first number to be multiplied
 * @param {number} b - the second number to be multiplied
 * @returns {number} the product of a and b
 */
function multiply(a: number, b: number): number {
  return a * b;
}
console.log(multiply(5, 10)); // 50

// Optional Parameters - the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number): number {
  return a + b + (c || 0); // if c is not provided, it will be undefined, so we use || to default to 0
}
console.log(add(5, 10,));

// Default Parameters - for parameters with default values, the default value goes after the type annotation:
function pow(value: number, exponent: number = 10): number {
  return value ** exponent;
}
console.log(pow(5)); // 5^10 = 9765625

// Named Parameters - typing named parameters follows the same pattern as typing normal parameters.
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 })); // 5

// Rest Parameters - can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
// They are useful when the number of input variables in a function are unknown
function adding(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(adding(1, 2, 3, 4, 5)); // 15
