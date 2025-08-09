// npx ts-node lesson-3-special-types/less-common/undefinedAndNull.ts

// undefined and null are types that refer to the JavaScript primitives undefined and null respectively
const y: undefined = undefined;
const z: null = null;
console.log(y);
console.log(z);

// These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.
