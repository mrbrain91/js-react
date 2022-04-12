/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.getElementsByClassName("promo__adv"),
    genre = document.querySelectorAll(".promo__genre"),
    divGenre = document.createElement("div"),
    bg = document.querySelector(".promo__bg");



// 1я задача

// 1-usul
// const adv = document.querySelectorAll(".promo__adv");
//2 usul
adv[0].remove();

//2я задача

divGenre.innerHTML = "<div class='promo__genre'>ДРАМА</div>";
genre[0].replaceWith(divGenre);

// 3я задача

bg.style.cssText = 'background:none; background: url(../../img/bg.jpg) center center/cover no-repeat;';










// 2я задача