"use strict";

// Место для первой задачи

const userName = "Anton";

function sayHello(name) {
    return `privet, ${name}`;
}

sayHello(userName);





// Место для второй задачи

const number = 4;

function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
}

returnNeighboringNumbers(number);


// Место для третьей задачи


function getMathResult(numberOne, numberTwo) {

    let result = "";

    if (typeof(numberTwo) === 'string' || numberTwo <= 0) {
        return numberOne;
    } else {
        for (let i = 1; i <= numberTwo; i++) {

            if (i > 1) {
                result += "---";
            }
            result += numberOne * i;
        }
        return result;
    }

}

console.log(getMathResult(3, 10));