const colors = ["red", "green", "yellow", "pink", "black"];

// const color1 = colors[1]
// const color2 = colors[2]
// const color3 = colors[3]

// const [colors1, color2, color3] = colors;

// console.log(colors1, color2, color3);

// skip first two value and access 3rd value
// const [,,color3] = colors;

// or

const {3: color4} = colors;
// console.log(color4);


const user = {
  name: "Samim",
  age: 20,
  address: {
    city: "Bangalore",
    state: "W.B",
  },
};

// const name = user.name;
// const age = user.age

const { name, age } = user;
// console.log(name, age);

// changing variable name
// const { name: username, age: userAge } = user;
// console.log(username, userAge);


// multilevel destructuring
// const { address: {city} } = user;
// console.log(city);


function intro({age, name}) {
  console.log(age, name);
}

// intro(user)


function printColor([a, b,,g]) {
  console.log(a, b, g);
}

printColor(colors)