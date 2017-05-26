'use strict';

var user = prompt('What is your name?');
  console.log('The user\'s name is ' + user);

var answer1 = prompt('This is a Yes or No answer, please reply with a yes or no. Does Jeff partake in alcohol?');
if (answer1.toLowerCase() === 'yes') {
  alert('Incorrect! Jeff does not partake.');
} else {
  alert('Correct!');
}

var answer2 = prompt('In regards to the first question, would he make his own Whiskey?');
if (answer2.toLowerCase() === 'yes') {
  alert('Good job. He is currently gathering materials to start distilling soon.');
} else {
  alert('Negative. He is planning to. Soon.');
}

var answer3 = prompt('And since he does not drink, he will need volunteers to occasionally test the taste and quality. Are you a willing volunteer for tasting?')
if (answer3.toLowerCase() === 'yes') {
  alert('Excellent! You\'ll be put on the list');
  console.log(user + ' ' + answer3);
} else {
  alert('No worries. Thank you tho!');
}
