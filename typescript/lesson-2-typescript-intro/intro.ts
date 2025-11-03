// npx ts-node lesson-1-get-started/intro.ts

// online documentation:
// https://www.typescriptlang.org/docs/handbook/intro.html
// https://www.w3schools.com/js/default.asp
// https://www.geeksforgeeks.org/javascript/?ref=shm

// welcome to typescript coding:
console.log("Hello World!");

// semicolon separates statements

// white spaces are only for formatting

// var is a script language variable and a NO-NO!, use let or const instead
// var age: number = 5;

// naming conventions
const a = 5; // no type, bad variable name
console.log(a); // 5

// type assignment (writing out the type)
const welcomeMessage: string = "Hello, Peter!";
console.log("welcomeMessage", welcomeMessage);

//  implicit type assignment (TypeScript will "infer" (guess) the type, based on the assigned value)
const names = "Dylan Burnt";
console.log(typeof names); // string

// block variable
let myNumber: number; // decalre (initialize) variable
myNumber = 5; // assign value to variable
// let number: number = 10; // both decalre and assign, but cant redeclare variable
myNumber = 10; // reasign variable
console.log(myNumber); // 10

// block constant
const message: string = "Welcome";
console.log(message); // Welcome

// single line comment (ctrl + /)

/*
 * This is a multi-line comment
 */

/**
 * This is a documentation comment used to describe the purpose of a function or class method and their parameters and return values.
 */
function myFunction() {
  // code block
}
myFunction(); // call function

// other reserved keywords:
// if 	Marks a block of statements to be executed on a condition
// switch 	Marks a block of statements to be executed in different cases
// for 	Marks a block of statements to be executed in a loop
// function 	Declares a function
// return 	Exits a function
// try 	Implements error handling to a block of statements
