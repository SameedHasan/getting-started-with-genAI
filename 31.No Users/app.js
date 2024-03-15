// Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
var users = ["admin", "sameed", "hasan", "saad", "mustafa"];
if (users.length !== 0) {
    users.forEach(function (user) {
        return console.log("Hello ".concat(user, ", ").concat(user === "admin"
            ? "would you like to see a status report?"
            : "thank you for logging in again"));
    });
}
else {
    console.log("We need to find some users!");
}
// • Remove all of the usernames from your array, and make sure the correct message is printed.
users = [];
if (users.length !== 0) {
    users.forEach(function (user) {
        return console.log("Hello ".concat(user, ", ").concat(user === "admin"
            ? "would you like to see a status report?"
            : "thank you for logging in again"));
    });
}
else {
    console.log("We need to find some users!");
}
