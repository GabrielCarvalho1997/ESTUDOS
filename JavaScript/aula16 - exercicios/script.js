let num = window.document.getElementById('num')
let lista = window.document.getElementById('lista')
let res = window.document.getElementById('res')
let valores = []

function adicionar(){
    if(num.value < 1 || num.value > 100 || num.value.length == 0 ) {
        window.alert('Digite um número válido.')
    } else {
        var n = Number(num.value)
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        lista.appendChild(item)
        valores.push(n)
    }
    num.value = ''
    num.focus()
}

console.log(valores)

function finalizar() {
    if(valores.length == 0) {
        window.alert('Por favor, adicionar algum número.')
    } else {
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / valores.length
        res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>
        <p>O maior valor informado foi ${maior}.</p>
        <p>O menor valor informado foi ${menor}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média de todos valores é ${media}.</p>`
    }

}

function limpar() {
    lista.innerHTML = ''
    res.innerHTML = ''
}