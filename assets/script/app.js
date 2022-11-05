const notaDo = document.querySelector('.notaDo')
const notaRe = document.querySelector('.notaRe')
const notaMi = document.querySelector('.notaMi')
const notaFa = document.querySelector('.notaFa')
const notaSol = document.querySelector('.notaSol')
const notaLa = document.querySelector('.notaLa')
const notaSi = document.querySelector('.notaSi')

const nota = new Audio;

notaDo.onclick = () => {
    nota.src = 'assets/notes/C.mp3'
    nota.play()
}

notaRe.onclick = () => {
    nota.src = 'assets/notes/D.mp3'
    nota.play()
}

notaMi.onclick = () => {
    nota.src = 'assets/notes/E.mp3'
    nota.play()
}

notaFa.onclick = () => {
    nota.src = 'assets/notes/F.mp3'
    nota.play()
}

notaSol.onclick = () => {
    nota.src = 'assets/notes/G.mp3'
    nota.play()
}

notaLa.onclick = () => {
    nota.src = 'assets/notes/A.mp3'
    nota.play()
}

notaSi.onclick = () => {
    nota.src = 'assets/notes/B.mp3'
    nota.play()
}