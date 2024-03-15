// Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great(magicians) {
    var great_magicians = magicians.map(function (magician) { return "The Great " + magician; });
    return great_magicians;
}
var magicians = [
    "Harry Houdini",
    "David Blaine",
    "Doug Henning",
    "Dai Vernon",
];
magicians = make_great(magicians);
show_magicians(magicians);
