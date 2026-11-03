function checkone() {
    let number = document.getElementById('namber1').value
    let answer = document.getElementById('rezult1')

    if (number === "") {
        answer.innerHTML = 'Поле пустое, введите число'
    } else if (isNaN(number)) {
        answer.innerHTML = 'Некорректные данные (например, текст).'
    } else {
        number = Number(number);

        if(!Number.isInteger(number)) {
            answer.innerHTML = 'Для введенного числа понятие четности не определено.'
        } else if (number % 2 == 0) {
            answer.innerHTML = 'Число четное.'
        } else {
            answer.innerHTML = 'Число нечетное.'
        }
    }
    event.preventDefault();
}


function checktwo() {
    
    let login = document.getElementById('log').value
    let password = document.getElementById('pas').value
    let answertwo = document.getElementById('rezult2')

    if (login === "" || password === "") {
        answertwo.innerHTML = 'Не все ячейки заполнены верно'
    } else {
        answertwo.innerHTML = 'Данные отправленны успешно'
    }
    event.preventDefault();
}