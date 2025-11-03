// npx ts-node lesson-6-loops/for.of.ts

// for/of loops through the values of an iterable object (like an array)

// syntax
// variable - fore every iteration, the value of the next property is assigned to the variable
// iterable - an object that can be iterated over (like an array, string, etc.)
// for (variable of iterable) {
//   // code block to be executed
// }

// looping over an array example:
const cars: string[] = ["BMW", "Volvo", "Mini"];
let text = "";

for (const x of cars) {
  text += x + "\n";
}
console.log(text);

// looping over a string example:
const language: string = "TypeScript";

let txt = "";
for (const char of language) {
  txt += char + " ";
}
console.log(txt);

// Array.forEach() is a method of the Array object and considered a better practice when looping through an array
const numbers2: number[] = [45, 4, 9, 16, 25];
let txt2 = "";

function myFunction(value: number) {
  txt2 += value + ", ";
}

numbers2.forEach(myFunction);

// alternative of the above with for of
// for (const x of numbers2) {
//   txt2 += x + ", ";
// }

console.log(txt2);
