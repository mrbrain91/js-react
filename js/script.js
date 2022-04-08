'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const { border, bg } = options.color;

console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);


// delete options.name;

// console.log(options);
// let counter = 0;

// for (let key in options) {

//     if (typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`svoystvo ${i} imeet znacheniya ${options[key][i]}`);
//         }
//     } else {
//         console.log(`svoystvo ${key} imeet znacheniya ${options[key]}`);
//         counter++;
//     }
// }


// console.log(counter);