// const userName1 = "Samim";
// let userName2 = userName1; // same memory

// userName2 = userName2 + "Akter";  // different memory

const fruits = ["Mango", "Apple", "Orange"];

// const myFruits = fruits;

// myFruits.push("Water melon");
// myFruits.push("Grapes");

const user1 = {
  firstName: "Samim",
  lastName: "Gupta",
  pata: {
    city: 'Delhi',
    pin: 893893
  }
};

// const user2 = {}
// Object.assign(user2, user1)

// Right way to copy array or object

// const user2 = {...user1}

// const myFruits  = [].concat(fruits);
// console.log(myFruits);

// const myFruits = fruits.slice();
// console.log(myFruits);

// shallow copy
const user2 = {...user1}

