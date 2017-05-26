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

var answer4 = prompt('And now a non-alcoholic related question. Does his job normally have him traveling all over the place?')
if (answer4.toLowerCase() === 'yes') {
  alert('You would be correct. 6 states to be exact. Not fun.');
} else {
  alert('Incorrect. He is usually traveling, covering 6 states.');
}
//adam made this line
var answer5 = prompt('With all that traveling, do you think he\'s seen some cool places?')
if (answer5.toLowerCase() === 'yes') {
  alert('Honestly, he doesn\'t go there for scenery, so, no.');
} else {
  alert('You would be correct. In and out, no stopping.');
}
