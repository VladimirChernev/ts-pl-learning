// npx ts-node lesson-3-special-types/any.ts

// any is a type that disables type checking and effectively allows all types to be used.

// example without any gives error:
// let booleanValue = true;
const booleanVariable: boolean = true;
// booleanVariable = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(booleanVariable); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
console.log(typeof booleanVariable); // boolean - no error

// example with any - no error
// let anyVariable: any = true;
// console.log(typeof anyVariable);

// anyVariable = "string"; // string - no error as it can be "any" type
// anyVariable = 10; // number - no error as it can be "any" type
// anyVariable = [10, 20, 30]; // array - no error as it can be "any" type
// Math.round(anyVariable); // used as a number - no error as it can be "any" type
// console.log(typeof anyVariable)
