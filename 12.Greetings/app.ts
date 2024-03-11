// Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
const friends: string[] = ["Afaq", "Farooq", "Kamran", "Sami", "Mustafa"];

friends.map((friend: string) => console.log(`Hello ${friend}, How are you?`));
