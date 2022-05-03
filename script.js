'use strict';


// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         // console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello` + this.name);
//     };
// }

// let ivan = new User('Ivan', 23);

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));

// 1)  obchnaya funktsiysa: this =window, no esli use strict -  undefined
// 2) Kontekst u metodov obekta - sam obekt
// 3) this v konstrukturax i klassax - eto novy ekzemplyar obekta
// 4) Ruchnaya privyazka this: call, apply, bind

const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     // console.log(this);
//     this.style.backgroundColor = 'red';
// });


btn.addEventListener('click', (e) => {
    // console.log(this);
    e.target.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

obj.sayNumber();

const doublee = a => a * 2;

console.log(doublee(4));