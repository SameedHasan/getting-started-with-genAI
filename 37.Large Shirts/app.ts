function make_shirt(
  size: string = "Large",
  message: string = "I love TypeScript."
) {
  console.log("Size :>> ", size);
  console.log("Message :>> ", message);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Eat, Drink, Code!");
