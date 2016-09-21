'use strict';
/* second variable applies .toLowerCase to the first variable
   second variable called in if else statement */
var firstQuestion = prompt('Hello! Welcome to Erick\'s Guessing Game! Let\'s get started with an easy question. Is my name Erick?');
var firstAnswer = firstQuestion.toLowerCase();
console.log('The user\'s answer is ' + firstAnswer + '.' + ' The correct answer is yes.');
if (firstAnswer === 'yes' || firstAnswer === 'y') {
  alert('Good. You better have gotten this answer correct.')
} else {
  alert('That answer is incorrect. Wow. How on earth did you get that wrong?')
}

var secondQuestion = prompt('Have I ever lived in the Netherlands?');
var secondAnswer = secondQuestion.toLowerCase();
console.log('The user\'s answer is ' + secondAnswer + '.' + ' The correct answer is no.');
if (secondAnswer === 'no' || secondAnswer === 'n') {
  alert('You got this one right! Great job!');
} else {
  alert('Wrong! But I did live in Germany when I was younger.');
}

var thirdQuestion = prompt('Do I have 30 baseball caps?');
var thirdAnswer = thirdQuestion.toLowerCase();
console.log('The user\'s answer is ' + thirdAnswer + '.' + ' The correct answer is no.');
if (thirdAnswer === 'no' || thirdAnswer === 'n') {
  alert('Right! I only have 22 baseball caps.');
} else {
  alert('Your answer is wrong. Unfortunately, I only have 22 baseball caps.');
}

var fourthQuestion = prompt('Before Code Fellows, I worked at Forever 21\'s Corporate Headquarters. Yes or No?');
var fourthAnswer = fourthQuestion.toLowerCase();
console.log('The user\'s answer is ' + fourthAnswer + '.' + ' The correct answer is yes.');
if (fourthAnswer === 'yes' || fourthAnswer === 'y') {
  alert('Correct! I worked in the HR department, specifically in internal communications.');
} else {
  alert('That answer is incorrect!');
}

var fifthQuestion = prompt('Do I like dogs more than cats?');
var fifthAnswer = fifthQuestion.toLowerCase();
console.log('The user\'s answer is ' + fifthAnswer + '.' + ' The correct answer is yes.');
if (fifthAnswer === 'yes' || fifthAnswer === 'y') {
  alert('Right on! Dogs are the best!');
} else {
  alert('Wrong. I\'m not much of a cat fan.');
}

var endStatement = confirm('You have completed Erick\'s Guessing Game! Thanks for playing!');
