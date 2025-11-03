// npx ts-node lesson-5-collections/tuple.ts

// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array
const ourTuple: [number, boolean, string] = [5, false, "Coding God was here"];
console.log(typeof ourTuple[0], typeof ourTuple[1], typeof ourTuple[2]);
console.log(ourTuple);

// initialized incorrectly which throws an error:
// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.
// const ourTuple2: [number, boolean, string] = [false, "Coding God was mistaken", 5];
// console.log(ourTuple2);

// A good practice is to make your tuple readonly.
// Tuples only have strongly defined types for the initial values
// We have no type safety in our tuple for indexes 3+
// ourTuple.push("Something new and wrong");
// console.log(typeof ourTuple[0], typeof ourTuple[1], typeof ourTuple[2], typeof ourTuple[3]);
// console.log(ourTuple[3]);
// console.log(ourTuple);

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, "The Real Coding God"];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');
console.log(ourReadonlyTuple);

// Named tuples allow us to provide context for our values at each index
const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph);

// Since tuples are arrays we can also destructure them
const vehicles: [string, string, string] = ["mustang", "f-150", "expedition"];

const [car, truck, suv] = vehicles;
// which is the same as:
// const car = vehicles[0];
// const truck = vehicles[1];
// const1 suv = vehicles[2];

console.log(vehicles);
console.log(car, truck, suv);
