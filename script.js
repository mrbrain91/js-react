// localStorage.setItem('number', 5);

// localStorage.removeItem('number');

// localStorage.clear();

// console.log(localStorage.getItem('number'));

// const checkbox = document.querySelector('#checkbox'),
//     form = document.querySelector('form'),
//     change = document.querySelector('#color');

// if (localStorage.getItem('isChecked')) {
//     checkbox.checked = true;
// }

// checkbox.addEventListener('change', () => {
//     localStorage.setItem('isChecked', true);
// });

// change.addEventListener('click', () => {
//     if (localStorage.getItem('bg') === 'changed') {
//         localStorage.removeItem('bg');
//         form.style.backgroundColor = '#fff';

//     } else {
//         localStorage.setItem('bg', 'changed');
//         form.style.backgroundColor = 'red';
//     }
// });

// const persone = {
//     name: 'Alex',
//     age: 25
// };

// const serializedPersone = JSON.stringify(persone);
// localStorage.setItem('alex', serializedPersone);

// console.log(JSON.parse(localStorage.getItem('alex')));


//REGULYARNOE VRAJENIYA

// new RegExp('pattern', 'flags'); ishlatilmaydi

// /pattern/f

// i
// g
// m

// const ans = prompt('vvedite vashe chislo');


// const reg = /\d/g;

// console.log(ans.match(reg));

// \d - ishem digits

// \w - ishem slova

// \s - ishem probel

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/\./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));

const str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\D/ig));


// \D
// \W