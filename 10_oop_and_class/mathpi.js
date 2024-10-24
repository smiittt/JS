Object.getOwnPropertyDescriptor(Math, "PI");

const myData = {
  fname: "Smit",
  lname: "Miyani",
  Company: "Bugrifix Software & Santinals",
};

// checking that can we change walue or not if true then we can change
console.log(Object.getOwnPropertyDescriptor(myData, "fname"));
// { value: 'Smit', writable: true, enumerable: true, configurable: true }


// Writable:

// true : means the value of the property can be changed (you can reassign the value).
// false : means the value cannot be changed (it is read-only).

// Enumerable:

// true : means the property will show up during iteration (like in a for...in loop or Object.entries()).
// false : means the property will not appear in loops or object enumeration methods


// we can change the value of fname
Object.defineProperty(myData, "fname", {
  writable: false,
  enumerable: false,
  configurable: false,
});


console.log(Object.getOwnPropertyDescriptor(myData, "fname"));
