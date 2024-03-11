// Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// Program 14
const guests: string[] = ["Afaq", "Farooq", "Kamran", "Sami", "Mustafa"];

guests.map((guest: string) =>
  console.log(`Dear ${guest}, You are cordially invited to dinner.`)
);
// program 19
console.log("Number of people invited:>> ", guests.length);
