const userEmail = []

if (userEmail){
    console.log("got it");
} else {
    console.log("don't get it");
    
}

// falsy values 

// false , 0 , -0, BigInt 0n , "", null ,undefined, NaN

// truthy values 

// true , "0" , 'false' ," " , [] , {} , function(){} 
// evaery value in string is truthy


// nullish coalescing operator (??): null and undesined(firebase and appwrite use)

// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = undefined ?? 15 ?? 20;

// console.log(val1)

// ternary operator

// condition ? true : false 

const a = 80;
a > 80 ? console.log("less than 80") : console.log("more than 80");


