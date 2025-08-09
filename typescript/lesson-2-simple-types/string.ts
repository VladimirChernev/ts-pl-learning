// npx ts-node lesson-2-simple-types/string.ts

// string example:
const welcomeMessage: string = "Hello, Peter!";

// using inside quotes: single '', double "", and backticks ``
const quotes: string = "The car's name is 'Subaru'";
// const quotes2: string = "The car's name is "Subaru""; // error: Uncaught SyntaxError: Unexpected token ' in JSON at position 0";
console.log("quotes", quotes);

// escaping characters: \
const quotes2: string = 'The car\'s name is "Subaru"';
console.log("quotes2", quotes2);

// reserved escaped characters:
// \n - new line
// \t - horizontal tab

// String concatenation
const greerting: string = "Hello";
const firstName: string = "Peter";
console.log("greertings", greerting + ", " + firstName + "!");

// String interpolation
const userWelcomeMessage: string = `Welcome, ${firstName}`;
console.log("userWelcomeMessage", userWelcomeMessage);

// string methods
// string.charAt
const firstLetter: string = firstName.charAt(0); // Peter -> P
console.log("firstLetter", firstLetter); // Peter -> P

// string.substring
const firstNameSubstring: string = firstName.substring(0, 2); // Peter -> Pe
console.log("firstNameSubstring", firstNameSubstring); // Peter -> Pe

// string.length
const welcomeMessageLength: number = welcomeMessage.length;
const namesDetails: string = `My welcome message length is ${welcomeMessageLength}`;
console.log("namesDetails", namesDetails);

// take always last character in a string of unknown length
const lastLetterOfWelcomeMessage: string = welcomeMessage[welcomeMessageLength - 1];
console.log("lastLetterOfWelcomeMessage", lastLetterOfWelcomeMessage);

// string.toUpperCase or string.toLowerCase
const welcomeMessageUpper: string = welcomeMessage.toUpperCase();
console.log("welcomeMessageUpper", welcomeMessageUpper); // Hello, Peter! -> HELLO, PETER!

// string.trim and string.trimStart and string.trimEnd
const welcomeMessageWithSpaces: string = "   Hello, Peter!   ";
const welcomeMessageTrimmed: string = welcomeMessageWithSpaces.trim(); // removes spaces from both ends
console.log("welcomeMessageTrimmed", welcomeMessageTrimmed); // Hello, Peter! -> Hello, Peter!

// string.indexOf and lastIndexOf(), because If the item is present more than once, it returns the position of the first occurrence
const indexOfPeter: number = welcomeMessage.indexOf("Peter"); // Hello, Peter! -> 7
console.log("indexOfPeter", indexOfPeter); // Hello, Peter! -> 7

// string.search (this is similar to indexOf but can use regex)
const searchString: string = "Hello, Peter!"; // Hello, Peter! -> 0
const searchStringIndex: number = searchString.search("Peter"); // Hello, Peter! -> 7
console.log("searchStringIndex", searchStringIndex); // Hello, Peter! -> 7

// error examples:

// explicit
// const person1: string = "Jhon"; // type string
// person1 = 33; // attempts to re-assign the value to a different type and fails

//  implicit
// const person2 = "Zed"; // inferred to type string
// person2 = 33; // attempts to re-assign the value to a different type and fails

// Unable to Infer: TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to any which disables type checking.

// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
// const json = JSON.parse("55");

// Most expect json to be an object, but it can be a string or a number like this example
