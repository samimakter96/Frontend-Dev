// rest parameter is like replacement of parameters

// const nums = [1, 2, 3, 4, 5]
// function add(a, b, ...para) {
//   console.log(a, b);
//   console.log(para);
//   let sum = 0
//   for (let i = 0; i < para.length; i++) {
//     sum += nums[i];
//   }
//   return sum
// }

// ans = add(...nums);
// console.log(ans);


const nums = [1, 2, 3, 4, 5]


function add(...para) {
  return para.reduce((acc, curr) => acc + curr)
}

const ans = add(...nums);
console.log(ans);