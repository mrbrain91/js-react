"use strict";

const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('bos');
// };



// btn.addEventListener('click', (e) => {
//     console.log(e.target);
//     e.target.remove();
//     // console.log('hover');
// });



const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);

};

// btn.addEventListener('click', deleteElement);
// btn.addEventListener('overlay', deleteElement);


btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, { once: true });
});



const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    // console.log(event.target);
});