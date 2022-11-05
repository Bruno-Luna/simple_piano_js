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
    notaDo.classList.add('notaClicada')
}

notaRe.onclick = () => {
    nota.src = 'assets/notes/D.mp3'
    nota.play()
    notaRe.classList.add('notaClicada')
}

notaMi.onclick = () => {
    nota.src = 'assets/notes/E.mp3'
    nota.play()
    notaMi.classList.add('notaClicada')
}

notaFa.onclick = () => {
    nota.src = 'assets/notes/F.mp3'
    nota.play()
    notaFa.classList.add('notaClicada')
}

notaSol.onclick = () => {
    nota.src = 'assets/notes/G.mp3'
    nota.play()
    notaSol.classList.add('notaClicada')
}

notaLa.onclick = () => {
    nota.src = 'assets/notes/A.mp3'
    nota.play()
    notaLa.classList.add('notaClicada')
}

notaSi.onclick = () => {
    nota.src = 'assets/notes/B.mp3'
    nota.play()
    notaSi.classList.add('notaClicada')
}