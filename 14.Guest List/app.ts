// If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const guests: string[] = ["Afaq", "Farooq", "Kamran", "Sami", "Mustafa"];

guests.map((guest: string) =>
  console.log(`Dear ${guest}, You are cordially invited to dinner.`)
);
