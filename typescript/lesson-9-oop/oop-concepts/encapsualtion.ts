// npx ts-node lesson-8-oop/encapsualtion.ts 

// Class members also be given special modifiers which affect visibility.
    // public - (default) allows access to the class member from anywhere
    // private - only allows access to the class member from within the class
    // protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
// console.log(person.name);  // person.name isn't accessible from outside the class since it's private
console.log(person.getName());
