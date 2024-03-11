// Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var cars = [
    "Toyota Prius",
    "Honda Civic",
    "Honda City",
    "Haval H6",
];
cars.forEach(function (car) {
    console.log("I would like to own a ".concat(car, "."));
});
