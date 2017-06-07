'use strict';

var cities = ['redmond', 'kirkland', 'bellevue', 'glendale', 'north hollywood'];
var guess = prompt('Which cities have I lived in across two states? You have 6 tries. Good luck!');
var rounds = 6;

for (i = 0; i < cities.length; i++) {
  if (guess.toLowerCase() === cities[i]) {
    alert ('Correct! I did live there!');
    console.log(cities[i]);
    break;
  } else {
    alert ('Negative. Try something different.');
    console.log();
    rounds--;
  }
}
