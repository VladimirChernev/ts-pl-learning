// npx ts-node lesson-6-loops/while.ts

// while loops through a block of code as long as a specified condition is true
// syntax:
const condition: boolean = true;
while (condition) {
  // code block to be executed
  break; // break statement to exit the loop
}

// Example:
let i: number = 0;
while (i < 10) {
  console.log("The number is " + i);
  i++;
}

// do/while also loops through a block of code as long as a specified condition is true, but it will always execute the block once before checking the condition

// syntax:
do {
  // code block to be executed
  break; // break statement to exit the loop
} while (condition);

// example:
const n: number = 11;
let text: string = "";
do {
  text += "The number is " + n;
} while (n < 10);
console.log(text);
