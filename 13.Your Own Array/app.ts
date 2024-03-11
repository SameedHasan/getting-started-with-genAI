// Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

const cars: string[] = [
  "Toyota Prius",
  "Honda Civic",
  "Honda City",
  "Haval H6",
];

cars.forEach((car: string) => {
  console.log(`I would like to own a ${car}.`);
});
