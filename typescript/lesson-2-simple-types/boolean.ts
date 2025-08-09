// npx ts-node lesson-2-simple-types/boolean.ts

// Boolean (true/false)
const isOldEnough: boolean = true;
const hasLicense: boolean = false;

// example
if (isOldEnough) {
  console.log("You can drink alchohol");
} else {
  console.log("You can't drink alchohol");
}

if (hasLicense) {
  console.log("You can drive a car");
} else {
  console.log("You can't drive a car");
}

const firstNumber: number = 5;
const secondNumber: number = 10;

// comparison operators
const isGreater: boolean = firstNumber > secondNumber;
const isLower: boolean = firstNumber < secondNumber;
const isEqual: boolean = firstNumber === secondNumber;
const isNotEqual: boolean = firstNumber !== secondNumber;
const isGreaterOrEqual: boolean = firstNumber >= secondNumber;
const isLowerOrEqual: boolean = firstNumber <= secondNumber;

console.log("isGreater: ", isGreater); // false
console.log("isLower: ", isLower); // true
console.log("isEqual: ", isEqual); // false
console.log("isNotEqual: ", isNotEqual); // true
console.log("isGreaterOrEqual: ", isGreaterOrEqual); // false
console.log("isLowerOrEqual: ", isLowerOrEqual); // true

// And Or operators
const areNumbersEqualTo: boolean = 5 === firstNumber && 10 === secondNumber;
const isAnyNumberEqualTo: boolean = 6 === firstNumber || 11 === secondNumber;
console.log("areNumbersEqualTo: ", areNumbersEqualTo); // true
console.log("isAnyNumberEqualTo: ", isAnyNumberEqualTo); // false
