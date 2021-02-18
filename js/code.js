'use script';
let userName = prompt('whats your name?');
function greating() {
  alert('Welcome to this website ' + userName);
}
greating();
let question1 = '';
let number;
let question6Condition = false;
let question7Condition = false;
let letterGuess = '';
let cond = true;
let a = 0;
let favouriteLetter = ['f', 'w', 'p'];
let x = ['Do you think i am a cat person? y/n yes/no', 'Do you think i am rich? y/n yes/no', 'Do you think i eat healthy y/n yes/no', 'Do you think i work for google? y/n yes/no', 'Do you think i sleep well? y/n yes/no'];
let y = ['yes', 'no', 'y', 'n'];
let z = ['i am a cat person indeed', 'i am doing very good actually', 'thats correct, i eat healthy', 'thats correct, i work for google', 'thats correct, i do have sufficient time to sleep, it\'s ', 'you guessed worng'];
function questions(num) {

  for (; cond;) {
    question1 = prompt(x[num]).toLowerCase();
    if (question1 === y[0] || question1 === y[1] || question1 === y[2] || question1 === y[3]) {
      break;
    }
  }
  if (question1 === y[0] || question1 === y[2]) {
    console.log(z[num]);
    alert(z[num]);
    a++;
  }
  else {
    console.log(z[5]);
    alert(z[5]);
  }
}
for (let p = 0; p <= 4; p++) {
  questions(p);
}
function question6() {
  for (let i = 0; i < 4; i++) {
    number = prompt('please Enter a number between 0 and a 100');
    for (; ;) {
      if (isNaN(number)) //3
      {
        alert('this is not a numeric vale, please enter a number');
        number = prompt('please Enter a number between 0 and a 100');
      }
      else {
        break;
      }
    }
    if (number > 36) { alert('too high'); }
    else if (number < 36) { alert('too low'); }
    else {
      a++;
      question6Condition = true;
      alert('you Guessed the number correctly, congrats!!!');
      break;
    }
  }
  if (question6Condition === false) {
    alert('Sorry, the number was 36');
  }
}
question6();
function question7() {
  for (let j = 0; j < 6; j++) {
    letterGuess = prompt('i have three favourite letters, can you gess any of them? ').toLowerCase();
    for (let k = 0; k <= 2; k++) {
      if (letterGuess === favouriteLetter[k]) {
        a++;
        question7Condition = true;
        alert('congrats, you Guessed correctly, the correct answers were ' + favouriteLetter[0] + ' ,' + favouriteLetter[1] + ' and ' + favouriteLetter[2]);
        break;
      }
    }
    if (question7Condition === true) { break; }
    alert('Sorry, try again');
  }
  if (question7Condition === false) {
    alert('you guessed wrong, the correct answers were ' + favouriteLetter[0] + ' ,' + favouriteLetter[1] + ' and ' + favouriteLetter[2]);
  }
}
question7();
alert('your overall score is ' + a + '/7');
alert('i want to welcome you again ' + userName);
