// function myShow(sample) {
//   document.getElementById('demo').innerHTML = sample;
// }

// let aPromise = new Promise(function(myResolve, myReject) {
//   let y = 0;
//   if (y == 0) {
//     myResolve('Ok');
//   } else {
//     myReject('Problem');
//   }
// });


// aPromise
//   .then(function(result) {
//     myShow(result);
//   },
//   function(error) {
//     myShow(error);
//   }
//   )

// let aPromise = new Promise(function(myResolve, myReject) {
//   setTimeout(function() {
//     myResolve('Hello Good Morning')
//   }, 3000)
// })

// aPromise.then(function(value) {
//   document.getElementById('demo').innerHTML = value;
// })

function myShow(sample) {
  document.getElementById('demo').innerHTML = sample;
}

// let aPromise = new Promise(function(myResolve, myReject) {

//     let req = new XMLHttpRequest();
//     req.open("GET", "closures.js");
//     req.onload = function () {
//       if (req.status == 200) {
//         myResolve(this.responseText);
//       } else {
//         myReject("Error: " + req.status);
//       }
//     };
//     req.send();
// })

// aPromise
//   .then(function(result) {
//     myShow(result);
//   },
//   function(error) {
//     myShow(error);
//   }
// )

// producing code - that can take some time
// consuming code - wait for the result

// success - myResolve()
// failure - myReject()


// Promise Objects 
// state
// result 



// async - makes a function return a promise 
// await - makes a function wait for a promise 

async function display() {
  return 'GoodMorning'
}

display().then(
  function(value) {
    myShow(value);
  },
  function(error) {
    myShow(error);
  }
)
