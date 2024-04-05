function a(b) { // a() is a higher order function because we are passing a function inside it
  console.log(b);
  b()
}



// callback function
a(function sayHi() {
  console.log('hi, hi, hi, hi');
});