//                                        Задание 2
// Сверстать любую простую страничку и реализовать смену темы.
// В шапке делаем кнопку «Тёмная тема», при нажатии этой кнопки странице присваивается доп. класс (напр. dark-theme) и начинают работать стили тёмной темы. Сама кнопка меняется на «Светлая тема», при нажатии которой доп. класс со страницы удаляется.

let themeBtn = document.querySelector('.dark-theme-btn a');
let aArr = document.querySelectorAll('a');
let header = document.querySelector('.header_inner')
themeBtn.addEventListener('click' , function (event) {
    

    for(let i=0; i<aArr.length; i++) {
    aArr[i].classList.toggle('active');
    }

    header.classList.toggle('active')



    if(themeBtn.classList == 'active') {
    themeBtn.innerText = 'white-theme';
    } else {
        themeBtn.innerText = 'dark-theme';
    }
});