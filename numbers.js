'use strict'

var number = Math.floor((Math.random() * 50) + 1);
var turns = 4;
var answer = prompt('Guess a number between 1 and 50');


while (turns > 0) {
  if (answer > number) {
    turns--;
    document.write('Sorry, too high! Try again.');
  } else if (answer < number) {
    turns--;
    document.write('So close, yet so far.');
  } else if (number === answer) {
    document.write('Correct! You guessed the secret number! ' + number);
  }
}
