function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript."; }
    console.log("Size :>> ", size);
    console.log("Message :>> ", message);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Eat, Drink, Code!");
