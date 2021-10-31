//                     Задание 1
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
// alert( `number ${i}!` );
//}
let i = 0
while(i < 3) {
    alert( `number ${i}!` );
    i++
} 


//                      Задание 2
// Перепишите код с использованием тернарного оператора
let male = true;
let gender;
// if (male) {
// gender = 'man';
// } else{
// gender = 'woman'
// }

let result = gender = 'male' ? 'man' : 'woman'
console.log(result)


//                      Задание 3
// Задать массив логических значений (true/false). Каждое значение обозначает мужчина (true) или женщина (false).
// Из этого массива сформировать массив объектов такой же длины, как и заданный массив.
// У каждого объекта должно быть одно поле, gender, которое равно man, если значение в заданном массиве - true, и woman, если значение в заданном массиве - false.
// Т.е. из
// [true, false]
// должно получиться
// [{ gender: 'man' }, { gender: 'woman' }]

let mass = [true,false,true]
let mass2 = []

for(let i = 0; i < mass.length; i++) {
let gender = mass[i] == true ? 'man' : 'woman';
mass2.push({'gender' : gender})

}console.log(mass2)


//                      Задание 4
// Создайте функцию findPositiveNumbers()
// 1) Внутри функции должен определяться массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0] .
// Функция должна вывести в консоль все положительные числа по одному.
// 2) Функция должна не выводить числа в консоль, а составить из них новый массив. В самом конце тела функции - вывести новый массив в консоль.
// 3) Функция должна не выводить массив в консоль, а вернуть новый массив из положительных элементов arr.
// 4) Изначальный массив arr должен не описываться внутри функции, а поступать в нее как параметр.

let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
function findPositiveNumbers(arr) {
 
    let newArr = []
    for(let i = 0; i < arr.length; i++){   
    if(arr[i] > 0) {
           newArr.push(arr[i])
    }
}
return newArr
}
let fun = findPositiveNumbers(arr)
console.log(fun)


//                      Задание 5
// Напишите функцию, которая принимает два параметра: значение и количество элементов. Функция создает новый массив и заполняет его этим значением в указанном количестве.
// Например: из переданных значений ('a', 3) получаем массив ['a', 'a','a']

let it = 'a';
let val = 5;
function par(it,val) {
    let arr = [];
    for(let i = 0; i < val; i++){
        arr.push(`${it}`)
    }
    return arr
 
}
let fun = par(it,val)
console.log(fun)


//                      Задание 6
// Определите массив, например let arr = [5, 4, 3, 8, 0].
// Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// а запуск функции filterFor(arr, 10) дает результат []
// а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let arr = [5, 4, 3, 8, 0]
let a = 4
function filterFor(arr,a) {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        if(arr[i] >= a){
            newArr.push(arr[i])
        }
    }
    return newArr
}
let fun = filterFor(arr,a)
console.log(fun)


//                      Задание 7
// Написать функцию вывода в консоль случайного цвета. Это будет строка вида "rgb(10,55,250)"
// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// Подсказка: 
// Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 
// Одна функция может вызывать другую функцию

let min = 0;
let max = 255;
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;  
}
function  getRandomRGB() {
console.log(`rgb(${getRandomInteger(min, max)},${getRandomInteger(min, max)},${getRandomInteger(min, max)})`)
}
getRandomRGB()


//                      Задание 8
// Написать функцию pow(x, n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат (!!! решить без оператора **)
    function pow(x, n){ 
        let result = x;
        for(let i = 1; i < n; i++){
            result = result * x
        }
        return result
} 
let fun = pow(3,3)
console.log(fun)


//                      Задание 9
// Написать функцию isInteger(x), которая определяет, является ли число целым, и возвращает true либо false.
function isInteger(x) {
    return result = x % 1 == 0 ? true : false
}
let num = isInteger(15.7)
console.log(num)



//                      Задание 10
// Написать функцию, которая принимает целое число n.   
// Внутри функции запустить цикл от 1 до n с шагом 0,5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.
// Пример, при запуске функции с параметром 3:
// "1 integer"
// "1.5 decimal"
// "2 integer"
// "2.5 decimal"

function integer(n) {
    for(let i = 1; i < n; i = i+= 0.5){
        result = i % 1 == 0 ? 'integer' : 'decimal';
        console.log(`${i} ${result}`)
    }
}
integer(20)





