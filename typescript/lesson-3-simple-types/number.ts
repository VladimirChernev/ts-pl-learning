// npx ts-node lesson-2-simple-types/number.ts

// positive numbers
const positiveNumber: number = 34;
console.log(positiveNumber);

// negative numbers
const negativeNumber: number = -102733;
console.log(negativeNumber);

// numbers with decimals (floating point values)
const numberWithDecimal: number = 24.13;
console.log(numberWithDecimal);

// Number math operations
let firstNumber: number = 5;
let secondNumber: number = 10;

const add: number = secondNumber + firstNumber;
const substract: number = secondNumber - firstNumber;
const multiply: number = secondNumber * firstNumber;
const divide: number = secondNumber / firstNumber;
const exponent: number = secondNumber ** firstNumber; // exponentiation operator (**) is used to raise a number to the power of another number
const increment: number = firstNumber++; // increment operator (++) is used to increase a number by 1
const decrement: number = secondNumber--; // decrement operator (--) is used to decrease a number by 1
const remainder: number = secondNumber % firstNumber; // remainder operator (%) is used to get the remainder of a division

console.log(`add: ${add}`);
console.log(`substract: ${substract}`);
console.log(`multiply: ${multiply}`);
console.log(`divide: ${divide}`);
console.log(`exponent: ${exponent}`);
console.log(`firstNumber: ${increment}`);
console.log(`secondNumber: ${decrement}`);
console.log(`remainder: ${remainder}`);

// example command to get max and min safe int number
const maxSafeNumber = Number.MAX_SAFE_INTEGER;
const minSafeNumber = Number.MIN_SAFE_INTEGER;
console.log(`maxSafeNumber: ${maxSafeNumber}`);
console.log(`minSafeNumber: ${minSafeNumber}`);

// error example: number is too big for normal int, we dont get an error but a suggestion to use bigint variable
// const tooBigNumber: number = 1234567890123456789;
// console.log(`tooBigNumber: ${tooBigNumber}`);
