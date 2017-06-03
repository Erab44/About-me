'use strict';

var cities = ['redmond', 'kirkland', 'bellevue', 'glendale', 'north hollywood'];
var guess = prompt('Which cities have I lived in across two states? You have 6 tries. Good luck!');
var rounds = 6;

while(rounds >= 0) {
  for(var i = 0; i < cities.length; i++){
    if(guess.toLowerCase() === cities[i]){
      console.log(i);
      alert('Correct! I did live there!');
      break;
    } else {
      rounds--;
      alert('Negative. Try again. Only a few more options.');
      continue;
    }
  }
}
