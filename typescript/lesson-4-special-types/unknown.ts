// npx ts-node lesson-3-special-types/unknown.ts

// unknown is a similar, but safer alternative to any
// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
// Casting is when we use the "as" keyword to say property or variable is of the casted type.

// TypeScript will prevent unknown types from being used, as shown in the below example
let unknownVariable: unknown = 1; // accepts number
unknownVariable = "string"; // no error when changed to string
unknownVariable = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  },
} as { runANonExistentMethod: () => void };

// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.

// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
if (typeof unknownVariable === "object" && unknownVariable !== null) {
  (unknownVariable as { runANonExistentMethod: () => void }).runANonExistentMethod();
}
