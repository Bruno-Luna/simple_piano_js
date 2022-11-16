const noteC = document.querySelector('.notaDo')
const noteD = document.querySelector('.notaRe')
const noteE = document.querySelector('.notaMi')
const noteF = document.querySelector('.notaFa')
const noteG = document.querySelector('.notaSol')
const noteA = document.querySelector('.notaLa')
const noteB = document.querySelector('.notaSi')
const sharpNoteC = document.querySelector('.notaDoSustenido')
const sharpNoteD = document.querySelector('.notaReSustenido')
const sharpNoteF = document.querySelector('.notaFaSustenido')
const sharpNoteG = document.querySelector('.notaSolSustenido')
const sharpNoteA = document.querySelector('.notaLaSustenido')
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

sharpNoteC.onclick = () => {
    nota.src = 'assets/notes/Csharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(sharpNoteC)
}

noteD.onclick = () => {
    nota.src = 'assets/notes/D.mp3'
    nota.play()
    verificarNotaTocada(noteD)
}

sharpNoteD.onclick = () => {
    nota.src = 'assets/notes/Dsharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(sharpNoteD)
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

sharpNoteF.onclick = () => {
    nota.src = 'assets/notes/Fsharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(sharpNoteF)
}

noteG.onclick = () => {
    nota.src = 'assets/notes/G.mp3'
    nota.play()
    verificarNotaTocada(noteG)
}

sharpNoteG.onclick = () => {
    nota.src = 'assets/notes/Gsharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(sharpNoteG)
}

noteA.onclick = () => {
    nota.src = 'assets/notes/A.mp3'
    nota.play()
    verificarNotaTocada(noteA)

}

sharpNoteA.onclick = () => {
    nota.src = 'assets/notes/Asharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(sharpNoteA)
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
        sharpNoteC.onclick()

    if (teclaPressionada === 's')
        noteD.onclick()

    if (teclaPressionada === 'e')
        sharpNoteD.onclick()

    if (teclaPressionada === 'd')
        noteE.onclick()

    if (teclaPressionada === 'f')
        noteF.onclick()

    if (teclaPressionada === 'y')
        sharpNoteF.onclick()

    if (teclaPressionada === 'g')
        noteG.onclick()

    if (teclaPressionada === 'u')
        sharpNoteG.onclick()

    if (teclaPressionada === 'h')
        noteA.onclick()

    if (teclaPressionada === 'i')
        sharpNoteA.onclick()

    if (teclaPressionada === 'j')
        noteB.onclick()
}

buttonOpenDialog.onclick = function(){
    modal.showModal()
}

buttonCloseDialog.onclick = () => {
    modal.close()
}