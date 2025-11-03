// npx ts-node lesson-3-special-types/union.types.ts

// using the "|" symbol we are saying our parameter can be either a string or a number:
function printId(id: string | number) {
  console.log("Your ID is: " + id);
}

printId(101); // Your ID is: 101
printId("202"); // Your ID is: 202

// error example
// printId(true); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
