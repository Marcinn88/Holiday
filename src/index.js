import simpleLightbox from "simplelightbox";
import { countdown } from "./features/timer";
import { checkWeatherOne, checkWeatherTwo, checkWeatherThree } from "./features/weather"
import { scrollFunction, topFunction } from "./features/scrollUp";
const $ = require( "jquery" )( window );
const cityOne = 'Agia Pelagia'
const cityTwo = 'Heraklion'
const cityThree = 'Chania'

// export const attractionOneBtn = document.querySelector('#attraction-One');
// attractionOneBtn.addEventListener('click', moveTo=()=>{

//     window.scrollTo(attractionOneBtn.offsetLeft, attractionOneBtn.offsetTop);
//   });
const dayOne = document.querySelector('#dayOne')
const dayOneTarget = (dayOne.offsetTop)
const attractionOneBtn = document.querySelector('#attraction-One');

attractionOneBtn.addEventListener('click', moveTo=()=>{
console.log(dayOneTarget)
console.log(dayOne)
    window.scrollTo({top:dayOneTarget, behavior: 'smooth', });
  });

countdown()
checkWeatherOne(cityOne)
checkWeatherTwo(cityTwo)
checkWeatherThree(cityThree)
scrollFunction()

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