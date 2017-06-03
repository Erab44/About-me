'use strict';

var states = ['Washington', 'California'];
var guess = prompt('Which states have I lived in?');

while()
for(var i = 0; i < states.length; i++){
  if(guess === states[i]){
    alert('Correct! I did live there!');
    break;
  } else {
    alert('Negative. Try again. Only a few more options.');
    continue;
  }
}
