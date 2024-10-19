class User {
  constructor(username, password, email) {
    (this.username = username),
      (this.password = password),
      (this.email = email);
  }

  encryptPassword() {
    return `${this.password}158969`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new User("smit.miyani_", "smit@123", "smit@google.com");

// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());


// Behind th sence // injecting prototype 

function user(username, password, email) {
  (this.username = username), (this.password = password), (this.email = email);
}

user.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

user.prototype.encryptPassword = function () {
  return `${this.password}158969`;
};

const user2 = new user("smit.miyani_", "smit@123", "smit@google.com");

console.log(user2.encryptPassword());
console.log(user2.changeUsername());
