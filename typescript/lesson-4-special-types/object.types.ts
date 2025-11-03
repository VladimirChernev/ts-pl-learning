// npx ts-node lesson-3-special-types/object.types.ts

// TypeScript has specific syntax for typing objects

const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2020,
};
console.log(car);

// optional properties - are properties that don't have to be defined in the object definition
const car1: { type: string; mileage?: number } = {
  // no error
  type: "Toyota",
};
car1.mileage = 2000;
console.log(car1);
