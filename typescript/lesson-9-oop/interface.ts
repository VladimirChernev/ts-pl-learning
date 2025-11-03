// npx ts-node lesson-8-oop/interface.ts 

// Interfaces: allow defining object types with a custom name
interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
};
console.log(rectangle.height); // 20
console.log(rectangle.width); // 10


// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};
console.log(coloredRectangle.height); // 20
console.log(coloredRectangle.width); // 10
console.log(coloredRectangle.color); // red
