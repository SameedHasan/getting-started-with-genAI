// Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
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
var great_magicians = make_great(magicians);
show_magicians(magicians);
show_magicians(great_magicians);
