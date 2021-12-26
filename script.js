//                           Задание 1      
// Дан объект:
// let user = { name: 'Tom', age: 20, isMarried: false }
// Cформировать массив строк вида "имя_поля - значение_поля":
// ['name - Tom', 'age - 20', 'isMarried - false']
// Реализовать это в виде функции, которая принимает объект и возвращает массив.Использовать цикл for-in

let user = { name: 'Tom', age: 20, isMarried: false }
function info(user) {
    let newUser = []
    for(let property in user){
        newUser.push(`${property} - ${user[property]}`)
    }
    return newUser
}
let fun = info(user)
console.log(fun)


//                           Задание 2
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке.
// Примеры результатов вызова функции:
// sum(2,4); 6
// sum('d',4); введенные данные не являются числами
// sum(1, [2]); введенные данные не являются числами
// sum(1); введите два параметра
// sum(); введите два параметра

function sum(x, y) {
    //1
    if (arguments.length < 2) {
        console.log('введите два параметра')
    } else if (typeof x == 'number' && typeof y == 'number') {
        console.log(x + y)
    } else {
        console.log('Введенный данные не являются числами')
    }
}
sum()


//                           Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

let findNumber = (x) => {
        let random = Math.floor(Math.random() * (10 - 1)) + 1;  
    if(x > 10 || x < 0){
        console.log("Вы введи некоректное число")
    }else if(x == random){
        console.log("Вы выйграли")
    }else (
        console.log(`Вы не угадали, ваше число - ${x},  а выпало число ${random}`)
    )
}
findNumber(5)


//                           Задание 4
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

let arr = [1,2,3,4,5]
function copyArr(arr){
    return arr
}
let fun = arr.map(copyArr)
console.log(fun)


//                           Задание 5
// На странице в html задать список элементов li с числами. Джававскриптом нужно выбрать из этого списка четные числа и создать из них массив. Затем, используя метод forEach, создать из массива новый список элементов li и поместить эти элементы в исходный тег ul. Для обхода через querySelectorAll использовать цикл for-of (forEach работать не будет).

let liList = document.querySelectorAll('li');
let newList = []
let ul = document.querySelector('ul')
for(let li of liList){
    if(li.innerText % 2 == 0){
        newList.push(li)
    }
}

newList.forEach(function(item){
    let tag = document.createElement('li');
    tag.innerText = item.innerText
    ul.appendChild(tag)
})


//                           Задание 6
// Создать разметку формы с инпутом для текста и селектом для категории (добавить несколько option с текстом Категория 1, Категория 2, Категория 3). Под формой должны должен быть список ul. В этот список каждую секунду добавляется новый элемент li с произвольным текстом (напр. Hello). Для этого можно использовать функцию setInterval https://learn.javascript.ru/se...
// Вся разметка должна быть создана джаваскриптом. В HTML в начале body должен быть пустой.

let addInput = document.createElement('input')
let addSelect = document.createElement('select')

let addOption = document.createElement('option')
let addOption2 = document.createElement('option')
let addOption3 = document.createElement('option')

addOption.innerText = 'Категория 1'
addOption2.innerText = 'Категория 2'
addOption3.innerText = 'Категория 3'
addSelect.appendChild(addOption)
addSelect.appendChild(addOption2)
addSelect.appendChild(addOption3)


let addUl = document.createElement('ul')

setInterval(() => addLiInterval = document.createElement('li'), 1000);
setInterval(() => addLiInterval.innerText = 'secret', 1000);
setInterval(() => addUl.appendChild(addLiInterval), 1000);




document.body.appendChild(addInput)
document.body.appendChild(addSelect)
document.body.appendChild(addUl)





