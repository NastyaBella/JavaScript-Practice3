function calc(){
    let w= document.getElementById('w').value
    let h= document.getElementById('h').value
    document.getElementById('w').readOnly = true;
    console.log(w,h)
    w = parseFloat(w); h= parseFloat(h)
    let rez = document.getElementById('rez')
    if (!isNaN(w) && !isNaN(h) && w > 0 && h > 0) { 
        s=h*w
        rez.style.color='black'
        rez.innerHTML='Площадь равна ' + w*h +'<BR>'
    }
    else{ 
        rez.style.color='red'
        rez.innerHTML='Введите корректные данные ' }
    console.log(s)
   
}
let circle = document.getElementsByClassName('circle')
circle[0].addEventListener('click', function(){
    let br=circle[0].style.borderRadius
    // console.log(br)
    if(br==''){
        circle[0].style.borderRadius="50%"
    }
    else{
          circle[0].style.borderRadius=""
    }
})
//type="number": Это указывает браузеру на необходимость использования специального числового поля ввода. Обычно оно содержит стрелки вверх/вниз для удобства настройки.
//Проверка на JavaScript:
//isNaN(w) и isNaN(h): Они проверяют, являются ли входные значения допустимыми числами (не NaN - Не число).