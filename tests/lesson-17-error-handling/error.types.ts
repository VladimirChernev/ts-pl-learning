
// JavaScript code can encounter different errors when it is executed. Errors can be caused by programming mistakes, incorrect input, or other unforeseeable events.


// Errors in programming can be divided into two types. These are:
//     Program Error: - In this case, the program might need to handle this error through its error handlers. An example could be network disconnection, timeout error, etc.
//     Developer Error: - The programmer has caused an error. It can be a syntax error, a logical error, a semantic error, etc.


// The throw statement allows you to create a custom error.
// Technically you can throw an exception (throw an error).
// If you use throw together with try and catch, you can control program flow and generate custom error messages.
// The exception can be a JavaScript String, a Number, a Boolean or an Object:
throw 'Too big'; // throw a text
throw 500; // throw a number
throw true; // throw a boolean
throw { message: 'This is an object' }; // throw an object

// What is an error?
// Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions.

// Generic Error object
const genericError = new Error('This is an error'); // create a new Error object
console.log(genericError.name); // Output: Error
console.log(genericError.message); // Output: This is an error
throw genericError; // throw an Error object

// Syntax error - the error occurs when you use a predefined syntax incorrectly
const syntaxError = new SyntaxError('This is a syntax error'); // create a new SyntaxError object
throw syntaxError; // throw a SyntaxError object

// Example of a syntax error
const func = () =>
    console.log(hello)
    } // SyntaxError: Unexpected token -> an opening bracket is missing in the code, which invokes the Syntax error

// Reference Error - In a case where a variable reference can't be found or hasn't been declared, then a Reference error occurs.
const referenceError = new ReferenceError('This is a reference error'); // create a new ReferenceError object
throw referenceError; // throw a ReferenceError object

// Example of a reference error
console.log(x); // ReferenceError: x is not defined

// Type Error - An error occurs when a value is used outside the scope of its data type.
const typeError = new TypeError('This is a type error'); // create a new TypeError object
throw typeError; // throw a TypeError object

// Example of a type error
let num = 15;
console.log(num.split("")); // TypeError: num.split is not a function -> tries to convert a number to an array

// RangeError - There is an error when a range of expected values is required, as shown below:
const rangeError = new RangeError('This is a range error'); // create a new RangeError object
throw rangeError; // throw a RangeError object

// Example of a range error
const number: number = 1;
number.toPrecision(500); // A number cannot have 500 significant digits

// URI Error - When the wrong character(s) are used in a URI function, the error is called.
const uriError = new URIError('This is a URI error'); // create a new URIError object
throw uriError; // throw a URIError object

// Example of a URI error
console.log(decodeURI('https://www.educative.io/shoteditor'));
console.log(decodeURI('%sdfk')); // URIError: URI malformed

// Other Errors - There are other errors that are less common that can occur in JavaScript / Typescript, such as:
// Internal Error - In the JS engine, this error occurs most often when there is too much data and the stack exceeds its critical size. When there are too many recursion patterns, switch cases, etc., the JS engine gets overwhelmed.
// Evaluation Error - Current JavaScript engines and EcmaScript specifications do not throw this error. The error is called when the eval() backward function is used, as shown in the following code block:
