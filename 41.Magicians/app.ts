//  Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => console.log(magician));
}

let magicians: string[] = [
  "Harry Houdini",
  "David Blaine",
  "Doug Henning",
  "Dai Vernon",
];

show_magicians(magicians);
