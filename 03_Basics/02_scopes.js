//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function AddOne(number) {
  return number + 1;
}
// console.log(AddOne(10));

function one() {
  const name = "Smit";

  function two() {
    const surname = "Miyani";
    console.log(name + " " + surname);
  }
// console.log(surname);
// here i can't use surname variable bcz that variable scope is in only function two()
  
  two(); // Here i am calling function"two"
}

one(); // here i am calling function "one" so when i call one after onward function two() automatically called


if (true) {
    const username = "Smit"
    if (username === "Smit") {
        const website = " bugrifix"
        // console.log(username + website);
    }
    // console.log(website);   // Also here i can't access website variable due to variable scope bcz website variable scope is in only nested if condition
}

// console.log(username);    // same here we can't access username variable after if statement completed


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // we can access before function 

function addone(num){
    return num + 1
}



addTwo(5) // it will throw error bcz we are trying to access before function 
// this os heppening bcz here we are making function and storing in variable 
const addTwo = function(num){
    return num + 2
}