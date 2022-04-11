var a = "hello world";
var getFullName = function (name, surname) {
    return name + " " + surname;
};
var user = {
    name: "Kamrul",
    age: 30
};
var user2 = {
    name: "Rakib",
    age: 25
};
// the union property. common uses of it at the time of settings data to null
var userName = 1;
var errorMessage = null; // highly reccommended that to use default value
var friendsName = ["Kodom", "Anar", "Dalim"];
// in a function when you don't return something that is called void in typescript
var doSomething = function () {
    console.log("I am doing something");
};
// void means undefined or null
// another type name is any which is not recommended to use because it will destroy the typescript funtionality
// another type name is never . the function that never ends is a never type.
// as operator makes type assertion
var unknownType = 1;
var s2 = unknownType;
// conversion of type is called type assertion in typescript
