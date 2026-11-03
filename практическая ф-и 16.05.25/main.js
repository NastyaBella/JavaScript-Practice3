 //Декларативная функция (Объявляется с помощью ключевого слова function, можно вызывать до объявления)
        function sub(num1, num2) {
            return num1 - num2;
        }
        
        function calculateSubtraction() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const result = sub(num1, num2);
            document.getElementById('subResult').textContent = `Результат: ${num1} - ${num2} = ${result}`; //textContent Выводит результат в элемент с id="subResult"
        }
        
        //Функциональное выражение (Функция присваивается переменной (power),нельзя вызвать до присваивания, Может быть анонимной (без имени))
        let power = function(a, b) {
            if (b < 0) return 'Отрицательная степень не поддерживается';
            if (b === 0) return 1;
            return a ** b;
        };
        
        function calculatePower() {
            const base = parseFloat(document.getElementById('base').value);
            const exponent = parseFloat(document.getElementById('exponent').value);
            const result = power(base, exponent);
            document.getElementById('powerResult').textContent = `Результат: ${base}^${exponent} = ${result}`;
        }
        
        //Стрелочная функция 
        let summ = (x, y) => x + y;
        
        function calculateSum() {
            const x = parseFloat(document.getElementById('x').value);
            const y = parseFloat(document.getElementById('y').value);
            const result = summ(x, y);
            document.getElementById('sumResult').textContent = `Результат: ${x} + ${y} = ${result}`;
        }
        
        //Анонимная функция 
        document.getElementById('size').addEventListener('click', function() { //Анонимная функция «оборачивает» вызов, без неё Функция вызовется сразу при загрузке страницы
            const demoText = document.getElementById('demoText');
            const currentSize = parseInt(window.getComputedStyle(demoText).fontSize); //window.getComputedStyle(demoText)Получает все текущие CSS-стили элемента demoText (включая те, что заданы через классы или внешние CSS-файлы), Возвращает объект CSSStyleDeclaration со всеми свойствами, .fontSize Извлекает значение свойства font-size (например, "16px"), parseInt(...) Преобразует строку вида "16px" в число 16 (отбрасывает "px"), Результат сохраняется в currentSize.
            demoText.style.fontSize = (currentSize + 5) + 'px';
            demoText.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        });
        
        //Рекурсивная функция 
        function startTimer(n) {
            if (n <= 30) {
                document.getElementById('rec').textContent = `Таймер: ${n} секунд`;
                setTimeout(() => startTimer(n + 1), 1000);
            } else {
                document.getElementById('rec').textContent = 'Таймер завершен!';
            }
        }
        //document.querySelector('p') получить элемент из DOM (кроме getElementById)
        //можно добавить блокировку кнопок при вводе букв isNaN()