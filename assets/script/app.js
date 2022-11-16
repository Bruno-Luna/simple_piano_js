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
const dialog = document.querySelector('dialog')
const nomeUser = document.getElementById('nameUser')
const changeNameUser = document.getElementById('changeName')

const nota = new Audio;

const verificarNomeLocalStorage = () => {
    let getNameUser = localStorage.getItem('nameUser')
    
    if(getNameUser === 'null' || getNameUser === null){
        const setNameUser = prompt('Escreva seu nome:')
        localStorage.setItem('nameUser', setNameUser)
    }

    nomeUser.textContent = `Seja bem-vindo(a) ${getNameUser}.`
}

const alterNameUser = () => {
    localStorage.setItem('nameUser', null)
    verificarNomeLocalStorage()
    verificarNomeLocalStorage()
}

 const playNoteC = () => {
    nota.src = 'assets/notes/C.mp3'
    nota.play()
    verificarNotaTocada(noteC)
}

const playSharpNoteC = () => {
    nota.src = 'assets/notes/Csharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(sharpNoteC)
}

const playNoteD = () => {
    nota.src = 'assets/notes/D.mp3'
    nota.play()
    verificarNotaTocada(noteD)
}

const playSharpNoteD = () => {
    nota.src = 'assets/notes/Dsharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(sharpNoteD)
}

const playNoteE = () => {
    nota.src = 'assets/notes/E.mp3'
    nota.play()
    verificarNotaTocada(noteE)
}

const playNoteF = () => {
    nota.src = 'assets/notes/F.mp3'
    nota.play()
    verificarNotaTocada(noteF)
}

const playSharpNoteF = () => {
    nota.src = 'assets/notes/Fsharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(sharpNoteF)
}

const playNoteG = () => {
    nota.src = 'assets/notes/G.mp3'
    nota.play()
    verificarNotaTocada(noteG)
}

const playSharpNoteG = () => {
    nota.src = 'assets/notes/Gsharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(sharpNoteG)
}

const playNoteA = () => {
    nota.src = 'assets/notes/A.mp3'
    nota.play()
    verificarNotaTocada(noteA)
}

const playSharpNoteA = () => {
    nota.src = 'assets/notes/Asharp.mp3'
    nota.play()
    verificarNotaTocadaSustenido(sharpNoteA)
}

const playNoteB = () => {
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

const verificarTeclaPressionada = (event) => {
    const teclaPressionada = event.key

    switch (teclaPressionada) {
        case 'a':
            playNoteC()
            break;
        case 'w':
            playSharpNoteC()
            break;
        case 's':
            playNoteD()
            break;
        case 'e':
            playSharpNoteD()
            break;
        case 'd':
            playNoteE()
            break;
        case 'f':
            playNoteF()
            break;
        case 'y':
            playSharpNoteF()
            break;
        case 'g':
            playNoteG()
            break;
        case 'u':
            playSharpNoteG()
            break;
        case 'h':
            playNoteA()
            break;
        case 'i':
            playSharpNoteA()
            break;
        case 'j':
            playNoteB()
            break;
        default:
    }
}

verificarNomeLocalStorage()

noteC.addEventListener('keypress', playNoteC)
noteD.addEventListener('keypress', playNoteD)
noteE.addEventListener('keypress', playNoteE)
noteF.addEventListener('keypress', playNoteF)
noteG.addEventListener('keypress', playNoteG)
noteA.addEventListener('keypress', playNoteA)
noteB.addEventListener('keypress', playNoteB)

sharpNoteC.addEventListener('click', playSharpNoteC)
sharpNoteD.addEventListener('click', playSharpNoteD)
sharpNoteF.addEventListener('click', playSharpNoteF)
sharpNoteG.addEventListener('click', playSharpNoteG)
sharpNoteA.addEventListener('click', playSharpNoteA)

changeNameUser.addEventListener('click', alterNameUser)

document.addEventListener('keypress', (event) => {
        verificarTeclaPressionada(event)
});