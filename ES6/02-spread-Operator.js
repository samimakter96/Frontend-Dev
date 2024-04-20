const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8, 9];

// const jointArray = num1.concat(num2);

// const myName = 'Samim'

const jointArray = [...num1, ...num2]



// spread operator using in obj

// const user = {
//   name: 'Samim',
//   age: 20
// }

// // add value
// const updateUser = {...user, city: 'Bangalore'}



function add() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    sum += arguments[i]
  }
  console.log(sum);
}

add(2, 3, 4, 5, 6)
add(...jointArray)


