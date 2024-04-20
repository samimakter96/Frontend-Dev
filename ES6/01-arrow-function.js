// // function Declaration - hoisting happen

function square(num) {
  return num * num
}



// // function Expression - hoisting not happen

const addition = function(a, b) {
  return a + b
}


// Arrow function Expression

const multiplication = (num) => {
  return num * num
}


// const square = num => num * num
// console.log(square(5))


const add = (a, b) => a + b
console.log(add(5, 5))


// we can use arrow function as a callback function

setTimeout(() => {
  console.log('I print after 2 second');
}, 2000)


const random = () => Math.floor(Math.random() * 10) + 1;
