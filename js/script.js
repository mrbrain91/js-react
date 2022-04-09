'use strict';

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(obj);
// console.log(copy);

// const obj = {
//     a: 5,
//     b: 7,
//     c: {
//         x: 10,
//         y: 1
//     }
// };

// function copy(mainObj) {
//     let copyObj = {};

//     let key;
//     for (key in mainObj) {

//         copyObj[key] = mainObj[key];
//     }

//     return copyObj;
// }

// const newCopy = copy(obj);

// newCopy.a = 10;
// console.log(obj);
// console.log(newCopy);

// const number1 = {
//     a: 6,
//     b: 8,
//     c: {
//         x: 89,
//         y: 12
//     }
// };

// const number2 = {
//     a: 99,
//     h: 90
// };

// const clone = Object.assign({}, number2);

// clone.a = 100;
// clone.d = 32434;

// console.log(number2);
// console.log(clone);


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'asdas';

// console.log(oldArray);
// console.log(newArray);

// const math = ['logarifm', 'kasr', 'interval'],
//       eng = ['sintance', 'words', 'grammal'],
//       all = [...math, ...eng, 'newpred'];

// console.log(all);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];



console.log(newAarray);
console.log(array);