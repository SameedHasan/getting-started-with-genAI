// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich_maker(...items: string[]) {
  console.log("\nThe sandwich should include following items: ");
  items.forEach((item) => console.log(item));
}
sandwich_maker("Beef Patty", "Cheese", "Onion rings");
sandwich_maker("Chicken Patty", "Tomato", "cheese", "Garlic Mayo");
sandwich_maker("Grilled Chicken", "Lettuce", "Garlic Mayo");
