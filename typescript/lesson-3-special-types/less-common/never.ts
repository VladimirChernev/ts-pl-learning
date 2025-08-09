// npx ts-node lesson-3-special-types/less-common/never.ts

// never effectively throws an error whenever it is defined
// const x: never = true; // Error: Type 'boolean' is not assignable to type 'never'
// console.log(x); // Error: This expression is not callable. Type 'never' has no call signatures.

// never is rarely used, especially by itself, its primary use is in advanced generics
