'use strict';

// task 1

let arry = [1, 2, 3, 4, 5, -6, -7, -8];
let jami = arry.filter((item, index, array) => {
    console.log(item, index, array);
    return item >=0;
})
console.log(jami);
  

let masivi = jami.reduce((accumulator, current, index, array) => {
console.log(accumulator, current, index);
return accumulator+current;
}, 0);
console.log(masivi);


// task 2

let x = [
    {fruit: 'apple'}, 
    {fruit: 'orange'},
    {fruit: 'apple'},
    {fruit: 'banana'},
    {fruit: 'orange'},
];
let saboloo = x.reduce((accumulator, current, index, array) => {
console.log(accumulator, current, index);
return accumulator, current, index;
}, {} );
console.log(saboloo);


// task 3

const a = 40;
const b = new Promise((resolve, reject) => {
    if (a===40) {
        resolve ('true');
    } else {
        reject ('falce');
    }
})
b
.then((type) => console.log(type))
.catch((error) => console.log(error));


function addasync (m, n) {
  return b;  
}
addasync(3, 4);