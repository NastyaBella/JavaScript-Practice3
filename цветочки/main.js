const flowers = [
    ['красный цветок.jpg','цветок', 300],
    ['желтые розы.jpg', 'Желтые розы', 500],
    ['poза.jpg','poза', 1000],
    ['гладиолус.jpg','гладиолус', 1200],
    ['желтые розы.jpg', 'розы', 800],
    ['лилия.jpg','лилия',900],
    ['тюльпаны.jpg','тюльпаны',600],
]
const flex = document.getElementById('flex') 

flowers.forEach(function(flower){
    let figure = document.createElement('figure')
    console.log (flex)
    flex.appendChild(figure)
    let img = document.createElement('img')
    img.setAttribute('src',flower[0])
    img.alt = 'цветок'
    let figcaption = document.createElement('figcaption')
    let b = document.createElement('b')
    b.innerText = flower[1]
    let br = document.createElement('br')
    b.append(br)

    figcaption.append(b, flower[2], ' руб')
    figure.append(img, figcaption)
})