// function name() {
//   name1()
//   function name1() {
//     var b = 20;
//     console.log(b);
//   }
// }
// var b = 12;
// name()

// let x = 250;
// {
//   var x = 10; // illegal shadowing
//   console.log(x);
  
// }
// console.log(x);

// const y = 250; 
// function name() {
//   var y = 20;
//   console.log(y);
// }
// name();
// console.log(y);

// let b = 3;

// function fun(a) {
//   return a + b;
// }
// var x = fun(2);
// console.log(x);

// closures
// const a = 10; 

// {
//   const a = 20;
//   {
//     const a = 30;
//     console.log(a);
//   }
//   console.log(a);
// }
// console.log(a);


// function name() {
//   var x = 7;
//   function name1() {
//     console.log(x);
//   }
//   x = 10;
//   return name1;
// }
// var y = name();
// console.log(y);
// y();  // name1()


// Q . 1

// for (var i = 0; i < 5; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 1000);
// }

// Q . 2
function x() {
  var a = 80;
  function y() {
    var b = 50;
    function z() {
      console.log(a, b);
    }
    z();
  }
  y();
}
x();


// call stack
// global execution context
// local scope
// global scope
// lexical scope
// block scope
// shadowing
// script - let, const
// illegal shadowing