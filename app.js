'use strict';
var firstQuestion = prompt('Hello! Welcome to Erick\'s Guessing Game! Let\'s get started with an easy question. Is my name Erick? Yes or No?');
var firstAnswer = firstQuestion.toUpperCase();
if (firstQuestion === 'yes' || firstQuestion === 'y') {
  alert('Good. You better have gotten this answer correct.')
} else {
  alert('This answer is incorrect. Wow. How on earth did you get that wrong?')
}

var secondQuestion = prompt('Have I ever lived in the Netherlands? Yes or No?');
var secondAnswer = secondQuestion.toUpperCase();
if (firstQuestion === 'no' || firstQuestion === 'n') {
  alert('Wrong! But I did used to live in Germany ;)')
} else {
  alert('You got this one right! Great job!')
}

var thirdQuestion = prompt('Do I have 30 baseball caps? Yes or No?');
var thirdAnswer = thirdQuestion.toUpperCase();
if (firstQuestion === 'no' || firstQuestion === 'n') {
  alert('Your answer is wrong. Unfortunately, I only have 22 baseball caps.')
} else {
  alert('Right! I only have 22 baseball caps.')
}
