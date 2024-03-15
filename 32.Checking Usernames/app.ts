// Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users: string[] = ["saad", "sameed", "salman", "mustafa", "afaq"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users: string[] = ["ali", "Sameed", "kamran", "mustafa", "taha"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
new_users.forEach((user) => {
  if (current_users.includes(user)) {
    console.log("The person will need to enter a new username.");
  } else {
    console.log("The username is available.");
  }
});
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
new_users.forEach((user) => {
  let userexists = current_users.find((current_user) => {
    return current_user.toLowerCase() === user.toLowerCase();
  });

  if (userexists) {
    console.log("The person will need to enter a new username.");
  } else {
    console.log("The username is available.");
  }
});
