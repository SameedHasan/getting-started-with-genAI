//You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let guests: string[] = ["Afaq", "Farooq", "Tayyab", "Sami", "Mustafa"];

guests.map((guest: string) =>
  console.log(
    `Dear ${guest}, I found a bigger dinner table, so I have invited more guests!`
  )
);
// • Add one new guest to the beginning of your array.
guests.unshift("Ali");
// • Add one new guest to the middle of your array.
guests.splice(Math.floor(guests.length / 2), 0, "Saad");
// • Use append() to add one new guest to the end of your list.
guests.push("Salman");
//  • Print a new set of invitation messages, one for each person in your list.
guests.map((guest: string) =>
  console.log(`Dear ${guest}, You are cordially invited to dinner.`)
);
