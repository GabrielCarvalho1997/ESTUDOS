var hora = new Date().getHours()
var txt = window.document.getElementById('txt')
var img = window.document.getElementById('img')

function carregar() {
    txt.innerHTML = `Agora são ${hora} horas`

    if (hora >=0 && hora < 6) {  
        img.src = 'imagens/madrugada.jpg'
        document.body.style.background = 'rgb(0, 0, 3)'
    } else if (hora < 12) {
        img.src = 'imagens/dia.jpg'
        document.body.style.background = 'rgb(137, 137, 231)'
    } else if (hora < 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = 'rgb(230, 166, 47)'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.background = 'rgb(2, 2, 31)'
    }

}


