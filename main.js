
let firstName = 'Usun';
let lastname = 'Ineg';
let country = 'Finland';
let city = 'Espoo';
let language = 'JavaScript';
let job = 'Web Developer';

let fullName = firstName + ' ' + lastname;

let personInfo = `I am ${fullName}. I live am from ${country} and I live in ${city}. I am a ${job} and I love ${language}.`;

console.log(personInfo);


console.log('Exercise 4')
let company = 'Coding Academy';
console.log(company);
console.log(company.length)
console.log(company.toUpperCase())
console.log(company.toLowerCase())
console.log(company.substr(0, 6)) //Uses index number and number of places 
console.log(company.substring(7, 14)) //Uses index numbers of first and last place
console.log(company.slice(7, 14)) // Same as substring
let because = 'You cannot end a sentence with because because because is a conjunction';
console.log (because.slice(31, 54))
console.log(because.includes('Academy'));
console.log(because.split(' '));
console.log(company.split(' '))
let techComp = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ;
console.log(techComp.split(','));
console.log(company.replace('Coding', 'Microsoft'));
console.log(company.charAt(10))
console.log(company.charCodeAt(0));
console.log(company.indexOf('c'));
console.log(company.lastIndexOf('c'));
console.log(because.indexOf('because'))
console.log(because.search('because'));
console.log(company.trim());
console.log(company.startsWith('Cod'));
console.log(company.endsWith('emy'))
console.log(company.match(/c/ig));
console.log(because.match(/because/g))
let cod = 'Coding ';
let acad = 'Academy';
let codAcad = cod.concat(acad);
console.log(codAcad);
console.log(codAcad.repeat(5));
let sal = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let salNum = sal.match(/[+-]?\d+(\.\d+)?/g).map (Number);//Very Important!!!
console.log(salNum);
let annualSal = salNum[0]*12 + salNum[1] + salNum[2]*12;
console.log(`His annual salary is: ${annualSal}`);

console.log('End of exercise 4================================');
console.log('Exercise 5');
console.log(2 > 1 || 4 > 2);
console.log(2 > 1 || 4 < 2);
console.log(4 == '4');
console.log(2 > 1 && 1 > 2);
console.log(5 === '5');
console.log(4 != '4');
console.log(typeof "Usun");              // Returns "string"
console.log(typeof 12345);                   // Returns "number"
console.log(typeof true);                 // Returns "boolean"
console.log(typeof false);                // Returns "boolean"
console.log(typeof g);                    // Returns "undefined" (if x has no value)
console.log('End of exercise 6')
let y = 3;
let x = 4;
console.log(y%2)
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(4 > 3 || 10 > 12)
console.log('Conditionals====================================')

console.log('if conditionals')
let isLesson = false;

if (isLesson) {
  console.log('You have to come to class.');
} else {
  console.log('You can stay at home.');
}

console.log('else if statements')

let lessons = 'no';
if (lessons === 'no') {
  console.log('You can go partying!!');
} else if (lessons === 'maybe') {
  console.log('You may come to class and study.');
} else if (lessons === 'yes') {
  console.log('You have to come to class.');
} else {
  console.log('Do whatever you like.');
}

console.log('Exercise 8====================')
console.log('1. switch prompt')
/*
let minAge = 18;
let ageUserInput = prompt('Enter your age: ');
let userAge = ageUserInput;
let underAge = minAge - userAge;

switch (true) {
  case userAge >= 18 && userAge <= 90 :
    console.log(`You are ${userAge} years old, congratulations! you are old enough to drive.`);
    break;
  case userAge < minAge :
    console.log(`You are ${userAge} years old, sorry you are left with ${underAge} years to drive.`);
    break;
  case userAge > 90 :
    console.log(`You are ${userAge} years old, sorry you are too old to drive!`);
    break;

  default:
    console.log('Entered value not a number')
   
} */

console.log('2. if...else prompt')
/*
let myAge = 25;
let userAgeInput = prompt('Enter your age:');
let yourAge = userAgeInput;

if(myAge <= yourAge){
  console.log(`You are ${yourAge}, you are ${yourAge - myAge} year(s) older than me!`);
} else {
  console.log(`You are ${yourAge}, you are ${myAge - yourAge} year(s) younger than me!`)
}
*/

console.log('3. if-else-if-else prompt')

/*
let userNumInput = prompt('Give a number: ');
let a = userNumInput;
let userNumInput1 = prompt('Give a second number: ');
let b = userNumInput1;

if(a > b){
    console.log(`let a = ${a}; let b = ${b}; ${a} is greater than ${b}!`);
} else if( b > a) {
    console.log(`let a = ${a}; let b = ${b}; ${a} is less than ${b}!`);

} else if(a === b) {
    console.log(`let a = ${a}; let b = ${b}; both numbers are equal!`);
} else {
    console.log(`One or more of your inputs are not numbers!`);
}

*/
console.log('4. switch user grades prompt')
/*
let userGradeInput = prompt('Enter your grade:');
let userGrade = userGradeInput;

switch (true) {
  case userGrade >= 80 && userGrade <= 100:
  console.log(`You scored ${userGrade}(A); congratulations you passed, that is excellent!`);
  break;

  case userGrade >= 70 && userGrade <= 79:
  console.log(`You scored ${userGrade}(B); congratulations you passed, that is very good!`);
  break;

  case userGrade >= 60 && userGrade <= 69:
  console.log(`You scored ${userGrade}(C); congratulations you passed, that is satisfactory!`);
  break;

  case userGrade >= 50 && userGrade <= 59:
  console.log(`You scored ${userGrade}(D); congratulations you passed, that is good.`);
  break;

  case userGrade >= 0 && userGrade <= 49:
  console.log(`You scored ${userGrade}(F); sorry you failed, that is poor.`);
  break;

  default:
      console.log(`You did not take the examination.`);
}
*/

console.log('5. switch (season) prompt');
/*
let userSeasonInput = prompt('Which month are we in?:');
let seasonInput = userSeasonInput;

switch (true) {
  case (seasonInput === 'May' || seasonInput === 'June' || seasonInput === 'July'):
  console.log(`We are in ${seasonInput}, which is Summer!`);
  break;

  case (seasonInput === 'August' || seasonInput === 'September' || seasonInput === 'October'):
  console.log(`We are in ${seasonInput}, which is Autumn!`);
  break;

  case (seasonInput === 'November' || seasonInput === 'December' || seasonInput === 'January'):
  console.log(`We are in ${seasonInput}, which is Winter!`);
  break;

  case (seasonInput === 'February' || seasonInput === 'March' || seasonInput === 'April'):
  console.log(`We are in ${seasonInput}, which is Spring!`);
  break;

  default:
    console.log('Please check that your input is correct!');
}
*/
console.log('End of exercise 8================');



console.log('Loops ===============');
console.log('For loops')

for(let i = 0; i <= 5; i++){
  console.log(i)
}

console.log('While loop');
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

console.log('Do while loop');

let n = 0;
do {
  console.log(n);
  n++;
} while (n <= 5);

console.log('Loop exercises=================');

console.log('Exercise 1');

console.log('Using for loop.');

for(let i = 0; i <= 10; i++) {
  console.log(i);
}


console.log('Using while loop.');

let u = 0;
while (u <= 10){
  console.log(u);
  u++;
}

console.log('Using do while loop.');

let v = 0;
let disArry = [];
do{
  disArry.push(v);
    v++;
    console.log(disArry);
  } while(v <= 10);
  

console.log('Exercise 2');

console.log('Using for loop.');

for(let i = 10; i >= 0; i--) {
  console.log(i);
}


console.log('Using while loop.');

let w = 10;
while (w >= 0){
  console.log(w);
  w--;
}

console.log('Using do while loop.');

let j = 10;
let jArry = [];
do{
  jArry.push(j);
  j--;
  } while(j >= 0);
  console.log(jArry);

  console.log('Exercise 3')
  let hash = '';
  for (let i=0; i<6; i++)
  {
  hash+='#';
  console.log(hash);
   
  }
  console.log('Exercise 3')
  let lang = ['HTML', 'CSS', 'JavaScript']

  for(let i = 0; i <= lang.length; i++){
    
    console.log(lang)
  }
  





