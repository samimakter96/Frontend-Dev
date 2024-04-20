const user = {
  firstName: 'Samim',
  lastName: 'Akter',
  age: 20,
  address: {
    city: 'Delhi'
  },
  getFullName: function() {
    return user.firstName + ' ' + user.lastName
  }
  
}

const a = 'city'

// console.log(user.address && user.address.city);
// console.log(user.address?.city);
// console.log(user.address?.[a]);



console.log(user.getFullName?.())

