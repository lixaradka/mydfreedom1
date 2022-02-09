let ul = document.querySelector('ul')
let form = document.querySelector('form'); 
form.addEventListener('submit' , function (event) {
    event.preventDefault();
    let string = form.querySelector('.string')
    let checkbox = document.createElement('input')
    let cross = document.createElement('button')
    checkbox.setAttribute("type", "checkbox");
    cross.innerText = 'X'
    let addLi = document.createElement('li')
    addLi.innerText = string.value
    ul.appendChild(addLi)
    addLi.prepend(checkbox)
    addLi.append(cross)

    checkbox.addEventListener('click' , function (event) {
    if(checkbox.checked) {
        addLi.style.textDecoration = 'line-through'
        ul.append(addLi)
    } else {
        addLi.style.textDecoration = 'none'
    }
})

cross.addEventListener('click' , function (event) {
    addLi.remove()
})

    
    string.value = ''
}) 