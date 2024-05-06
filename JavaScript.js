function guessNumber() {
  const random = Math.floor(Math.random() * 10) + 1;
  let number = parseInt(prompt("Enter the number from 1 to 10"));

  while (number !== random) {
    number = parseInt(prompt("Enter the number from 1 to 10"));
  }
  if (number == random) {
    document.write("You guessed the correct number");
  }
}
guessNumber();
