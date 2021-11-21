//                      Задание 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
// С помощью браузера ... я открыл страничку ... 
//(необходимые значения добавьте с помощью BOM)

console.log(`${'С помощью браузера'} ${navigator.appName} ${'Я открыл страничку'} ${location.href}`)


//                      Задание 2
// В файле html есть разметка:
/* <ul id="list">
<li>Джон</li>
<li>Пит</li>
<li>Джессика</li>
<li>Сара</li>
</ul> */    
// Вывести в консоль каждое из имен (содержимое каждого li).

let names = document.body.querySelectorAll('li');
for(let li of names){
console.log(li.innerText)
}


//                      Задание 3
//Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)
/* <ul id="list">
<li>Джон</li>
<li>Пит</li>
<li>Джессика</li>
<li>Сара</li>
</ul>  */

for(let i = 0; i < names.length; i++){
    names[i].innerText  = i
    console.log(i)
} 



//                      Задание 4
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

function addTag(name,color,text){
    let addTag = document.createElement(name);
    addTag.style.color = color;
    addTag.innerText = text;
    document.body.appendChild(tag)
}
addTag('span','red','text')
addTag('p','blue','sakdf')
addTag('h1','green','hi')



//                      Задание 5
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

function addTeg(name,text,size,font){
let addTeg = document.createElement(name);
addTeg.innerText = text;
addTeg.style.fontSize = size;
addTeg.style.fontWeight = font;
document.body.appendChild(addTeg)
}
addTeg('p','text','36px','bold')


//                      Задание 6
// Вставить в страницу (в html документ) тег <select>. С помощью js добавить в этот select опции (option) под годы от 1960 по 2020.

for(let i = 1960; i < 2020; i++){
    let addTag = document.createElement('option');
    addTag.innerText = i;
    document.querySelector('select').appendChild(addTag);
}


//                      Задание 7
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:
// [{
// name: "Женя",
// order: true
// },
// {
// name: "Кристина",
// order: true
// },
// {
// name: "Павел",
// order: false
// },
// {
// name: "Виолетта",
// order: false
// },
// {
// name: "Костя",
// order: true
// }];
// Перебирать массив, для каждой ячейки массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом
// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

let arr =[{
name: "Женя",
order: true
},
{
name: "Кристина",
order: true
},
{
name: "Павел",
order: false
},
{
name: "Виолетта",
order: false
},
{
name: "Костя",
order: true
}];

function info(){
    let names = document.querySelectorAll('li')
    for(let i = 0; i < arr.length; i++){
        let order = arr[i].order ? 'оплатил заказ' : 'отменил заказ'
        names[i].innerText = `клиент  ${arr[i].name} ${order}`
    }
}
info()


//                      Задание 8
// Есть массив ссылок:
// let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/', 'https://yandex.ru/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где name - сам атрибут, который нужно добавить, value - его значение.
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/', 'https://yandex.ru/'];
let addDiv = document.createElement('div')
addDiv.style.background = 'red'
addDiv.style.padding = '70px'
div = document.body.appendChild(addDiv)

for(let i = 0; i < linksArr.length; i++) {
    let addHref = document.createElement('a')
    addHref.style.display = 'block'
    addHref.innerText = linksArr[i]
    addHref.setAttribute('href',linksArr[i])
    document.querySelector('div').appendChild(addHref);
}
console.log(div)


//                      Задание 9
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove()

let elem = document.querySelectorAll('.forRemove')
console.log(elem)
for(let i = 0; i < elem.length; i++){
elem[i].remove()
}


//                      Задание 10
// Создать массив объектов с полями name, age. Создать html таблицу с двумя колонками,
// заполненную этими объектами. Name должно быть красного цвета, age - зеленого.
let table = document.createElement('table');
document.body.appendChild(table);

let arr = [{name : 'nikon',age : 20},{name : 'vlad',age : 30}]
for(let item of arr){
let tr = document.createElement('tr');
let tdName = document.createElement('td');
let tdAge = document.createElement('td');

tdName.innerText = item.name;
tdName.style.color = 'red'
tdAge.innerText = item.age;
tdAge.style.color = 'green'

tr.appendChild(tdName)
tr.appendChild(tdAge)
table.appendChild(tr);
}


console.log(table);

