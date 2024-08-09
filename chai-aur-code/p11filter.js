// const coding = ["js", "ruby", "java", "python", "cpp"]
//  const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// });

// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num > 4
// })

// //IF THERE IS {} THEN YOU HAVE TO WRITE RETURN OTHERWISE ITS AN ERROR!!!!!
// console.log(newNums)


const Books = [
    { title: 'book one', genre: 'history' , edition: '2004' },
    { title: 'book two', genre: 'sci-fi' , edition: '2008' },
    { title: 'book three', genre: 'non-fiction' , edition: '2014' },
    { title: 'book four', genre: 'maths' , edition: '2018' },
    { title: 'book five', genre: 'story' , edition: '2006' },
    { title: 'book six', genre: 'history' , edition: '2023' },
]

const userBooks = Books.filter((bk) => bk.genre == 'history')
let b = Books.filter( (bk) =>  {
    return bk.edition >= 2015 && bk.genre == 'history'
}  )

// whwnever use {} scope use return keyword it is mandatory. 
console.log(userBooks);
console.log(b);


