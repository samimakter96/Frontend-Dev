// map() - for each of the array element you want to map something

const array = [2, 5, 7, 8, 9, 6];

const square = array.map((x) => x * x);

const cube = array.map((x) => x * x * x);

// console.log(cube);

// filter() - filter output from the array

const odd = array.filter((item) => item % 2 !== 0);
// console.log(odd)

const even = array.filter((item) => item % 2 === 0);
// console.log(even)

delVal = 8;

// If item is not equal to 8, it will be included in the new array. If item is equal to 8, it will be excluded.

const remove = array.filter((item) => item !== delVal);
// console.log(remove)

// reduce() - reduce an array to a single value

// Normal way
// function Sum(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }

//   return total;
// }

// console.log(Sum(array))

// Same but using  Reduce
const sum = array.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// function Max(array) {
//   let max = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i]
//     }
//   }

//   return max
// }

// console.log(Max(array))

const max = array.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }

  return acc;
}, 0);

console.log(max);

const person = [
  { firstName: "samim", lastName: "Akter", age: 20 },
  { firstName: "Aman", lastName: "Gupta", age: 27 },
  { firstName: "Ankit", lastName: "Kumar", age: 25 },
];

// I want firstName and age together
const nameAndAge = person.map((item) => item.firstName + " " + item.age);
console.log(nameAndAge);

// filter those person whose age is greater than 25
const ageGreaterThan25 = person.filter((item) => item.age > 25);
console.log(ageGreaterThan25);

// I want only those person firstName whose age is greater than 20
const nameGreaterThan20 = person
  .filter((item) => item.age > 20)
  .map((item) => item.firstName);
console.log(nameGreaterThan20);


// using reduce
const res = person.reduce((acc, curr) => {
  if (curr.age > 20) {
    acc.push(curr.firstName);
  }

  return acc
}, [])

console.log(res)