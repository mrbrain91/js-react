'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


// console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');


// const text = document.createTextNode('mendirman usha');

// console.log(div);


div.classList.add('black');

document.body.append(div);

// document.querySelector('.wrapper').append(div);

// wrapper.append(div); // yangi usul
// wrapper.appendChild(div); // eski usul


// wrapper.prepend(div);

// hearts[0].before(div);

// hearts[0].after(div);


// circles[0].remove();
// wrapper.removeChild(hearts[0]);



// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);


// wrapper.insertBefore(div, hearts[0]); // eski usul

div.innerHTML = "<h1>Hello world</h1>";

// div.textContent = "Hello";

// div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');
div.insertAdjacentHTML("", '<h2>Hello</h2>');