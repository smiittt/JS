// Creating Promise
const promisOne = new Promise(function (resolve, reject) {
  //Do an async task
  // Database Calls, Cryptography, Network
  setTimeout(() => {
    console.log("Async task completed");
    resolve();
  }, 1000);
});

// Consuming Promise

promisOne.then(function () {
  console.log("Done");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("done");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ myname: "Smit Miyani", company: "Bugrifix Software Pvt Ltd" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promisFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let errorr = false;
    if (errorr) {
      reject("Error : Something went wrong");
    } else {
      resolve({ myname: "Smit Miyani", company: "Bugrifix Software Pvt Ltd" });
    }
  }, 1000);
});

promisFour
  .then(function (user) {
    console.log(user);
    return user.myname;
  })
  .then(function (myname) {
    console.log(myname);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("All Done!!");
  });

const promisFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let errorr = true;
    if (errorr) {
      reject("Error : Something went wrong");
    } else {
      resolve({ myname: "Smit Miyani", company: "Bugrifix Software Pvt Ltd" });
    }
  }, 1000);
});

async function promisFiveUsingAsyncAwait() {
  try {
    const response = await promisFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
promisFiveUsingAsyncAwait()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/smiittt')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))