function verificar() {
    var ano = new Date().getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - fano.value
        var img = document.getElementById('img')
        var gen = ''
        if (sex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10){
                img.src = ('imagens/bebe-m.jpg')
            } else if (idade < 21) {
                img.src = ('imagens/jovem-m.jpg')
            } else if (idade < 50) {
                img.src = ('imagens/adulto-m.jpg')  
            } else {
                img.src = ('imagens/idoso-m.jpg')
            }
        } else {
            gen = 'Mulher'
            if (idade >=0 && idade <=10){
                img.src = ('imagens/bebe-f.jpg')
            } else if (idade < 21) {
                img.src = ('imagens/jovem-f.jpg')
            } else if (idade < 50) {
                img.src = ('imagens/adulto-f.jpg')
            } else {
                img.src = ('imagens/idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
    }
} 