// singelton
// Object.create // Constructer method

const symbol = Symbol("FromSymbolValue");

// object literals
const jUser = {
  name: "Smit",
  [symbol]: "Okay",
  "full name": "Smit Miyani",
  age: 19,
  location: "Surat",
  isLoggedin: false,
};

// console.log("Way 1 : " + jUser.name);
// console.log("Way 2 : " + jUser["name"]);
// console.log(jUser["full name"]);
// console.log(jUser[symbol]);

// jUser["full name"] = "Smit P Miyani"
// Object.freeze(jUser); // After using freeze we cannot change value!
jUser["full name"] = "SMIT P MIYANI";
// console.log(jUser);

jUser.UserKoNamaste = function () {
    console.log(`Welcome ${this["full name"]} to CodeWorld`);
};

console.log(jUser.UserKoNamaste());
