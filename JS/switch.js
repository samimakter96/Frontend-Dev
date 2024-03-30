const dayNumber = 60;
switch (dayNumber) {
  case 0:
    console.log('It is sunday Today');
    break;
  case 1:
    console.log("It is Monday Today");
    break;
  case 2:
    console.log("It is Tuesday Today");
    break;
  case 3:
    console.log("It is Wednesday Today");
    break;
  case 4:
    console.log("It is Thursday Today");
    break;
  case 5:
    console.log("It is Friday Today");
    break;
  case 6:
    console.log("It is Saturday Today");
    break;
  default:
    console.log('Please Enter a valid number');
}



const userName = 'Samim';
const userAge = 20;


switch(true) {
  case (userAge >= 0 && userAge <= 4):
    console.log(`${userName} is a kid`);
    break;
  case (userAge >= 5 && userAge <= 17):
    console.log(`${userName} is a kid school student`);
    break;
  case (userAge >= 18 && userAge <= 24):
    console.log(`${userName} is a collage student`);
    break;
  case (userAge >= 25 && userAge <= 45):
    console.log(`${userName} is a working professional`);
    break;
  case (userAge >= 45 && userAge <= 80):
    console.log(`${userName} is a retired`);
    break;
  default:
    console.log('Please Enter a Valid Age');
}



const grade = 'C';

switch (grade) {
  case "A":
    console.log("Your score is between 85% to 100%");
    break;
  case "B":
    console.log("Your score is between 75% to 85%");
    break;
  case "C":
    console.log("Your score is between 60% to 75%");
    break;
  case "D":
    console.log("Your score is between 50% to 60%");
    break;
  case "E":
    console.log("Your score is between 30% to 50%");
    break;
  default:
    console.log('Sorry, you failed');
}