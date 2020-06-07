const fs = require('fs');


const genders = [
  'male',
  'female'
]

const maleName = [
  'Donald',
  'Xi',
  'Vladimir',
  'Boris',
  'Emmanuel',
  'Justin'
]

const femaleName = [
  'Angela',
  'Jacinda',
  'Ursula',
  'Hillary',
  'Theresa',
  'Nicola',
]

const lastName = [
  'Trump',
  'Jinping',
  'Putin',
  'Johnson',
  'Macron',
  'Trudeau',
  'Merkel',
  'Ardern',
  'von Leyden',
  'Clinton',
  'May',
  'Strudgeon',
]


function randChoice(arg) {
  let rand = Math.random();
  //console.log(rand);
  //console.log(arg);
  //console.log(arg.length);
  //console.log(typeof(arg));
  let len = arg.length;
  //console.log(len);
  let position = Math.floor(rand*len);
  //console.log(position);
  let choice = arg[position];
  return choice
}

//console.log(randChoice(genders));

let counter ;
let data = [];
let age ;

for (counter = 0; counter < 20; counter += 1) {
  let gender = randChoice(genders);
  //console.log(gender);
  //console.log('counter: ', counter);
  let name = '';
  if (gender == 'female') {
    name = randChoice(femaleName)
  }
  else {
    name = randChoice(maleName)
  };
  let surname = randChoice(lastName);
  age = Math.floor(Math.random()*60+18);
  let person = name + ' ' + surname + '; gender: ' + gender + '; age: ' + age;
  data.push(person)
  //console.log(data);
}
let payload = JSON.stringify(data)
//console.log(payload);

fs.writeFile('outputfile.txt', payload, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
