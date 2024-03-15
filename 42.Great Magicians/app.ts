// Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => console.log(magician));
}
function make_great(magicians: string[]) {
  const great_magicians = magicians.map((magician) => "The Great " + magician);
  show_magicians(great_magicians);
}
let magicians: string[] = [
  "Harry Houdini",
  "David Blaine",
  "Doug Henning",
  "Dai Vernon",
];

make_great(magicians);
