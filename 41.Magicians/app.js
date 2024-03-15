//  Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
var magicians = [
    "Harry Houdini",
    "David Blaine",
    "Doug Henning",
    "Dai Vernon",
];
show_magicians(magicians);
