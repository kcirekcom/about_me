'use strict';

var score = 0;
var userName = '';

function questionOne(){
  userName = prompt('What is your name?');
  var firstAnswer = prompt('Hello, ' + userName + '! Welcome to Erick\'s Guessing Game! Let\'s get started with an easy question. Is my name Erick?').toLowerCase();
  if (firstAnswer === 'yes' || firstAnswer === 'y') {
    alert('Good. You better have gotten this answer correct.');
    score = score + 1;
    console.log(userName + ' answered this question correctly! Current score is ' + score + '/7.');
  } else {
    alert('That answer is incorrect. Wow. How on earth did you get that wrong?');
    console.log(userName + ' answered this question incorrectly. Current score is ' + score + '/7.');
  }
}

function questionTwo(){
  var secondAnswer = prompt('Have I ever lived in the Netherlands?').toLowerCase();
  if (secondAnswer === 'no' || secondAnswer === 'n') {
    alert('You got this one right! Great job!');
    score = score + 1;
    console.log(userName + ' answered this question correctly! Current score is ' + score + '/7.');
  } else {
    alert('Wrong! But I did live in Germany when I was younger.');
    console.log(userName + ' answered this question incorrectly. Current score is ' + score + '/7.');
  }
}

function questionThree(){
  var thirdAnswer = prompt('Do I have 30 baseball caps?').toLowerCase();
  if (thirdAnswer === 'no' || thirdAnswer === 'n') {
    alert('Right! I only have 22 baseball caps.');
    score = score + 1;
    console.log(userName + ' answered this question correctly! Current score is ' + score + '/7.');
  } else {
    alert('Your answer is wrong. Unfortunately, I only have 22 baseball caps.');
    console.log(userName + ' answered this question incorrectly. Current score is ' + score + '/7.');
  }
}

function questionFour(){
  var fourthAnswer = prompt('Before Code Fellows, I worked at Forever 21\'s Corporate Headquarters. Yes or No?').toLowerCase();
  if (fourthAnswer === 'yes' || fourthAnswer === 'y') {
    alert('Correct! I worked in the HR department, specifically in internal communications.');
    score = score + 1;
    console.log(userName + ' answered this question correctly! Current score is ' + score + '/7.');
  } else {
    alert('That answer is incorrect!');
    console.log(userName + ' answered this question incorrectly. Current score is ' + score + '/7.');
  }
}

function questionFive(){
  var fifthAnswer = prompt('Do I like dogs more than cats?').toLowerCase();
  if (fifthAnswer === 'yes' || fifthAnswer === 'y') {
    alert('Right on! Dogs are the best!');
    score = score + 1;
    console.log(userName + ' answered this question correctly! Current score is ' + score + '/7.');
  } else {
    alert('Wrong. I\'m not much of a cat fan.');
    console.log(userName + ' answered this question incorrectly. Current score is ' + score + '/7.');
  }
}

function questionSix(){
  alert('You will be given 4 chances to guess my favorite number.');
  var favNumber = 5;
  var attempts = 0;
  var wrongGuess = true;
  while (attempts < 4) {
    var sixthAnswer = parseInt(prompt('Enter guess.'));
    attempts++;
    if (sixthAnswer === favNumber) {
      alert('Great guess! You are correct!');
      wrongGuess = false;
      score = score + 1;
      console.log(userName + ' answered this question correctly! Current score is ' + score + '/7.');
      break;
    } else if (sixthAnswer < favNumber) {
      alert('Your guess is too low!');
    } else {
      alert('Your guess is too high!');
    }
  }
  if (wrongGuess) {
    alert('You have no more chances. You answered this question incorrectly. My favorite number is ' + favNumber + '.');
    console.log(userName + ' answered this question incorrectly. Current score is ' + score + '/7.');
  }
}

function questionSeven(){
  alert('What sports do I play? You will be given 6 chances to guess the correct answer.');
  var sportsPlayed = ['golf', 'baseball', 'soccer', 'basketball'];
  var numberAttempts = 0;
  var rightGuess = true;
  while (numberAttempts < 6 && rightGuess) {
    var seventhAnswer = prompt('Enter guess.').toLowerCase();
    numberAttempts++;
    for (var i = 0; i < sportsPlayed.length; i++) {
      if (seventhAnswer === sportsPlayed[i]) {
        alert('Good job! I do play that sport! All of the sports I play are ' + sportsPlayed + '.');
        score = score + 1;
        console.log(userName + ' answered this question correctly! Final score is ' + score + '/7.');
        rightGuess = false;
      }
    }
  }
  if (rightGuess) {
    alert('You have no more chances. You answered this question incorrectly. I play ' + sportsPlayed + '.');
    console.log(userName + ' answered this question incorrectly. Final score is ' + score + '/7.');
  }
}

function finishGame(){
  var finishedGame = prompt('You have now completed Erick\'s Guessing Game. Thanks for playing! Please type OK for your final score.').toUpperCase();
  if (finishedGame === 'OK') {
    alert('You got ' + score + ' out of 7 questions correct, ' + userName + '.');
    console.log(userName + ' typed OK and received a final score.');
  } else {
    alert('You did not type OK into the prompt. Please refresh page and play the game again to receive a final score.');
    console.log(userName + ' did not type OK and received no score.');
  }
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
finishGame();
