'use strict';

const birthday = Symbol('birthday');


const user = {
    name: 'Alex',
    surname: 'Smith',
    [birthday]: '20/04/2021',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

// Object.defineProperty(user, 'birthday', { value: prompt('Date?'), enumerable: true, configurable: true });



// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));


// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));


Object.defineProperty(user, 'showMyPublicData', { enumerable: false });


for (let key in user) {
    console.log(key);
}

console.log(Object.getOwnPropertyDescriptor(user, 'PI'));


Object.defineProperties(user, {
    name: { writable: false },
    surname: { writable: false }
});



// user.birthday = 'asdas';


// Object.defineProperty(user, 'name', { writable: false });


// Object.defineProperty(user, 'gender', { value: 'male' });

// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// user.name = 'ddsafs';

//writable 
//enumerable
//configurable