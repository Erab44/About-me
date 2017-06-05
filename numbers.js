'use strict';

function numbersGuess() {
  var number = Math.floor((Math.random() * 50) + 1);
  console.log(number);
  var turns = 4;
  var answer = parseInt(prompt('Guess a number between 1 and 50'));

  while (turns >= 0) {
    if(turns === 0){
      alert('Sorry you ran out of turns');
      break;
    } else if (answer > number) {
      turns--;
      //document.write('Sorry, too high! Try again.');
      var answer = parseInt(prompt('Your number was too high. Try again.'));
      continue;
    } else if (answer < number) {
      turns--;
      //document.write('So close, yet so far.');
      var answer = parseInt(prompt('Your number was too low. Try again'));
      continue;
    } else if (number === answer) {
      alert('Congratulations! You guessed the secret number');
      //document.write('Correct! You guessed the secret number! ' + number);
      break;
    }
  }
}

numbersGuess();

document.write('The secret number was ' + number);
