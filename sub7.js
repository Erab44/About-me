'use strict';

var cities = ['redmond', 'kirkland', 'bellevue', 'glendale', 'north hollywood'];
var guess = prompt('Which cities have I lived in across two states? You have 6 tries. Good luck!').toLowerCase;
var rounds = 6;

while(rounds >= 0) {
  for(var i = 0; i < cities.length; i++){
    if (guess === cities) {
      alert ('Correct! I did live there!');
    } else {
      alert ('Negative, try a different one.')
      rounds--;
    }
}
}
