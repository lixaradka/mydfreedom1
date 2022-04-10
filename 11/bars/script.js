//                                     Задание 1
// 2. Создаем переменные и собираем в коллекции все кнопки и все блоки с контентом.
// 3. Перебираем все кнопки и вешаем на них обработчик клика. При клике запускается функция openTab, в нее передаем 2 параметра - event и id блока (id блока = дополненный id кнопки, по которой пришелся клик).
// 4. Описываем функцию openTab, которая показывает блок. Она принимает два параметра - event и id (событие - нужно для определения кнопки, по которой пришелся клик, и id - нужно для определения нужного блока). Внутри этой функции:
// - перебираем все кнопки и убираем у них класс active (используем forEach и стрелочный синтаксис)
// - перебираем все блоки и скрываем их (используем forEach и стрелочный синтаксис)
// - определяем кнопку, по которой кликнули (event.target) и добавляем ей класс active
// - находим по id блок, связанный с активной кнопкой, и показываем его. 

let btnArr = document.querySelectorAll('.btn');
let textArr = document.querySelectorAll('.text');

// console.log(btnArr);
// console.log(textArr);

for(let i = 0;i<btnArr.length;i++) {
    btnArr[i].addEventListener('click' , (event) => {
        let id = event.target.id;
        console.log(id)
           openTab(id);
    })
}


function  openTab(id) {
    textArr.forEach(item => {
        item.style.display = 'none';
        
        console.log(`${id}-text`)
        if(item.classList.contains(`${id}-text`)) {
            item.style.display = 'block'
        }
    })
} 