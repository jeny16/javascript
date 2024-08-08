const greetings = "hello world";
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}


// simple for each loop


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);


for (const [key, value] of map) {
    console.log(key, ":-" ,value);
}
// const myObject = {
//     'game':'NFS'
//     'game2':'spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ":-" ,value);
// }


const obj = {
    js: 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}


for (const key in obj) {
    console.log(`${key} shortcut is for ${obj[key]}`);
}


const coding = ["js", "ruby", "java", "python", "cpp"]

// callback function doesn't carry a name

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// });

function PrintMe(item)
{
    console.log(item);
}

coding.forEach(PrintMe)