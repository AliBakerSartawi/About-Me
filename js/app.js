'use strict';

let corAnswer=0;

let gender = prompt('If my name is Ali, am I a male?');
if((gender.toLowerCase() === 'yes') || (gender.toLowerCase() === 'y')){
  // console.log('correct answer, I am male!');
  alert('Correct answer, I am male!');
  corAnswer++;
} else {
  // console.log('Too bad... wrong answer!');
  alert('Too bad... wrong answer!');
}

// let coding = prompt('Do I love coding?').toLowerCase();
// this way the variable is automatically lowerized

let coding = prompt('Do I love coding?');
if((coding.toLowerCase() === 'yes') || (coding.toLowerCase() === 'y')){
  // console.log('correct answer!');
  alert('Correct!');
  corAnswer++;
} else {
  // console.log('wrong answer... sadge!!');
  alert('wrong answer... sadge!!');
}

let age = prompt('Am I 30 years old?');
if((age.toLowerCase() === 'no') || (age.toLowerCase() === 'n')){
  // console.log('Good guess, I am 27!');
  alert('Good guess, I am 27!');
  corAnswer++;
} else {
  // console.log('wrong answer :( !');
  alert('wrong answer :( !');
}

let water = prompt('Is water my favorite juice?');
if((water.toLowerCase() === 'no') || (water.toLowerCase() === 'n')){
  // console.log('Good guess, water is not a juice!');
  alert('Good guess, water is not a juice!');
  corAnswer++;
} else {
  // console.log('wrong answer :( !');
  alert('wrong answer :( !');
}

let peanutButter = prompt('Do I like peanut butter?');
if((peanutButter.toLowerCase() === 'yes') || (peanutButter.toLowerCase() === 'y')){
  // console.log('Of course!!!! PB is the best!!');
  alert('Of course!!!! PB is the best!!');
  corAnswer++;
} else {
  // console.log('wrong answer :( !');
  alert('wrong answer :( !');
}

let userName = prompt('What is your name, dear visitor?');
alert('Thank you for visiting my humble website, ' + userName + ', but we are not done yet :)');




let attempts=4;
while(attempts){
  let guess=prompt('Guess a number from 1 to 10! You have ' + attempts + ' attempts!');
  if (guess==='5'){
    alert('Correct answer... it is 5!');
    corAnswer++;
    break;
  } else if(guess < '5'){
    attempts-=1;
    alert('Too low... you have ' + attempts + ' attempts left!');
    if(!attempts){
      alert('No more attempts.. correct answer is 5!');
      break;
    }
  } else if(guess > '5'){
    attempts-=1;
    alert('Too high... you have ' + attempts + ' attempts left!');
    if(!attempts){
      alert('Correct answer is 5!');
      break;
    }
  }
}

let ali=['a', 'l', 'i'];
let newAttempts=6;
while(newAttempts){
  let newGuess = prompt('Guess a letter from my name! you have ' + newAttempts + ' attempts!').toLowerCase();
  if ((newGuess=== 'a') || (newGuess=== 'l') || (newGuess=== 'i')){
    alert('Correct answer! \'' + newGuess + '\' is part of \'ali\'');
    corAnswer++;
    break;
  } else{
    newAttempts-=1;
    alert('Wrong letter... you have ' + newAttempts + ' attempts left!');
    if(!newAttempts){
      alert('No more attempts.. correct answer is ' + ali + '!');
      break;
    }
  }
}

alert('Well... your score is '+ corAnswer + ' out of 7!!!!');
