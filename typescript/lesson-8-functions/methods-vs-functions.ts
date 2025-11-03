// npx ts-node lesson-7-functions/methods-vs-functions.ts

// The difference between a method and a function lies in their context and how they are used:

// Key Differences

// Aspect	        Function	                            Method
// Context	      Independent, not tied to an object	  Belongs to an object or class
// Invocation	    Called directly	                      Called on an object or class instance
// Access to this	No access to this	                    Can access this to refer to the object

// Summary
// Use functions for general-purpose, reusable logic that doesn't depend on a specific object.
// Use methods when the logic is tied to a class or object and may need to interact with its properties or other methods.

// Function:

// A function is a standalone block of code that performs a specific task.
// It is not tied to any object or class and can be called independently.
// Functions can take arguments, perform operations, and return a value.
// In TypeScript, you define a function using the function keyword.

// Example:
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Function!")); // Output: Hello, Function!

// Method:

// A method is a function that is associated with an object or a class.
// It is called on an instance of a class (or the class itself if it's a static method).
// Methods typically operate on the data contained within the object (via this).

// Example:
// class:
class Greeter {
  // Method inside a class
  greet(name: string): string {
    return `Hello, ${name}!`;
  }
}

const greeter = new Greeter();
console.log(greeter.greet("Method!")); // Output: Hello, Method!
