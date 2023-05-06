import simpleLightbox from "simplelightbox";
import { countdown } from "./features/timer";
import { checkWeatherOne, checkWeatherTwo, checkWeatherThree } from "./features/weather"
import { scrollFunction, scrollFunctionMenu, scrollFunctionMap } from "./features/scrollUp";
import { closeFunction, openFunction } from "./features/modal";
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


