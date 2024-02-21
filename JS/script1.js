// document.getElementById('demo').innerHTML = "Samim Akter";

// function addition(a1, a2) {   // parameters
//   document.write(a1 + a2);
//   return a1 + a2
// }

// document.getElementById('sample').innerHTML = addition(25, 26);   // arguments

// let x = multiply(30, 20);
// // document.getElementById('sample').innerHTML = x;
// console.log(x);

// function multiply(b1, b2) {
//   return b1 * b2
// }


// function area(r) {
//   return 4 / 3 * 3.14 * r * r * r;
// }

// document.getElementById('sample').innerHTML = 'The area of the cone is' + area(5);


// samim();
// let y = 10;  // Global variable it's works global
// function samim() {
//   let x = 5;  // local variable it's works inside the function
//   document.getElementById('sample').innerHTML = typeof x + " " + x;
// }

// document.getElementById('sample1').innerHTML = typeof y + " " + y;


/*
1. Named function
2. Anonymous function
3. IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
*/

// Named function
// function oddEven(number) {
//   if (number % 2 == 0) {
//     return 'Number is even'
//   } else {
//     return 'Number is Odd'
//   }
// }

// document.getElementById('sample').innerHTML = oddEven(5);


// Anonymous function
// let oddEven = function(number) {
//   if (number % 2 == 0) {
//     return 'Number is even'
//   } else {
//     return 'Number is Odd'
//   }
// }
// document.getElementById('sample').innerHTML = oddEven(5);

// const greetings = function () {
//   console.log('Hello World')
// }

// greetings();


// IIFE
(function () {
  console.log('Hello World');
})();

(function (text) {
  console.log(text);
})('Hello JavaScript');

// same thing just using arrow function

(() => {
  console.log('Hello World');
})();


