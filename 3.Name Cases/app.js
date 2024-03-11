var person_name = "syED saMeed haSan";
// Lowercase
console.log(
  "Hello ".concat(
    person_name.toLowerCase(),
    ", would you like to learn some Python today?"
  )
);
// Uppercase
console.log(
  "Hello ".concat(
    person_name.toUpperCase(),
    ", would you like to learn some Python today?"
  )
);
// Titlecase
function toTitleCase(inputString) {
  var words = inputString.split(" ");
  words = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return words.join(" ");
}
console.log(
  "Hello ".concat(
    toTitleCase(person_name),
    ", would you like to learn some Python today?"
  )
);
