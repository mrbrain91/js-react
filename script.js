"use strict";

// first task 

// Место для первой задачи
// function firstTask() {
//     for (let i = 5; i <= 10; i++) {
//         console.log(i);
//     }
// }

// firstTask();


// Место для второй задачи
// function secondTask() {

//     for (let i = 20; i >= 10; i--) {
//         if (i == 13) {
//             break;
//         }
//         console.log(i);
//     }

// }

// secondTask();

// Место для третьей задачи
// function thirdTask() {
//     // Пишем решение вот тут
//     metki: for (let i = 2; i <= 10; i++) {

//         if (i % 2 !== 0) {
//             continue metki;
//         }
//         console.log(i);
//     }
// }

// thirdTask();


// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// function fourthTask() {
//     let i = 2;
//     while (i <= 16) {
//         if (i % 2 === 0) {
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// }

// fourthTask();


// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i <= 10; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// fifthTask();




// Second exercises



// Место для первой задачи

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
//     console.log(result);
//     // Не трогаем
//     return result;
// }

// firstTask();



// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут


//     for (let i = 0; i < data.length; i++) {

//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }

//     console.log(data);
//     // Не трогаем
//     return data;
// }

// secondTask();


// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];
//     }

//     console.log(result);
//     // Не трогаем
//     return result;
// }

// thirdTask();


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);