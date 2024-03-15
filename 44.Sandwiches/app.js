// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich_maker() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nThe sandwich should include following items: ");
    items.forEach(function (item) { return console.log(item); });
}
sandwich_maker("Beef Patty", "Cheese", "Onion rings");
sandwich_maker("Chicken Patty", "Tomato", "cheese", "Garlic Mayo");
sandwich_maker("Grilled Chicken", "Lettuce", "Garlic Mayo");
