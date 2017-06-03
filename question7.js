'use strict';

var states = ['wa', 'ca', 'or', 'id'];
var guess = 'ca';
for(var i = 0; i < states.length; i++){
  if(guess === states[i]){
    console.log('yay');
    break;
  } else {
    console.log('no');
  }
}
