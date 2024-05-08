var setaDireta = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDireta.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top: 15%"
}

function RolarParaEsquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:nobox"
    setaDireta.style = "display:flex; margin-top: 15%"
    setaEsquerda.style = "display:none"
}

