"use strict";
// Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");
console.log("Is car.length < 7? I predict True.");
console.log(car.length < 7);
console.log("Is car !== 'Subaru'? I predict True.");
console.log(car !== "Subaru");
console.log("Is car.includes('sub')? I predict True.");
console.log(car.includes("sub"));
console.log("Is car.startsWith('s')? I predict True.");
console.log(car.startsWith("s"));
console.log("Is car.startsWith('se')? I predict False.");
console.log(car.startsWith("se"));
console.log("Is car == 'civic'? I predict False.");
console.log(car == "civic");
console.log("Is car.toUpperCase()===Subaru? I predict False.");
console.log(car.toUpperCase() === "Subaru");
console.log("Is car.length > 6? I predict False.");
console.log(car.length > 6);
console.log("Is car.endsWith('s')? I predict False.");
console.log(car.endsWith("s"));
