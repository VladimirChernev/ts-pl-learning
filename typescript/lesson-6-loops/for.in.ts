// npx ts-node lesson-6-loops/for.in.ts

// for/in loop loops through the properties of an object

// Syntax:
// for (key in person) {
//   // code block to be executed
// }

// the for in loop iterates over a person object
// each iteration returns a key (x = fname, lname, age)
// the key is used to access the value of the key
// the value of the key is person[x] (John, Doe, 25)

// Example:
const person = { fname: "John", lname: "Doe", age: 25 };
let text: string = "";

for (const property in person) {
  text += person[property] + ", "; // person[property] = person.fname, person.lname, person.age
}
console.log(text);

// for/in can also loop over the properties of an Array but only use when index order is NOT important, NOT a good practice, use for of instead
// for (variable in array) {
//   // code block to be executed
// }

// Example:
const nubmers: number[] = [45, 4, 9, 16, 25];
let txt = "";

for (const x in nubmers) {
  txt += nubmers[x] + ", ";
}
console.log(txt);
