// ## oops ##

const user = {
    username: "jerry",
    logicCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got the user details");
        console.log(`UserName: ${this.username}`);
        console.log(this);
    }
}


console.log(user.username);
console.log(user.getUserDetails());

const promiseOne = new Promise()
// here new is a counstructor function..

function User(username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this
    // not necessary
    // it returns the value bydefault 
} 

const userOne = new User("jeny", 6, true);
const userTwo = new User("jency", 8, false);
// here comes new keyword to solve this overwrite error 
// new keyword gives you a new isnstance sso that there is no chance of overwrite..

console.log(userOne.constructor);


// console.log(userOne);
// console.log(userTwo);
