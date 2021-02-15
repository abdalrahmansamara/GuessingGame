'use strict';
let userName = prompt('whats your name?');
alert('Welcome to this website '+ userName);
let question1 = '';
while(question1 !== 'fjnjdjf')
{
  question1 = prompt('Do you think i am a cat person? y/n yes/no');
  if(question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'no' || question1.toLowerCase() === 'y' || question1.toLowerCase() === 'n')
  {break;}
}
question1 = question1.toLowerCase();
if(question1 === 'yes' || question1 === 'y'){
  console.log('i am a cat person indeed');
  alert('i am a cat person indeed');
}
else {
  console.log('you guessed wrong');
  alert('you guessed worng');
}
question1 = '';
while(question1 !== 'fjnjdjf')
{
  question1 = prompt('Do you think i am rich? y/n yes/no');
  if(question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'no' || question1.toLowerCase() === 'y' || question1.toLowerCase() === 'n')
  {break;}
}
question1 = question1.toLowerCase();
if(question1 === 'yes' || question1 === 'y'){
  console.log('i am doing very good actually');
  alert('i am doing very good actually');}
else {
  console.log('you guessed wrong');
  alert('you guessed worng');
}
question1 = '';
while(question1 !== 'fjnjdjf')
{
  question1 = prompt('Do you think i eat healthy y/n yes/no');
  if(question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'no' || question1.toLowerCase() === 'y' || question1.toLowerCase() === 'n')
  {break;}
}
question1 = question1.toLowerCase();
if(question1 === 'yes' || question1 === 'y'){
  console.log('thats correct, i eat healthy');
  alert('thats correct, i eat healthy');
}
else {
  console.log('you guessed wrong');
  alert('you guessed worng');
}
question1 = '';
while(question1 !== 'fjnjdjf')
{
  question1 = prompt('Do you think i work for google? y/n yes/no');
  if(question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'no' || question1.toLowerCase() === 'y' || question1.toLowerCase() === 'n')
  {break;}
}
question1 = question1.toLowerCase();
if(question1 === 'yes' || question1 === 'y'){
  console.log('thats correct, i work for google');
  alert('thats correct, i work for google');
}
else {
  console.log('you guessed wrong');
  alert('you guessed worng');
}
question1 = '';
while(question1 !== 'fjnjdjf')
{
  question1 = prompt('Do you think i sleep well? y/n yes/no');
  if(question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'no' || question1.toLowerCase() === 'y' || question1.toLowerCase() === 'n')
  {break;}
}
question1 = question1.toLowerCase();
if(question1 === 'yes' || question1 === 'y'){
  console.log('thats not correct, i barely sleep');
  alert('thats not correct, i barely sleep');
}
else {
  console.log('thats correct, i dont have sufficient time to sleep');
  alert('thats correct, i dont have sufficient time to sleep');
}
alert('i want to welcome you aganin' + userName);
