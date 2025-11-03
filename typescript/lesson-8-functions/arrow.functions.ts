// npx ts-node lesson-7-functions/arrow.functions.ts

// Arrow Functions - allow us to write shorter function

// syntax
const myFunction = (a: number, b: number) => a * b;
console.log(myFunction(2, 3)); // 6

// normal function
const hello = function () {
  return "Hello World!";
};
console.log(hello()); // Hello World!

// arrow function:
const hello2 = () => {
  return "Hello World!";
};
console.log(hello2()); // Hello World!

// even shorter! (Note: This works only if the function has only one statement.)
const hello3 = () => "Hello World!";
console.log(hello3()); // Hello World!

// Arrow Function With Parameters:
const hello4 = (value: string) => "Hello " + value;
console.log(hello4("World!")); // Hello World!
