import simpleLightbox from "simplelightbox";
import { countdown } from "./features/timer";
import { checkWeatherOne, checkWeatherTwo, checkWeatherThree } from "./features/weather"
import { scrollFunction, scrollFunctionMenu, scrollFunctionMap } from "./features/scrollUp";
// import { checkElement } from "./features/modal";
import { initializeApp } from "firebase/app";
import { visited, getVisited } from "./features/modal";
const mainModalWrapper = document.querySelector('.main__modal-wrapper')
const closeBtn = document.querySelector('#closeModal');
const showBtn = document.querySelector('#showModal')
closeBtn.addEventListener('click', () => {mainModalWrapper.classList.add('is-hidden-modal')});
// showBtn.addEventListener('click', () => {mainModalWrapper.classList.remove('is-hidden-modal')});

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl_36kEp7ADRTekMzpH-kyjSzYqM86yUQ",
  authDomain: "holiday-1a9db.firebaseapp.com",
  projectId: "holiday-1a9db",
  storageBucket: "holiday-1a9db.appspot.com",
  messagingSenderId: "454966857701",
  appId: "1:454966857701:web:72ae735774806bc6c7290c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const cityOne = 'Agia Pelagia'
const cityTwo = 'Heraklion'
const cityThree = 'Chania'
const listOne = document.querySelector('.modal__list-One');
const listTwo = document.querySelector('.modal__list-Two');
const listThree = document.querySelector('.modal__list-Three');
const listFour = document.querySelector('.modal__list-Four');
const listFive = document.querySelector('.modal__list-Five');
const listSix = document.querySelector('.modal__list-Six');


countdown()
checkWeatherOne(cityOne)
checkWeatherTwo(cityTwo)
checkWeatherThree(cityThree)

scrollFunction()
scrollFunctionMenu()
scrollFunctionMap()

const lightboxOne = new SimpleLightbox(".galleryOne a", {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 0.9,
});

const lightboxTwo = new SimpleLightbox(".galleryTwo a", {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 0.9,
});

const lightboxThree = new SimpleLightbox(".galleryThree a", {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 0.9,
});

const lightboxFour = new SimpleLightbox(".galleryFour a", {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 0.9,
});

const lightboxFive = new SimpleLightbox(".galleryFive a", {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 0.9,
});

const lightboxSix = new SimpleLightbox(".gallerySix a", {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 0.9,
});


listOne.addEventListener('click', (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);
listTwo.addEventListener('click', (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);
listThree.addEventListener('click', (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);
listFour.addEventListener('click', (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);
listFive.addEventListener('click', (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);
listSix.addEventListener('click', (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);


showBtn.addEventListener('click', () => {
    mainModalWrapper.classList.remove('is-hidden-modal')
    getVisited(visited)
    console.log('modal sie pokazal')
});
