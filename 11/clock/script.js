//                                       Задание 3
// Создать виджет-часы, как в примере ЗДЕСЬ.
// Вам понадобится каждую секунду (через setInterval) запускать функцию, которая будет забирать время из объекта Date и выводить в разметку. Цвета и т.п. прописать в CSS.

let h = document.querySelector('.hour p');
let m = document.querySelector('.min p');
let s = document.querySelector('.sec p');


setInterval( function newDate() {
let date = new Date();

let dateH = date.getHours();
let dateM = date.getMinutes();
let dateS = date.getSeconds();

h.innerText = dateH;
m.innerText = dateM;
s.innerText = dateS;
},1000);
newDate();


