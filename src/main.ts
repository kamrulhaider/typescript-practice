let a: string = "hello world";

const getFullName = (name: string, surname: string): string => {
  return name + " " + surname;
};

// console.log(getFullName("kamrul", "haider"));

// interface is used to prevent the repeatation of the object data type, Interface can use funtions.
interface User {
  name: string;
  age: number;
  gender?: string;
}

const user: User = {
  name: "Kamrul",
  age: 30,
};

const user2: User = {
  name: "Rakib",
  age: 25,
};

// the union property. common uses of it at the time of settings data to null
let userName: string | number = 1;
let errorMessage: string | null = null; // highly reccommended that to use default value

// type alliaces (in typescript you can declare type by your own. It will reduce the complexity of the projects.)

type Name = string;

let friendsName: Name[] = ["Kodom", "Anar", "Dalim"];

// using type alliases and union combined
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

// in a function when you don't return something that is called void in typescript
const doSomething = (): void => {
  console.log("I am doing something");
};
// void means undefined or null
// another type name is any which is not recommended to use because it will destroy the typescript funtionality
// another type name is never . the function that never ends is a never type.
// as operator makes type assertion

let unknownType: unknown = 1;
let s2: string = unknownType as string;

// conversion of type is called type assertion in typescript
