// call stack - this will directly execute that code - waits for none

// global execution context - assigns undefined values to all the global variables and declares the function


// console.log('start');

// setTimeout(function show() {
//   console.log('print after 3 second');
// }, 3000);  // 3sec     // concurrency model in JavaScript


// console.log('end');

// registering callback inside a API container - callback

// Microtask Queue - (highest priority) all the callback function which shows promises, mutation observer

// callback queue - callback1 (all the normal callback function)

// stage is called as starvation of the callback queue

// Event Loop - 1/ it monitors whether the call stack is empty or not. 2/ it will check if anything is there in the call back queue. 3/ it will push this callback inside the call stack




// Output 
// start
// end
// print after 3 second



// DOM API
// console.log('begin');

// document.getElementById('click').addEventListener('click', function samp() {
//   console.log('print');
// });
  
// console.log('completed');
  
  
  
// Browser features - Time, local Storage, web url, navigation bluetooth
// window object - Browser APIs - setTimeout(), DOM APIs, fetch(), local Storage, consol


// fetch() API
// console.log("begin");

// setTimeout(function sample() {
//   console.log('print');
// }, 3000)

// fetch('https://api.youtube.com')
//   .then(function samp1() {
//     console.log('successful');
//   })
  

// console.log("completed");


// Microtask Queue - callback2 (samp1)
// callback queue - callback1 (sample)

// output:
// begin 
// completed
// successful
// print


