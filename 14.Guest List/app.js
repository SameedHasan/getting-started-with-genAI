// If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ["Afaq", "Farooq", "Kamran", "Sami", "Mustafa"];
guests.map(function (guest) {
    return console.log("Dear ".concat(guest, ", You are cordially invited to dinner."));
});
