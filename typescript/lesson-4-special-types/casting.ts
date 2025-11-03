// npx ts-node lesson-3-special-types/casting.ts

// Casting is the process of overriding the type of a variable

// Casting with as
const x: unknown = "hello";
console.log((x as string).length);

// casting with <>
const z: unknown = "hello";
console.log((<string>z).length);

// casting doesn't change the type of the variable, it just tells TypeScript to treat it as a different type
const y: unknown = 4;
console.log((y as string).length); // prints undefined since numbers don't have a length

// force casting - to override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
const w = "hello";
console.log(typeof w); // prints infered type string
// console.log(((w as unknown) as number).length); // x is not actually a number so this will return undefined 
console.log((w as unknown as number) + 5); // w is not actually a number so 5 will be concatenated to the string instead of added to it.