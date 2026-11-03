function calculate() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let answer = document.querySelector('.rez');

    if (num1 <= 0 || num2 <= 0 || !isNaN(num1) || !isNaN(num2)) {
        answer.innerHTML = 'Введите корректные данные!';
    }
    else if (isNaN(num1)) {
        answer.innerHTML = 'Некорректные данные (например, текст).'}
     else {
        let total = num1 * num2;
        answer.innerHTML = 'Ваня получит ' + total + 'конфет';
    }
    event.preventDefault();
}