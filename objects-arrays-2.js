//                     Задание 1
// Задайте в коде переменную n с числовым значением.

// 1) с помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.
// 2) с помощью логического ИЛИ в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.

//1)
let num = Number(prompt('Введите число num:'));
if (num > 1 && num < 100) {
console.log('находится');
} else {
console.log("Не находится")
}
//2)
let num = Number(prompt('Введите число num:'));
if (num > 100 || num < 0) {
    console.log('Число n  не находится в диапазоне от нуля до ста ')
} else {
    console.log('Число n находится в диапазоне от нуля до ста ')
}

//                     Задание 2  
// Создайте объект с именами и заработными платами
// const engineers = {
// Den: 1000,
// Matt: 5000,
// Steve: 2000
// }
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:
// Заработная плата ххх составляет ххх рублей.

const engineers = {
Den: 1000,
Matt: 5000,
Steve: 2000
}
for (let property in engineers){
    console.log (
       'заработная плата ' + property + ' составляет ' + engineers[property] + ' рублей'
   )
}


//                   Задание 3
// Создать массив из 5 элементов.
// Используя цикл for, вывести каждый второй элемент массива в консоль.

let array = [1,2,3,4,5]
for (let i = 0;i < array.length;i=i+2) {
console.log(i)
}

//                   Задание 4 
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
for (let i = 0;i < numbers.length;i++){
    console.log(`Индексу ${(i)} соответствует число ${numbers[i]}`)
}

//                     Задание 5
//1)Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком


let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70;
for (let item of numbers) {
    console.log(item);
}

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70;
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// 2) Посчитать и вывести в консоль сумму элементов в массиве.

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70;
let summ = 0;
for(let i = 0; i < numbers.length; i++) {
    summ += numbers[i];
}  
    console.log(summ);


//3) Посчитать и вывести в консоль сумму четных элементов в массиве.
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70;
let summ = 0;
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i]%2) == 0{
    summ += numbers[i];
}
}  
console.log(summ);

//4)Найти и вывести в консоль максимальное число массива.

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
let max = numbers[0]
for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max = numbers[i]
    }
}
console.log(max)


//5)
//Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза).
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
let max = numbers[0];
for (let item in numbers) {
    if (max < numbers[item]) {
        max = numbers[item]
    }
    console.log(max[item])
}




//a                  Задание 6
// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// В цикле создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []). Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.

let newArray = [];
let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
   newArray.push(arr[i])
    }
}
console.log(newArray)


//                    Задание 7  
// Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.

let nums = [5, 4, 3, 8, 0];
let nums2 = []
let limit = 5;               
for (let i = 0; i < nums.length; i++) {
    if(nums[i] >= limit){
        nums2.push(nums[i])
    }
}
console.log(nums2)

//                    Задание 8
// Описать массив из объектов с двумя полями: строковым и числовым. Пройти в цикле по массиву и вывести строковое поле каждого объекта, если его числовое поле больше 10.
let mass = [{name : 'nikon',age : 13},{name : 'galya',age : 9},{name : 'nikita',age : 24}]
for (let item of mass){
    if(item.age > 10){
console.log(item.name) 
    }
}


//                    Задание 9
// Задать массив слов. Например:

// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

// 1) В цикле сформировать массив объектов с ключами word (само слово), length (длина слова). Вывести этот массив в консоль.

// Подсказка: длину строки можно определить с помощью метода .length. Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)

// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"

//1)
let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
let vegetables2 = []
for(let item of vegetables){
    vegetables2.push({'word': item , 'length' : item.length})
}
console.log(vegetables2)


//2)
for(let item of vegetables2){
    console.log(`${item.word} - ${item.length}`)
}


