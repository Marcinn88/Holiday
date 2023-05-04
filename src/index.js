import { countdown } from "./features/timer";
import { checkWeatherOne, checkWeatherTwo, checkWeatherThree } from "./features/weather"
const cityOne = 'Agia Pelagia'
const cityTwo = 'Heraklion'
const cityThree = 'Chania'
countdown()
checkWeatherOne(cityOne)
checkWeatherTwo(cityTwo)
checkWeatherThree(cityThree)