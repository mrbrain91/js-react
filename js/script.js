'use strict';

<<<<<<< HEAD
//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.changedTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('End');
    // });
});


// touches
//targetTouches
//changedTouches
=======



const p = document.querySelectorAll('p');

console.log(p);



function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script); 
}

loadScript("js/test.js");
loadScript("js/some.js");
>>>>>>> 8189b89f220696aabcab4d55c0efe00197ff6267
