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
const contentNameUser = document.getElementById('nameUser')
const changeNameUser = document.getElementById('changeName')
const nameUserDialog = document.querySelector('.nameUserDialog')

const nota = new Audio;

const getNameUserLocalStorage = () => {
    let getNameUser = localStorage.getItem('nameUser')
    
    if(getNameUser === 'null' || getNameUser === null || getNameUser.includes('')){
        alterNameUser()
    }
}

const alterNameUser = () => {
    localStorage.setItem('nameUser', null)
    const setNameUser = prompt('Escreva seu nome:')
    localStorage.setItem('nameUser', setNameUser)
    let getNameUser =  localStorage.getItem('nameUser')
    contentNameUser.textContent = `${getNameUser}`
    contentNameUser.style.fontWeight = 'bold'

}

 const playNoteC = () => {
    nota.src = 'assets/notes/C.mp3'
    nota.play()
    checkNotePlay(noteC)
}

const playSharpNoteC = () => {
    nota.src = 'assets/notes/Csharp.mp3'
    nota.play()
    checkNoteSharpPlay(sharpNoteC)
}

const playNoteD = () => {
    nota.src = 'assets/notes/D.mp3'
    nota.play()
    checkNotePlay(noteD)
}

const playSharpNoteD = () => {
    nota.src = 'assets/notes/Dsharp.mp3'
    nota.play()
    checkNoteSharpPlay(sharpNoteD)
}

const playNoteE = () => {
    nota.src = 'assets/notes/E.mp3'
    nota.play()
    checkNotePlay(noteE)
}

const playNoteF = () => {
    nota.src = 'assets/notes/F.mp3'
    nota.play()
    checkNotePlay(noteF)
}

const playSharpNoteF = () => {
    nota.src = 'assets/notes/Fsharp.mp3'
    nota.play()
    checkNoteSharpPlay(sharpNoteF)
}

const playNoteG = () => {
    nota.src = 'assets/notes/G.mp3'
    nota.play()
    checkNotePlay(noteG)
}

const playSharpNoteG = () => {
    nota.src = 'assets/notes/Gsharp.mp3'
    nota.play()
    checkNoteSharpPlay(sharpNoteG)
}

const playNoteA = () => {
    nota.src = 'assets/notes/A.mp3'
    nota.play()
    checkNotePlay(noteA)
}

const playSharpNoteA = () => {
    nota.src = 'assets/notes/Asharp.mp3'
    nota.play()
    checkNoteSharpPlay(sharpNoteA)
}

const playNoteB = () => {
    nota.src = 'assets/notes/B.mp3'
    nota.play()
    checkNotePlay(noteB)
}

const checkNotePlay = (nota) => {
    nota.classList.toggle('notaClicada')
}

const checkNoteSharpPlay = (nota) => {
    nota.classList.toggle('notaClicadaSustenido')
}

const checkKeyPress = (event) => {

    switch (event.key) {
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

getNameUserLocalStorage()

noteC.addEventListener('click', playNoteC)
noteD.addEventListener('click', playNoteD)
noteE.addEventListener('click', playNoteE)
noteF.addEventListener('click', playNoteF)
noteG.addEventListener('click', playNoteG)
noteA.addEventListener('click', playNoteA)
noteB.addEventListener('click', playNoteB)

sharpNoteC.addEventListener('click', playSharpNoteC)
sharpNoteD.addEventListener('click', playSharpNoteD)
sharpNoteF.addEventListener('click', playSharpNoteF)
sharpNoteG.addEventListener('click', playSharpNoteG)
sharpNoteA.addEventListener('click', playSharpNoteA)

changeNameUser.addEventListener('click', alterNameUser)
buttonOpenDialog.onclick = function(){
    nameUserDialog.innerHTML = localStorage.getItem('nameUser')
    nameUserDialog.style.fontWeight = 'bolda'
    dialog.showModal()
}
buttonCloseDialog.onclick = () => {
    dialog.close()
}
document.addEventListener('keypress', (event) => {checkKeyPress(event)});