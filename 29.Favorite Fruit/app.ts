// Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
const fruits: string[] = [
  "apple",
  "banana",
  "orange",
  "mango",
  "grapes",
  "strawberry",
];
if (fruits.includes("strawberry")) {
  console.log("Strawberry is in the list");
}
if (fruits.includes("mango")) {
  console.log("Mango is in the list");
}
if (fruits.includes("watermelon")) {
  console.log("Watermelon is in the list");
}
// • Make a array of your three favorite fruits and call it favorite_fruits.
const favorite_fruits: string[] = ["apple", "mango", "strawberry"];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.includes("strawberry")) {
  console.log("I really like Strawberries!");
}
if (favorite_fruits.includes("mango")) {
  console.log("I really like Mangoes!");
}
if (favorite_fruits.includes("watermelon")) {
  console.log("I really like Watermelons!");
}
if (favorite_fruits.includes("banana")) {
  console.log("I really like Bananas!");
}
if (favorite_fruits.includes("apple")) {
  console.log("I really like Apples!");
}
