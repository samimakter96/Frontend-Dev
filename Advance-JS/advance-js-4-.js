// function Gentleman(first, last, gender, age){
//   this.firstName = first;
//   this.lastName = last;
//   this.gender = gender;
//   this.age = age;
// }

// Gentleman.prototype.marks = 86;

// Gentleman.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }

// const Brother1 = new Gentleman('Samim', 'Akter', 'Male', 20)
// const Brother2 = new Gentleman('Aman', 'Gupta', 'Male', 27)

// document.getElementById('demo').innerHTML = 'My Brother name is ' + Brother1.firstName + " " + 'and my name is ' + Brother2.firstName + " " + Brother1.marks

// document.getElementById('demo').innerHTML = Brother1.fullName();

// What are prototypes?
// Date.prototype
// Array.prototype

// Higher order Function - functional programming

// function a() {  // a callback function
//   console.log('print');
// }
// function b(a){  // b is Higher order function
//   return a();
// }

// a function which takes another function as an argument or return a function from it

// const num = [5, 7, 9, 8];

// const cube = function (num) {
//   const result = [];
//   for (let i = 0; i < num.length; i++) {
//     result.push(num[i] * num[i] * num[i]);
//   }
//   return result;
// };

// console.log(cube(num));

// const square = function (num) {
//   const result = [];
//   for (let i = 0; i < num.length; i++) {
//     result.push(num[i] * num[i]);
//   }
//   return result;
// };

// console.log(square(num));



const num = [5, 7, 9, 8];

const cube = function(num) {   // cube, square and quad is a callback function
  return num * num * num;
}

const square = function(num) {
  return num * num;
}

const quad = function(num) {
  return num * num * num * num;
}

const calculate = function(num, logic) {  // calculate is a higher order function
  const result = [];
  for (let i = 0; i < num.length; i++) {
    result.push(logic(num[i]))
  }
  return result
}

console.log(calculate(num, cube));
console.log(calculate(num, square));
console.log(calculate(num, quad));

// Advantages of functional programming

// 1. Modularity through out the code
// 2. Reusability
// 3. Passing function into different function