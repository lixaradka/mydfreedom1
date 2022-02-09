//                                    Задание 1

let btn = document.querySelector('.custom-btn')
let popup = document.body.querySelector('.popup')
btn.addEventListener('click' , function (event) {
   popup.classList.add('opened')
})

let popupClose = document.querySelector('.popup-close')
popupClose.addEventListener('click' , function (event) {
   popup.classList.remove('opened')
})


//                                    Задание 2
let burgerBtn = document.querySelector('.burger')
let panel = document.body.querySelector('.panel')
burgerBtn.addEventListener('click' , function (event) {
   panel.classList.add('opened')
})

let panelClose = document.querySelector('.panel-close')
panelClose.addEventListener('click' , function (event) {
   panel.classList.remove('opened')
})


//                                    Задание 3
let burgerBtn = document.querySelector('.burger')
let panel = document.body.querySelector('.panel')
burgerBtn.addEventListener('click' , function (event) {
   panel.classList.toggle('opened')
})
let burger = document.querySelector('.burger')
let cross = document.querySelector('.cross')
burgerBtn.addEventListener('click' , function (event) {
    burger.classList.toggle('opened')
    cross.classList.toggle('opened')
})
cross.addEventListener('click' , function (event) {
    burger.classList.toggle('opened')
    cross.classList.toggle('opened')
    panel.classList.toggle('opened')
})


