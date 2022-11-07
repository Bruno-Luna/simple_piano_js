const notaDo = document.querySelector('.notaDo')
const notaRe = document.querySelector('.notaRe')
const notaMi = document.querySelector('.notaMi')
const notaFa = document.querySelector('.notaFa')
const notaSol = document.querySelector('.notaSol')
const notaLa = document.querySelector('.notaLa')
const notaSi = document.querySelector('.notaSi')
const notaDoSustenido = document.querySelector('.notaDoSustenido')



const nota = new Audio;

notaDo.onclick = () => {
    nota.src = 'assets/notes/C.mp3'
    nota.play()
    verificarNotaTocada(notaDo)
}

notaDoSustenido.onclick = () => {
    nota.src = 'assets/notes/Csharp.mp3'
    nota.play()
    verificarNotaTocada(notaDoSustenido)
}

notaRe.onclick = () => {
    nota.src = 'assets/notes/D.mp3'
    nota.play()
    verificarNotaTocada(notaRe)
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

notaSol.onclick = () => {
    nota.src = 'assets/notes/G.mp3'
    nota.play()
    verificarNotaTocada(notaSol)
}

notaLa.onclick = () => {
    nota.src = 'assets/notes/A.mp3'
    nota.play()
    verificarNotaTocada(notaLa)

}

notaSi.onclick = () => {
    nota.src = 'assets/notes/B.mp3'
    nota.play()
    verificarNotaTocada(notaSi)
}

const verificarNotaTocada = (nota) => {
    nota.classList.toggle('notaClicada')
}