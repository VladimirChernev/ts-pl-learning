// npx ts-node lesson-2-simple-types/less-common/bigint.ts

// example positive
// let positiveBigint: bigint = BigInt("3000000000000000000");
const positiveBigint: bigint = 3000000000000000000n;
console.log(typeof positiveBigint);
console.log(positiveBigint);

// example negative
const negativeBigint: bigint = -7000000000000000000n;
console.log(negativeBigint);

// bigints cant have decimals
// const bigintDecimal: bigint = 5000000000000000000.24n;
// console.log(bigintDecimal);
