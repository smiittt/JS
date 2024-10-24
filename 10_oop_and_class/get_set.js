class Users {
  constructor(email, password) {
    (this.email = email), (this.password = password);
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password(){
    return `${this._password}Miyani`;
  }

  set password(value){
    this._password = value;
  }
}

const user1 = new Users("smit@google.com", "123Smit");
console.log(user1.email);
console.log(user1.password);

