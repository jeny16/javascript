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

