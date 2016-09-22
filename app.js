'use strict';

var userName = prompt('What is your name?');
var firstAnswer = prompt('Hello, ' + userName + '! Welcome to Erick\'s Guessing Game! Let\'s get started with an easy question. Is my name Erick?').toLowerCase();
if (firstAnswer === 'yes' || firstAnswer === 'y') {
  alert('Good. You better have gotten this answer correct.');
  console.log(userName + ' answered this question correctly!');
} else {
  alert('That answer is incorrect. Wow. How on earth did you get that wrong?');
  console.log(userName + ' answered this question incorrectly.');
}

var secondAnswer = prompt('Have I ever lived in the Netherlands?').toLowerCase();
if (secondAnswer === 'no' || secondAnswer === 'n') {
  alert('You got this one right! Great job!');
  console.log(userName + ' answered this question correctly!');
} else {
  alert('Wrong! But I did live in Germany when I was younger.');
  console.log(userName + ' answered this question incorrectly.');
}

var thirdAnswer = prompt('Do I have 30 baseball caps?').toLowerCase();
if (thirdAnswer === 'no' || thirdAnswer === 'n') {
  alert('Right! I only have 22 baseball caps.');
  console.log(userName + ' answered this question correctly!');
} else {
  alert('Your answer is wrong. Unfortunately, I only have 22 baseball caps.');
  console.log(userName + ' answered this question incorrectly.');
}

var fourthAnswer = prompt('Before Code Fellows, I worked at Forever 21\'s Corporate Headquarters. Yes or No?').toLowerCase();
if (fourthAnswer === 'yes' || fourthAnswer === 'y') {
  alert('Correct! I worked in the HR department, specifically in internal communications.');
  console.log(userName + ' answered this question correctly!');
} else {
  alert('That answer is incorrect!');
  console.log(userName + ' answered this question incorrectly.');
}

var fifthAnswer = prompt('Do I like dogs more than cats?').toLowerCase();
if (fifthAnswer === 'yes' || fifthAnswer === 'y') {
  alert('Right on! Dogs are the best!');
  console.log(userName + ' answered this question correctly.');
} else {
  alert('Wrong. I\'m not much of a cat fan.');
  console.log(userName + ' answered this question incorrectly.');
}

var favNumber = 5;
var attempts = 0;
while (attempts < 4) {
  attempts++;
  var sixthAnswer = parseInt(prompt('What is my favorite number? You will be given 4 chances to guess the correct number.'));
  if (sixthAnswer === 5) {
    alert('Great guess! You are correct!');
    console.log(userName + ' answered this question correctly.');
    break;
  } else if (sixthAnswer < 5) {
    alert('Your guess is too low!');
  } else {
    alert('Your guess is too high!');
  }
}

var 


// var endStatement = confirm('You have completed Erick\'s Guessing Game, ' + userName + '! Thanks for playing!');
