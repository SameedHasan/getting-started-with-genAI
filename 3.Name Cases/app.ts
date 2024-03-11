// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let person_name: string = "syED saMeed haSan";

// Lowercase
console.log(
  `Hello ${person_name.toLowerCase()}, would you like to learn some Python today?`
);
// Uppercase
console.log(
  `Hello ${person_name.toUpperCase()}, would you like to learn some Python today?`
);

// Titlecase
function toTitleCase(inputString: string): string {
  let words = inputString.split(" ");
  words = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return words.join(" ");
}

console.log(
  `Hello ${toTitleCase(
    person_name
  )}, would you like to learn some Python today?`
);
