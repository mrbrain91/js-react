'use srtict';

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();


    // request.addEventListener('readystatechange', () => {  // readystatechange kam ishlatiladi uning orniga 
    request.addEventListener('load', () => { //xozrgi zaprosning tayyorligini tekshiradi
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Chto- to poshlo ne tak';
        }
    });

    //status
    //statusText
    //response
    //readyState



});