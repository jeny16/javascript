const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10)

//// chaining using map filter 
const newNums = myNums
                      .map((num) => num * 10)
                      .map((num) => num + 1)
                      .filter((num) => num > 40)

console.log(newNums);

/// same rule as a filter if there is a scope then you have to use the 'return' keyword to return a value

