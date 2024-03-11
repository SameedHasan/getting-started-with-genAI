// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

let guests: string[] = ["Afaq", "Farooq", "Kamran", "Sami", "Mustafa"];

console.log(`Unfortunately, ${guests[2]} can't make it to the dinner.`);

// • Modify your list, replacing the name of the guest who can't make it with the name of the new person you are inviting.

guests[2] = "Tayyab";

// • Print a second set of invitation messages, one for each person who is still in your list.

guests.map((guest: string) =>
  console.log(`Dear ${guest}, You are cordially invited to dinner.`)
);
