// npx ts-node lesson-4-conditional-statements/if.else.ts

// Use If to specify a block of code to be executed, if a specified condition is true

// If Syntax:
const condition: boolean = true;
if (condition) {
  // code block to be executed if the condition is true
}

// Example:
const hour: number = 17;
if (hour < 18) {
  console.log("Good day.");
}

// Use Else stetment to specify a block of code to be executed, if the same condition is false

// Else Syntax:
if (condition) {
  // code block to be executed if the condition is true
} else {
  // code block to be executed if the condition is false
}

// Example:
if (hour < 18) {
  console.log("Good day.");
} else {
  console.log("Good evening.");
}

// Use Else If to specify a new condition if the first condition is false

// Else If Syntax:
const condition2: boolean = true;
if (condition) {
  // code block to be executed if condition is true
} else if (condition2) {
  // code block to be executed if condition2 is true
} else {
  // code block to be executed if all conditions are false
}

// Example:
if (hour < 10) {
  console.log("Good morning.");
} else if (hour < 18) {
  console.log("Good day.");
} else {
  console.log("Good evening.");
}
