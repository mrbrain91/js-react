'use strict';

// const now = new Date('2020-05-01');
// const now = new Date(2020, 5, 1, 20);


const now = new Date();

console.log(now.setHours(40));

console.log(now);


// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());

// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 1000000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`sikl otrabotal zza ${end - start} millisekund`);