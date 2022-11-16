const noteC = document.querySelector('.notaDo')
const noteD = document.querySelector('.notaRe')
const noteE = document.querySelector('.notaMi')
const noteF = document.querySelector('.notaFa')
const noteG = document.querySelector('.notaSol')
const noteA = document.querySelector('.notaLa')
const noteB = document.querySelector('.notaSi')
const notaDoSustenido = document.querySelector('.notaDoSustenido')
const notaReSustenido = document.querySelector('.notaReSustenido')
const notaFaSustenido = document.querySelector('.notaFaSustenido')
const notaSolSustenido = document.querySelector('.notaSolSustenido')
const notaLaSustenido = document.querySelector('.notaLaSustenido')
const buttonOpenDialog = document.getElementById('moreInfo')
const buttonCloseDialog = document.getElementById('close')
const modal = document.querySelector('dialog')
const nomeUser = document.getElementById('nameUser')
const alterarNomeUsuario = document.getElementById('changeName')

const verificarNomeLocalStorage = () => {
    let getNomeUsuario = localStorage.getItem('nomeUsuario')
    const naoTemNomeSalvo = getNomeUsuario === 'null' || getNomeUsuario === null
    
    if(naoTemNomeSalvo){
        const setNomeUsuario = prompt('Escreva seu nome:')
        localStorage.setItem('nomeUsuario', setNomeUsuario)
    }

    nomeUser.textContent = `Seja bem-vindo(a) ${getNomeUsuario}.`
}

alterarNomeUsuario.onclick = () => {
    localStorage.setItem('nomeUsuario', null)
    verificarNomeLocalStorage()
    verificarNomeLocalStorage()
}

verificarNomeLocalStorage()

const nota = new Audio;

noteC.onclick = () => {
    nota.src = 'assets/notes/C.mp3'
    nota.play()
    verificarNotaTocada(noteC)
}

notaDoSustenido.onclick = () => {
    nota.src = 'assets/notes/Csharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(notaDoSustenido)
}

noteD.onclick = () => {
    nota.src = 'assets/notes/D.mp3'
    nota.play()
    verificarNotaTocada(noteD)
}

notaReSustenido.onclick = () => {
    nota.src = 'assets/notes/Dsharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(notaReSustenido)
}

noteE.onclick = () => {
    nota.src = 'assets/notes/E.mp3'
    nota.play()
    verificarNotaTocada(noteE)
}

noteF.onclick = () => {
    nota.src = 'assets/notes/F.mp3'
    nota.play()
    verificarNotaTocada(noteF)
}

notaFaSustenido.onclick = () => {
    nota.src = 'assets/notes/Fsharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(notaFaSustenido)
}

noteG.onclick = () => {
    nota.src = 'assets/notes/G.mp3'
    nota.play()
    verificarNotaTocada(noteG)
}

notaSolSustenido.onclick = () => {
    nota.src = 'assets/notes/Gsharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(notaSolSustenido)
}

noteA.onclick = () => {
    nota.src = 'assets/notes/A.mp3'
    nota.play()
    verificarNotaTocada(noteA)

}

notaLaSustenido.onclick = () => {
    nota.src = 'assets/notes/Asharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(notaLaSustenido)
}

noteB.onclick = () => {
    nota.src = 'assets/notes/B.mp3'
    nota.play()
    verificarNotaTocada(noteB)
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
        noteC.onclick()

    if (teclaPressionada === 'w')
        notaDoSustenido.onclick()

    if (teclaPressionada === 's')
        noteD.onclick()

    if (teclaPressionada === 'e')
        notaReSustenido.onclick()

    if (teclaPressionada === 'd')
        noteE.onclick()

    if (teclaPressionada === 'f')
        noteF.onclick()

    if (teclaPressionada === 'y')
        notaFaSustenido.onclick()

    if (teclaPressionada === 'g')
        noteG.onclick()

    if (teclaPressionada === 'u')
        notaSolSustenido.onclick()

    if (teclaPressionada === 'h')
        noteA.onclick()

    if (teclaPressionada === 'i')
        notaLaSustenido.onclick()

    if (teclaPressionada === 'j')
        noteB.onclick()
}

buttonOpenDialog.onclick = function(){
    modal.showModal()
}

buttonCloseDialog.onclick = () => {
    modal.close()
}