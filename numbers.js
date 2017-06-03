'use strict'

var number = Math.floor((Math.random() * 50) + 1);
var turns = 5;
var answer = prompt('Guess a number between 1 and 50');


  while (turns > 0) {
    if (answer > number) {
      turns = 0;
      document.write('Sorry, too high! Try again. ' + number);
    } else if (number < answer) {
      turns--;
      document.write('So close, yet so far. ' + number);
    } else (number === answer) {
      document.write('Correct! You guessed the secret number! ' + number);
    }
  }


var answer1 = prompt('Hello ' + user + ', these are Yes or No answers, so please reply with a yes or no. Does Jeff partake in alcohol?');
if (answer1.toLowerCase() === 'yes') {
  alert('Incorrect! Jeff does not partake.');
} else {
  alert('Correct!');
}
