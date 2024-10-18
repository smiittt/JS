let cars = ["BMW", "Audi", "Farari "];

let carDetails = {
  bmw: "Normal car",
  Audi: "150+ Speed",

  AudiSpeed: function () {
    console.log(`Audi cars normal speed is : ${this.audi}`);
  },
};

Object.prototype.color = function () {
  console.log(`color is present in all objects`);
};

Array.prototype.allpetrol = function () {
  console.log(`Yes, All cars are in petrol`);
};

// cars.color();
// cars.allpetrol();

// carDetails.color();
// carDetails.allpetrol();




// Inheritance

const user = {
  f_name: "Smit",
  l_name: "Miyani",
};
const LoginDetails = {
  isLoggedIn: false,
  todayLoggedIn: false,
  __proto__:user, // All prooerties can accessible from loginDetails
  login: function () {
    console.log(`Sorry ${this.f_name}, Try again tommorow`)
  }
};
const Authority = {
    isAuthority: true,
    isSuperAuthority: false,

    //__proto__: LoginDetails // All loginDetails properties are accessible through Authority!
};




// modern syntax of inheritance
Object.setPrototypeOf(Authority, LoginDetails)

console.log(Authority.login());



// making  prototype with customName

let CompanyName = "Bugrifix Software Pvt Ltd"

Object.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(` True length is : ${this.trim().length}`)
}

CompanyName.trueLength()