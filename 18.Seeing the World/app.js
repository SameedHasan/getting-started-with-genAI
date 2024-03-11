// Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var places = [
    "Turkey",
    "Dubai",
    "America",
    "Saudi Arabia",
    "Maldives",
];
function printPlaces(places) {
    places.forEach(function (place) {
        console.log(place);
    });
}
// • Print your array in its original order.
console.log("Original Array\n");
printPlaces(places);
// • Print your array in alphabetical order without modifying the actual list.
console.log("\nAlphabetical Order\n");
printPlaces(places.slice().sort());
// • Show that your array is still in its original order by printing it.
console.log("\nOriginal Array\n");
printPlaces(places);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nReverse Alphabetical Order\n");
printPlaces(places.slice().sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("\nOriginal Array\n");
printPlaces(places);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse Array\n");
places.reverse();
printPlaces(places);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nReverse Array 2\n");
places.reverse();
printPlaces(places);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nAlphabetically sorted Array \n");
places.sort();
printPlaces(places);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nReverse Alphabetically sorted Array \n");
places.reverse();
printPlaces(places);
