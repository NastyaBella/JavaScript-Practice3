buttonLink = document.querySelector('.button-link')
dalee = document.getElementById('dalee')

buttonLink.addEventListener('click', function() {
    if (dalee.style.display == 'none') {
        dalee.style.display = 'block'
        buttonLink.innerHTML = 'Скрыть' 
    } else {
        dalee.style.display = 'none'
        buttonLink.innerHTML = 'Далее'
    }
})