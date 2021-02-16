'use strict';
let userName = prompt('whats your name?');
alert('Welcome to this website '+ userName);
let question1 = '';
let question2 = '';
let question3 = '';
let question4 = '';
let question5 = '';
let cond = true;
for(;cond;)
{
  question1 = prompt('Do you think i am a cat person? y/n yes/no').toLowerCase();
  if(question1 === 'yes' || question1 === 'no' || question1 === 'y' || question1 === 'n')
  {break;}
}
if(question1 === 'yes' || question1 === 'y'){
  console.log('i am a cat person indeed');
  alert('i am a cat person indeed');
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
  alert('i am doing very good actually');}
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
}
alert('i want to welcome you aganin' + userName);
