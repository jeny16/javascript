// bluebird library is bydefault in the new javascript
// earlier it was the external library to use in js to perform fetch then catch etc..
// available in git hub
// v8 engine is based on tha cpp language that is available in tha gitHub

const promiseOne = new Promise(function (resolve , reject){
    // do an aync task
    // DB calls ,cryptography, network call
    setTimeout(function(){
        console.log("async task is completed ");
        resolve()
    } , 1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
})

const promiseTwo = new Promise(function (resolve , reject){
    setTimeout(function(){
        console.log("async 2 task is completed ");
        resolve()
    } , 1000)
}).then(function(){
    console.log("promise 2 consumed");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({ username: "jeny", email: "jeny@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);

})

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let Error = false;
    if (!Error) {
      resolve({ username: "jeny", email: "jeny@gmail.com" });
    } else {
      reject("ERROR!!");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(() => console.log("kyak to thyu promise nu")
)/// default



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function () {
        let Error = true
        if (!Error) {
          resolve({ username: "jay", password: "123abc" });
        } else {
          reject("ERROR you went wrong !!");
        }
      }, 1000);
})


//same as then andd catch wait till function will complete 

async function consumepromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumepromiseFive()


// async function getAllUserName() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log("E:", error);    
//     }
// }

// getAllUserName()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => { 
    console.log(data);
    
})
.catch((error) => console.log(error))