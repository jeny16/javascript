// object and new keyword
// arrowfunction don't have this keyword because of prototype issue..

function multby5(num){
   return num*5 
}

multby5.power = 2;

// console.log(multby5(5));
// console.log(multby5.power);
// console.log(multby5.prototype);


// every thing in js is a object
// function is function but it is a object also


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

// this means "jisne usko bulaya"

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.increment()
chai.printMe()