'use strict';

//touchstart

//touchmove

//touchend

//touchenter

//touchleave

//touchcencel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        console.log('start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        console.log(e.changedTouches[0].pageX);
    });

    // box.addEventListener('touchend', (e) => {
    //     console.log('end');
    // });
});

//touches
//targetTouches
// changedTouches



// Hummer js



