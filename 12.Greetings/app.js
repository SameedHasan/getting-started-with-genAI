// Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friends = ["Afaq", "Farooq", "Kamran", "Sami", "Mustafa"];
friends.map(function (friend) { return console.log("Hello ".concat(friend, ", How are you?")); });
