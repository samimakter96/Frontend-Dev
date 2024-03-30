let userName = prompt('Please Enter Your Name:') || ('Samim');
let userAge = parseInt(prompt('Please Enter Your Age:')) || (200); 


console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);


if (userAge >= 0 && userAge <= 4) {
  console.log(`${userName} is a Kid`);
  console.log('And he is playing');
}
if (userAge >= 5 && userAge <= 17) {
  console.log(`${userName} is a school student`);
  console.log('And he is learning science');
}

if (userAge >= 18 && userAge <= 24) {
  console.log(`${userName} is a college student`);
  console.log('And he is learning computer science');
}

if (userAge >= 25 && userAge <= 45) {
  console.log(`${userName} is a Working professional`);
  console.log('He is a web developer');
}

if (userAge > 45) {
  console.log(`${userName} is retired`);
}

console.log('program finish');