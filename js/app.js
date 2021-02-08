'use strict';

let gender = prompt('If my name is Ali, am I a male?');
if((gender.toLowerCase() === 'yes') || (gender.toLowerCase() === 'y')){
  console.log('correct answer, I am male!');
  alert('Correct answer, I am male!');
} else {
  console.log('Too bad... wrong answer!');
  alert('Too bad... wrong answer!');
}

let coding = prompt('Do I love coding?');
if((coding.toLowerCase() === 'yes') || (coding.toLowerCase() === 'y')){
  console.log('correct answer!');
  alert('Correct!');
} else {
  console.log('wrong answer... sadge!!');
  alert('wrong answer... sadge!!');
}

let age = prompt('Am I 30 years old?');
if((age.toLowerCase() === 'no') || (age.toLowerCase() === 'n')){
console.log('Good guess, I am 27!');
  alert('Good guess, I am 27!');
} else {
  console.log('wrong answer :( !');
  alert('wrong answer :( !');
}

let water = prompt('Is water my favorite juice?');
if((water.toLowerCase() === 'no') || (water.toLowerCase() === 'n')){
console.log('Good guess, water is not a juice!');
  alert('Good guess, water is not a juice!');
} else {
  console.log('wrong answer :( !');
  alert('wrong answer :( !');
}

let peanutButter = prompt('Do I like peanut butter?');
if((peanutButter.toLowerCase() === 'yes') || (peanutButter.toLowerCase() === 'y')){
console.log('Of course!!!! PB is the best!!');
  alert('Of course!!!! PB is the best!!');
} else {
  console.log('wrong answer :( !');
  alert('wrong answer :( !');
}

let userName = prompt('What is your name, dear visitor?');
alert('Thank you for visiting my humble website, ' + userName + ' :)');