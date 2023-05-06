const apiKey = "?key=62d7f1dc6fcb4c748e2115014231104";
const apiUrl = "https://api.weatherapi.com/v1/forecast.json";

export async function checkWeatherOne(city){
    try {
    const response = await fetch(apiUrl+`${apiKey}`+'&q='+ city +'&aqi=yes&days=2');
    const data = await response.json();
    const siteIco = document.querySelector('.weatherOne__ico').src = data.current.condition.icon;
    const siteCity = document.querySelector('.weatherOne__city').innerHTML = city;
    const siteTemp = document.querySelector('.weatherOne__temperature').innerHTML = Math.round(data.current.temp_c);
    } catch (error) {
      console.error(error);
    }}

export async function checkWeatherTwo(city){
    try {
    const response = await fetch(apiUrl+`${apiKey}`+'&q='+ city +'&aqi=yes&days=2');
    const data = await response.json();
    const siteIco = document.querySelector('.weatherTwo__ico').src = data.current.condition.icon;
    const siteCity = document.querySelector('.weatherTwo__city').innerHTML = city;
    const siteTemp = document.querySelector('.weatherTwo__temperature').innerHTML = Math.round(data.current.temp_c);
}   catch (error) {
    console.error(error);
    }}

export async function checkWeatherThree(city){
    try {
    const response = await fetch(apiUrl+`${apiKey}`+'&q='+ city +'&aqi=yes&days=2');
    const data = await response.json();
    const siteIco = document.querySelector('.weatherThree__ico').src = data.current.condition.icon;
    const siteCity = document.querySelector('.weatherThree__city').innerHTML = city;
    const siteTemp = document.querySelector('.weatherThree__temperature').innerHTML = Math.round(data.current.temp_c);
}   catch (error) {
    console.error(error);
}}
            