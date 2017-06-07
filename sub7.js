'use strict';

var cities = ['redmond', 'kirkland', 'bellevue', 'glendale', 'north hollywood'];
var guess = prompt('Which cities have I lived in across two states? You have 6 tries. Good luck!').toLowerCase;
var rounds = 6;

while (guess !== cities) {
  for (var i = 0; i < cities.length; i++){
    if (guess !== cities) {
      alert ('Negative. I did not live there. Try another.');
      rounds--;
    } else {
      alert ('Correct! I did live there!');
      break;
    }
  }
}
