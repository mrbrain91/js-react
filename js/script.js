'use strict';

// to string


// 1) 

console.log(typeof(String(null)));


// 2) konkonitizatsiya

console.log(typeof(String(5 + '')));

const num = 5;

console.log("https://vk.com/catalog/" + num);


//to number 
 
// 1) 

console.log(typeof(Number('4')));
// 2)

console.log(typeof(+'5'));

//3)

console.log(typeof(parseInt("15px", 10)));


let answ = +prompt("Hello", "");

//to boolen

// 0, '', null, undefined, NaN; = false, qolganlari true 
// 1) 

let switcher = null;

if(switcher) {
    console.log('Working...');
}

switcher = 1;

if(switcher) {
    console.log('Working...');
}


// 2) 

console.log(typeof(Boolean('4')));

// 3)

console.log(typeof(!!'4444'));







