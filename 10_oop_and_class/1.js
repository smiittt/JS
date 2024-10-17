const data = {
  name: "tilak miyani",
  std: "7",
  age: 15,

  getUserName: function () {
    console.log(`Student Name is : ${this.name}`);
    console.log(this);
    
  },
};

console.log(data.getUserName());
// console.log(data.name);
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("Smit", 12, true)
const userTwo = new User("Bugrifix", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);