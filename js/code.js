function greating (){
  let userName = prompt('whats your name?');
 alert('Welcome to this website '+ userName);}
greating();
let question1 = '';
let question2 = '';
let question3 = '';
let question4 = '';
let question5 = '';
let number;
let question6Condition = false;
let question7Condition = false;
let letterGuess = '';
let cond = true;
let a = 0;
let favouriteLetter = ['f','w','p'];
for(;cond;)
{
  question1 = prompt('Do you think i am a cat person? y/n yes/no').toLowerCase();
  if(question1 === 'yes' || question1 === 'no' || question1 === 'y' || question1 === 'n')
  {break;}
}
if(question1 === 'yes' || question1 === 'y'){
  console.log('i am a cat person indeed');
  alert('i am a cat person indeed');
  a++;
}
else {
  console.log('you guessed wrong');
  alert('you guessed worng');
}
while(cond)
{
  question2 = prompt('Do you think i am rich? y/n yes/no').toLowerCase();
  if(question2 === 'yes' || question2 === 'no' || question2 === 'y' || question2 === 'n')
  {break;}
}
if(question2 === 'yes' || question2 === 'y'){
  console.log('i am doing very good actually');
  alert('i am doing very good actually');
  a+= 1;}
else {
  console.log('you guessed wrong');
  alert('you guessed worng');
}
while(cond)
{
  question3 = prompt('Do you think i eat healthy y/n yes/no').toLowerCase();
  if(question3 === 'yes' || question3 === 'no' || question3 === 'y' || question3 === 'n')
  {break;}
}
if(question3 === 'yes' || question3 === 'y'){
  console.log('thats correct, i eat healthy');
  alert('thats correct, i eat healthy');
  a+= 1;
}
else {
  console.log('you guessed wrong');
  alert('you guessed worng');
}
while(cond)
{
  question4 = prompt('Do you think i work for google? y/n yes/no').toLowerCase();
  if(question4 === 'yes' || question4 === 'no' || question4 === 'y' || question4 === 'n')
  {break;}
}
if(question4 === 'yes' || question4 === 'y'){
  console.log('thats correct, i work for google');
  alert('thats correct, i work for google');
  a+= 1;
}
else {
  console.log('you guessed wrong');
  alert('you guessed worng');
}
while(cond)
{
  question5 = prompt('Do you think i sleep well? y/n yes/no').toLowerCase();
  if(question5 === 'yes' || question5 === 'no' || question5 === 'y' || question5 === 'n')
  {break;}
}
if(question5 === 'yes' || question5 === 'y'){
  console.log('thats not correct, i barely sleep');
  alert('thats not correct, i barely sleep');
}
else {
  console.log('thats correct, i dont have sufficient time to sleep');
  alert('thats correct, i dont have sufficient time to sleep');
  a+=1;
}
for(let i = 0;i<4;i++)
{
  number = prompt('please Enter a number between 0 and a 100');
  for(;;)
  {
    if(isNaN(number)) //3
    {
      alert('this is not a numeric vale, please enter a number');
      number = prompt('please Enter a number between 0 and a 100');
    }
    else{
      break;
    }
  }
  if(number>36)
  {alert('too high');}
  else if (number < 36)
  {alert('too low');}
  else
  {
    a++;
    question6Condition = true;
    alert('you Guessed the number correctly, congrats!!!');
    break;
  }
}
if(question6Condition === false)
{
  alert('Sorry, the number was 36');
}
for(let j = 0; j < 6; j++)
{
  letterGuess = prompt('i have three favourite letters, can you gess any of them? ').toLowerCase();
  for(let k = 0; k<=2;k++)
  {
    if(letterGuess === favouriteLetter[k])
    {
      a++;
      question7Condition = true;
      alert('congrats, you Guessed correctly, the correct answers were '+ favouriteLetter[0] + ' ,' + favouriteLetter[1]+ ' and '+ favouriteLetter[2]);
      break;
    }
  }
  if(question7Condition === true)
  {break;}
  alert('Sorry, try again');
}
if(question7Condition === false)
{
  alert('you guessed wrong, the correct answers were '+ favouriteLetter[0] + ' ,' + favouriteLetter[1]+ ' and '+ favouriteLetter[2]);
}
alert('your overall score is '+ a +'/7');
alert('i want to welcome you again ' + userName);
