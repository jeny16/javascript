const Nums= [1, 2, 3, 4, 5]

// reduce syntax
// const initialvalue = 0;
// const a = b.reduce( (accumulator, currentvalue) => accumulator + currentvalue, initialvalue)


// const myTotal = Nums.reduce(function (acc, currval){
//     console.log(`acc value ${acc} and currval ${currval}`);
//     return acc + currval
// }, 0) 

const myTotal = Nums.reduce((acc,currval) => acc + currval, 0)
console.log(myTotal);
