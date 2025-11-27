// Homework 03 - Collections and Loops

// Exercise 1: Loop over and array and log items only if the item's length is over 4 characters
// Step 1: Declare an array with the colors: "red","blue","green","yellow","purple","orange","white","black"
// Step 2: Use a for loop to iterate over the array and check if the length of each item is greater than 4 characters
// Step 3: Log the item if the condition is met

const colours: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'black'];

for (const colour of colours) {
  if (colour.length > 4) {
    console.log(colour);
  }
}

// Exercise 2: Write a script to log in the console all numbers from 1 to 100 using a loop

for (let i: number = 1; i <= 100; i++) {
  console.log(i);
}

// Excercise 3: Write a script to construct the following pattern, using a nested for loop:
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

for (let i = 1; i <= 5; i++) {
  let row: string = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}
for (let i = 4; i >= 1; i--) {
  let row: string = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}

// Exercise 4: Phone number area code substitution
// Step 1: Declare an array with string phone number values "0376829209", "04239982009", "0536829299"
// Step 2: Use a for loop to iterate over the array and replace the "0" in the front with "+359"
// Step 3: Log the original and the new phone numbers in the console

const phoneNumbers: string[] = ['0376829209', '04239982009', '0536829299'];

for (const phoneNumber of phoneNumbers) {
  let newNumber: string;

  if (phoneNumber.startsWith('0')) {
    newNumber = '+359' + phoneNumber.slice(1);
  } else {
    newNumber = phoneNumber;
  }

  // advanced scripting solution that can replace the above lines of code until the for:
  // const newNumber: string = phoneNumber.startsWith('0') ? '+359' + phoneNumber.slice(1) : phoneNumber;

  console.log(`Phone number - ${phoneNumber} is updated to ${newNumber}`);
}

// Exercise 5: Decide on an evening activity
// Step 1: Declare 4 variable Tuple with: name (string), hour (whole number), money (floating point values number) and if person is sick (boolean).
// Step 2: Write a conditional statement that decides on an evening activity based on the following rules:
// - if the person is not sick and has at least 20 money the activity is "go to the cinema"
// - if the person is not sick and has less then 20 money the activity is "go to the park"
// - if the person is not sick and has more then 20 money, but its late at night (hour is between 21 and 24), the activity is "watch a movie"
// - if the person is sick, the activity is "stay at home and go to bed"
// Step 3: Log the person's details and the decided activity.

const person: [string, number, number, boolean] = ['Ivan', 22, 45, false];

if (person[3]) {
  console.log(`${person[0]} is sick and they are going to stay at home and go to bed.`);
} else if (person[2] < 20) {
  console.log(`${person[0]} is not sick, but they have only ${person[2]} money, they are going to the park.`);
} else if (person[1] < 21) {
  console.log(`${person[0]} is not sick, it is ${person[1]} o'clock and they have ${person[2]} money so they are going to the cinema.`);
} else {
  console.log(`${person[0]} is not sick, they have ${person[2]} money but it is ${person[1]} o'clock so they are going to watch a movie at home.`);
}

// Exercise 6: Use an Enum, Object type and Arrays
// Step 1: Declare an enum of Account Types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: referance the Enum here and assign the account a value,
// }
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console

enum AccountTypes {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}

const client1 = {
  name: 'John Doe',
  accountType: AccountTypes.Deposit,
};

const client2 = {
  name: 'Jane Smith',
  accountType: AccountTypes.FlexSave,
};

const client3 = {
  name: 'Petar Ivanov',
  accountType: AccountTypes.Current,
};

const clients = [client1, client2, client3];

for (const client of clients) {
  console.log(`Name: ${client.name}, Account Type: ${AccountTypes[client.accountType]}`);
}
