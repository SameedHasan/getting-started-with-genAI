"use strict";
// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let car = "Subaru";
// • Tests for equality and inequality with strings
console.log("Is car === 'subaru'? I predict False.");
console.log(car === "subaru");
console.log("Is car === 'Subaru'? I predict True.");
console.log(car === "Subaru");
// • Tests using the lower case function
console.log("Is car.toLowerCase()===subaru? I predict True.");
console.log(car.toLowerCase() === "subaru");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 9;
let num2 = 2;
console.log("Is num1 === 9? I predict True.");
console.log(num1 === 9);
console.log("Is 9 === 2? I predict False.");
console.log(num1 === num2);
console.log("Is 9 > 2? I predict True.");
console.log(num1 > num2);
console.log("Is 9 < 2? I predict False.");
console.log(num1 < num2);
console.log("Is 9 >= 15? I predict False.");
console.log(num1 >= 15);
console.log("Is 9 <= 15? I predict True.");
console.log(num1 <= 15);
console.log("Is 2 === 2? I predict True.");
console.log(num2 === 2);
// • Tests using "and" and "or" operators
console.log("Is 9 < 15 and 9 > 7 ? I predict True.");
console.log(num1 < 15 && num1 > 7);
console.log("Is 9 > 15 or 9 == 9 ? I predict True.");
console.log(num1 > 15 || num1 == 9);
// • Test whether an item is in a array
let languages = ["Urdu", "English", "French", "Chinese", "Hindi"];
console.log("Is 'English' in the languages array? I predict False.");
console.log(languages.includes("English"));
// • Test whether an item is not in a array
console.log("Is 'Arabic' in the languages array? I predict False.");
console.log(languages.includes("Arabic"));
