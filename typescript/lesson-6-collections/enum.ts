// npx ts-node lesson-5-collections/enum.ts

// enum iis a special "class" that represents a group of constants (unchangeable variables).

// default value enmum
enum CardinalDirections {
  North = 1,
  South,
  East,
  West,
}

const currentDirection: CardinalDirections = CardinalDirections.North;

console.log(currentDirection); // 1
console.log(CardinalDirections.West); // 4

// fully initialized enum numbers
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Unauthorized = 401,
  Accepted = 202,
}

console.log(StatusCodes.NotFound); // 404
console.log(StatusCodes.Success); // 200

// fully initialized enum string
enum CardinalDirections2 {
  North = "North",
  South = "South",
  East = "East",
  West = "West",
}

console.log(CardinalDirections2.West); // West
