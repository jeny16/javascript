const a = [1, 2, 3, 4, 5];

const b = a.splice(1,3)
console.log(b)

const c = a.slice(1,3)
console.log(c)

const d =[1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]];

const real_another_arr = d.flat(Infinity)

console.log(real_another_arr)

console.log(Array.from("jeny"))