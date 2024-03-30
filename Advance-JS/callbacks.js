// callback is a function passed as an argument to another function
// function to call another function

// function first() {
//   show('first');
// }

// function sum(num1, num2, myCallback) {
//   let add = num1 + num2;
//   myCallback(add);
// }

// function show(number) {
//   document.getElementById('demo').innerHTML = number;
// }

// sum(2, 5, show);

// setTimeout(abc, 3000);

// function abc() {
//   console.log('Samim Akter');
// }

// setInterval(xyz, 1000);

// function xyz() {
//   let d = new Date();
//   console.log(d.getHours());
//   console.log(d.getSeconds());
//   console.log(d.getMinutes());
// }


// var a = 10;
// function cube(n) {
//   var res = n * n * n;
//   return res;
// }

// var cube1 = cube(a);
// console.log(cube1);
// var cube2 = cube(5);
// console.log(cube2);

// function abc() {
//   for (var i = 0; i < 5; i++) {
//     function close(i) {
//       setTimeout(function() {
//         console.log(i);
//       }, 1000)
//     }
//     close(i);
//   }
//   console.log('Hello');
// }

// abc();


// function statement
// x(); // Hoisting
// b(); 
// function x() {
//   console.log('hello');
// }


// function expression
// var b = function() {
//   console.log('samim');
// }

// Named function expression
// var z = function abc() {
//   console.log('xyz');
// }
// z()

// first class function - callback function - first class citizen
// ability to use function as values

// var a = function(p) {
//   console.log(p);
// }
// function fun() {

// }
// a(fun)


// var m = function(r) {
//   return function() {

//   }
// }
// console.log(m());


// setTimeout(function() {
//   console.log('counting');
// }, 3000);

// function a(b) {
//   console.log('x');
//   b();
// }
// a(function b() {
//   console.log('y');
// })

// get html fine using callback
// function myShow(sample) {
//   document.getElementById("demo").innerHTML = sample;
// }

// function saveFile(myCallback) {
//   let req = new XMLHttpRequest();
//   req.open("GET", "closures.js");
//   req.onload = function () {
//     if (req.status == 200) {
//       myCallback(this.responseText);
//     } else {
//       myCallback("Error: " + req.status);
//     }
//   };
//   req.send();
// }
// saveFile(myShow);

function attachEventListeners() {
  let count = 0;
  document.getElementById("click").addEventListener("click", function xyz() {
    console.log(
      "How many times the button was clicked " + ++count + " " + "times"
    );
  });
}
attachEventListeners();