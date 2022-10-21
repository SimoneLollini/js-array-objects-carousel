// Dato un array di oggetti letterali con:
// url dell’immagine
// titolo
// descrizione Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1 (opzionale):
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2  (opzionale):
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3  (opzionale):
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
// STRUTTURA DATI:
// Ecco la struttura dati da usare (le immagini sono le stesse della volta scorsa)

// #region arrayImages
const slides = [
    {
        image: 'img/01.jpg',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.jpg',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.jpg',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.jpg',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.jpg',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// console.log(images);
// #endregion arrayImages


/* #region vecchioEs
let activeImage = 0;
for (let i = 0; i < images.length; i++) {
    const slideEl = images[i];
    console.log(slideEl);
    const activeSlide = ` <img class="${i === slideEl ? 'active_slide' : ''}" src="./assets/${images.image}" alt="">`
    // console.log(activeSlide);
    document.querySelector('.carousel').insertAdjacentHTML('beforeend', activeSlide);
}


//  Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1

const nextButtonEl = document.querySelector('.next');
const prevButtonEl = document.querySelector('.prev');

nextButtonEl.addEventListener('click', function () {
    // console.log('next');
    const slides = document.querySelectorAll('.carousel > img'); // getElementsByClassName
    const currentSlide = slides[activeImage]; // slides[0]
    // tolgo classe active
    currentSlide.classList.remove('active_slide')
    // incremento active image di uno
    activeImage++
    //seleziono la seconda immagine
    const nextSlide = slides[activeImage]
    console.log(nextSlide);
    // gli applico la classe active
    nextSlide.classList.add('active_slide')

})
prevButtonEl.addEventListener('click', function () {
    // console.log('prev');
    const slides = document.querySelectorAll('.carousel > img'); // getElementsByClassName
    const currentSlide = slides[activeImage]; // slides[0]
    // tolgo classe active
    currentSlide.classList.remove('active_slide')
    // incremento active image di uno
    activeImage--
    //seleziono la seconda immagine
    const nextSlide = slides[activeImage]
    console.log(nextSlide);
    // gli applico la classe active
    nextSlide.classList.add('active_slide')

})
*/
// #endregion vecchioEs

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// const h2El = document.createElement('h2')
// const pEl = document.createElement('p')
// const imgEl = document.createElement('img')
const sliderEl = document.querySelector('.slider')
const sliderTopEl = document.querySelector('.slider_top')
// sliderEl.append(h2El, pEl, imgEl)

// let activeImage = 0;
// for (let i = 0; i < images.length; i++) {
//     const slideObj = images[i];
//     // console.log(slideObj);

//     // const activeSlide = ` <img class="${i === slideEl ? 'active_slide' : ''}" src="./assets/${images.img}" alt="">`
//     // console.log(activeSlide, images.img);
// }
const nextButtonEl = document.querySelector('.next');
const prevButtonEl = document.querySelector('.prev');
let currentSlide = 0;
clickBtnIncrement(nextButtonEl)
slides.forEach((slide, i) => {
    console.log(slide);
    // console.log(slide.image);
    // console.log(i === currentSlide);
    console.log(currentSlide);
    const h2El = `<h2 class="${isCurrentSlide(i, currentSlide)}">${slide.title}</h2>`
    const pEl = `<p class="${isCurrentSlide(i, currentSlide)}">${slide.text}</p>`
    const imgEl = `<img class="${isCurrentSlide(i, currentSlide)}" src="./assets/${slide.image}">`
    // console.log(imgEl);
    sliderTopEl.insertAdjacentHTML('beforeend', h2El)
    sliderTopEl.insertAdjacentHTML('beforeend', pEl)
    sliderEl.insertAdjacentHTML('beforeend', imgEl)
});


function isCurrentSlide(i, currentSlide) {
    if (i === currentSlide) {
        return "active"
    }
    return ""
}


function clickBtnIncrement(btn) {
    btn.addEventListener('click', function () {
        console.log("hai cliccato next");
        currentSlide++
        console.log(currentSlide);
    })
}

function clickBtnDecrement(btn) {
    btn.addEventListener('click', function () {
        console.log("hai cliccato next");
        currentSlide--
        console.log(currentSlide);
    })
}



prevButtonEl.addEventListener('click', function () {
    // console.log("hai cliccato prev");
})