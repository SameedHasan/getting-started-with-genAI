// You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
var guests = ["Afaq", "Farooq", "Tayyab", "Sami", "Mustafa"];
guests.unshift("Ali");
guests.splice(Math.floor(guests.length / 2), 0, "Saad");
guests.push("Salman");
console.log("I can only invite 2 people for dinner.");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guests.length > 2) {
    //   const removedGuest = guests.pop();
    console.log("Sorry, ".concat(guests.pop(), ", I can't invite you to dinner."));
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are still invited to dinner."));
});
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guests.pop();
guests.pop();
console.log("Empty guest list:", guests);
