//                                                      Задание 1
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

// let str = 'mercedes benz';
// function ucFirst(str) {
//     let upperCase = str[0].toUpperCase();
//     let slice = str.slice(1,13)
//     let console = (`${upperCase}${slice}`)
//     return console
// }
// let fun = ucFirst(str);
// console.log(fun)


//                                                      Задание 2
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.
// let str = 'bom-bom XXX';
// function checkSpam(str){
//     if(str.includes('xxx')){
//         console.log(true)
//     }else {
//         console.log(false)
//     }
// }
// checkSpam(str)


//                                                      Задание 3
// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
// let str = 'привет Женя'
// function reverse(str){
//     let split = str.split('');
//     let reverse = split.reverse();
//     console.log(reverse);
// }
// reverse(str)


//                                                      Задание 4
//4.0
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 
// let stations = [
//     'MAN675847583748sjt567654;Manchester Piccadilly',
//     'GNF576746573fhdg4737dh4;Greenfield',
//     'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//     'SYB4f65hf75f736463;Stalybridge',
//     'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
// ];
// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
// Вывести эти строки в консоль
// ПОДСКАЗКА:
// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк
// let addUl = document.createElement('ul');
// document.body.append(addUl);
// function sts(stations) {
//     for (let item of stations) {
//         let code3 = item.slice(0, 3);
//         let indexT = item.indexOf(';');
//         let namest = item.slice(indexT+ 1);
//         let result = (`${code3}: ${namest}`);
//         console.log(result);

//         //4.1
//         // Выведите полученные строковые значения на странице в виде списка (ul li) 
//             let li = document.createElement('li');
//             li.innerText = result
//             addUl.appendChild(li)
            
//     }
// }
// sts(stations);

//                                                      Задание 5
// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
// Пример:
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// function unique(arr) {
//     let newStr =[];
//     for(let i = 0; i < strings.length; i++){
//         if(!newStr.includes(strings[i])){
//             newStr.push(strings[i])
//         }
//     }
//     console.log(newStr)
// }
// unique(strings)
 

