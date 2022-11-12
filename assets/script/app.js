const notaDo = document.querySelector('.notaDo')
const notaRe = document.querySelector('.notaRe')
const notaMi = document.querySelector('.notaMi')
const notaFa = document.querySelector('.notaFa')
const notaSol = document.querySelector('.notaSol')
const notaLa = document.querySelector('.notaLa')
const notaSi = document.querySelector('.notaSi')
const notaDoSustenido = document.querySelector('.notaDoSustenido')
const notaReSustenido = document.querySelector('.notaReSustenido')
const notaFaSustenido = document.querySelector('.notaFaSustenido')
const notaSolSustenido = document.querySelector('.notaSolSustenido')
const notaLaSustenido = document.querySelector('.notaLaSustenido')
const buttonOpenDialog = document.getElementById('moreInfo')
const buttonCloseDialog = document.getElementById('close')
const modal = document.querySelector('dialog')


function myFunction() {

    const retornarNome = localStorage.getItem('nomeUsuario')

    if(retornarNome === null || retornarNome === ''){
        const nomeUsuario = prompt('Escreva seu nome:')
        localStorage.setItem('nomeUsuario', nomeUsuario)
    }

}

myFunction()


const nota = new Audio;

notaDo.onclick = () => {
    nota.src = 'assets/notes/C.mp3'
    nota.play()
    verificarNotaTocada(notaDo)
}

notaDoSustenido.onclick = () => {
    nota.src = 'assets/notes/Csharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(notaDoSustenido)
}

notaRe.onclick = () => {
    nota.src = 'assets/notes/D.mp3'
    nota.play()
    verificarNotaTocada(notaRe)
}

notaReSustenido.onclick = () => {
    nota.src = 'assets/notes/Dsharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(notaReSustenido)
}

notaMi.onclick = () => {
    nota.src = 'assets/notes/E.mp3'
    nota.play()
    verificarNotaTocada(notaMi)
}

notaFa.onclick = () => {
    nota.src = 'assets/notes/F.mp3'
    nota.play()
    verificarNotaTocada(notaFa)
}

notaFaSustenido.onclick = () => {
    nota.src = 'assets/notes/Fsharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(notaFaSustenido)
}

notaSol.onclick = () => {
    nota.src = 'assets/notes/G.mp3'
    nota.play()
    verificarNotaTocada(notaSol)
}

notaSolSustenido.onclick = () => {
    nota.src = 'assets/notes/Gsharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(notaSolSustenido)
}

notaLa.onclick = () => {
    nota.src = 'assets/notes/A.mp3'
    nota.play()
    verificarNotaTocada(notaLa)

}

notaLaSustenido.onclick = () => {
    nota.src = 'assets/notes/Asharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(notaLaSustenido)
}

notaSi.onclick = () => {
    nota.src = 'assets/notes/B.mp3'
    nota.play()
    verificarNotaTocada(notaSi)
}

const verificarNotaTocada = (nota) => {
    nota.classList.toggle('notaClicada')
}

const verificarNotaTocadaSustenido = (nota) => {
    nota.classList.toggle('notaClicadaSustenido')
}

document.addEventListener('keypress', (event) => {
    verificarTeclaPressionada(event)
});

const verificarTeclaPressionada = (event) => {
    const teclaPressionada = event.key

    if (teclaPressionada === 'a')
        notaDo.onclick()

    if (teclaPressionada === 'w')
        notaDoSustenido.onclick()

    if (teclaPressionada === 's')
        notaRe.onclick()

    if (teclaPressionada === 'e')
        notaReSustenido.onclick()

    if (teclaPressionada === 'd')
        notaMi.onclick()

    if (teclaPressionada === 'f')
        notaFa.onclick()

    if (teclaPressionada === 'y')
        notaFaSustenido.onclick()

    if (teclaPressionada === 'g')
        notaSol.onclick()

    if (teclaPressionada === 'u')
        notaSolSustenido.onclick()

    if (teclaPressionada === 'h')
        notaLa.onclick()

    if (teclaPressionada === 'i')
        notaLaSustenido.onclick()

    if (teclaPressionada === 'j')
        notaSi.onclick()
}

buttonOpenDialog.onclick = function(){
    modal.showModal()
}

buttonCloseDialog.onclick = () => {
    modal.close()
}