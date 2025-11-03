// npx ts-node lesson-6-loops/for.ts

// Loops can execute a block of code a number of times.

// instead of writing:
let text: string = "";
const cars: string[] = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

text += "<br>" + cars[0] + "<br>\n";
text += "<br>" + cars[1] + "<br>\n";
text += "<br>" + cars[2] + "<br>\n";
text += "<br>" + cars[3] + "<br>\n";
text += "<br>" + cars[4] + "<br>\n";
text += "<br>" + cars[5] + "<br>\n";

// you can write:
for (let i: number = 0; i < cars.length; i++) {
  text += "<br>" + cars[i] + "<br>\n";
}
console.log(text);

// Syntax:
let expression1; // Initialization - initializes the loop variable, optional. You can set your loop variable before the loop starts
let expression2; // Condition - exaluate the condition of the initial variable, optional. If ommited must add break inside the loop
let expression3; // Increment - increments the value of the loop variable, optional. You can increment your values inside the loop
for (expression1; expression2; expression3) {
  // code block to be executed
}

// Examples:
let text2: string = "";
for (let i = 0; i < 5; i++) {
  text2 += "The number is: '" + i + "'\n";
}
console.log(text2);

// set expresion variables before the loop starts and omit expression 1:
let i: number = 2;
let len: number = cars.length;
let text3 = "";
for (; i < len; i++) {
  text3 += cars[i] + " ";
}
console.log(text3);

// You can intiate many values in expression 1 (separated by comma):
let text4: string = "";
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + " ";
  text4 = text;
}
console.log(text4);

// Omit expression 2 and add a break statement inside the loop
let text5: string = "";
for (let i = 0; ; i++) {
  text5 += "The number is: '" + i + "'\n";
  if (i === 5) {
    break; // breaks the loop when i is 5
  }
}
console.log(text5);

// omit expressin 3 and add an increment inside the loop
let text6: string = "";
for (let i = 0; i < 5; ) {
  text6 += "The number is: '" + i + "'\n";
  i++; // increment inside the loop
}
console.log(text6);
