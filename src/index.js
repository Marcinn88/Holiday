import simpleLightbox from "simplelightbox";
import { countdown } from "./features/timer";
import { checkWeatherOne, checkWeatherTwo, checkWeatherThree } from "./features/weather"
import { scrollFunction, scrollFunctionMenu, scrollFunctionMap } from "./features/scrollUp";
import { closeBtn, mainModalWrapper,showBtn, closeFunction, openFunction, checkElement } from "./features/modal";
import { initializeApp } from "firebase/app";

closeBtn.addEventListener('click', closeFunction =()=> {
    mainModalWrapper.classList.add('is-hidden-modal');
});

showBtn.addEventListener('click', openFunction = () => {
    mainModalWrapper.classList.remove('is-hidden-modal');
})

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


const visited ={
    1:{visited:1},
    2:{visited:3},
    3:{visited:0},
    4:{visited:2}
}
