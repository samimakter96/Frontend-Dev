const fruitsCollection = ["apple", "banana", "orange", null, 23, undefined, true, false, {name: 'Samim'}];

const rainbowColor = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

// Array method
// rainbowColor.push('Brown');
// console.log(rainbowColor);
// rainbowColor.pop();
// console.log(rainbowColor);


const evenNumber = [0, 2, 4, 6, 8, 10, 12];
// remove element from front
evenNumber.shift();
console.log(evenNumber);

// add element from front
evenNumber.unshift(0);
console.log(evenNumber);

// add tow array

const animal = ['Dog', 'Tiger', 'Lion']

const newArr = evenNumber.concat(animal);
console.log(newArr);


// indexOf()
console.log(newArr.indexOf('Dog'));

// includes()
console.log(animal.includes('Lion'));

// reverse()
console.log(animal.reverse());

// sort()
console.log(animal.sort());

// slice()
console.log(evenNumber.slice(0, 4));

console.log(newArr.slice(5));

// splice()
console.log(newArr.splice(8, 1));
console.log(newArr); // change original array also


// Multidimensional Array

const arr = [['kartik', 75], ['samim', 80], ['anupam', 40]];
console.log(arr[0][0]);
console.log(arr[1][0]);


const tickTacToe = [
  ["X", null, null],
  [null, null, 'O'],
  ['O', null, "X"],
];

console.log(tickTacToe[0][2]);



