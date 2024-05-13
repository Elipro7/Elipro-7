const prompt = require("prompt-sync")();

const target = Math.round(Math.random() * 100)

let guesses = 0;
console.log(target);

const guess = Number(prompt("Guess the number(0-100): "))
console.log(guess);

if (guess > target) {
  console.log("Your guess too high! Try again.");

} else if (guess < target) {
  console.log("Your guess is too low! Try again");
} else {
  console.log("You guessed it");
}