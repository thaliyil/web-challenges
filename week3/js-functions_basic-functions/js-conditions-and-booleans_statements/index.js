console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "hhhgfghh";
if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else console.log("Acess Denied.");

// Part 2: Even / Odd
const number = 7;
if (number % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}
// Part 3: Hotdogs
const numberOfHotdogs = 200;
if (numberOfHotdogs > 1000000) {
  console.log("the price to pay is:", numberOfHotdogs * 0.1, "euro");
} else if (numberOfHotdogs >= 100) {
  console.log("the price is", numberOfHotdogs * 1, "Euro");
} else if (numberOfHotdogs >= 5) {
  console.log("the price is", numberOfHotdogs * 1.5, "euro");
} else if (numberOfHotdogs < 5) {
  console.log("the price is", numberOfHotdogs * 2);
}

// Part 4: Daytime
const currentHour = 18;

let statement = "";
statement = currentHour < 17 ? "still need to learn" : "Party time";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
