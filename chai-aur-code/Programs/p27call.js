function SetUsername(username) {
  // complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username); // here this is optional it is not necessary to erite here

  this.email = email;
  this.password = password;
}

const coffee1 = new createUser("espresso", "coffee1@gmail,com", "brue gold");
const coffee2 = new createUser("filter coffee", "coffee2@gmail,com", "nescafe");

console.log(coffee1);
console.log(coffee2);