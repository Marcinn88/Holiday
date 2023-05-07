// export const mainModalWrapper = document.querySelector('.main__modal-wrapper')
// export const closeBtn = document.querySelector('#closeModal');
// export const showBtn = document.querySelector('#showModal')

// closeBtn.addEventListener('click', closeFunction =()=> {
//     mainModalWrapper.classList.add('is-hidden-modal');
// });



// showBtn.addEventListener('click', openFunction = () => {
//     mainModalWrapper.classList.remove('is-hidden-modal');
// })


// Add a "checked" symbol when clicking on a list item
// const listOne = document.querySelector('.modal__list-One');
// const listTwo = document.querySelector('.modal__list-Two');
// const listThree = document.querySelector('.modal__list-Three');
// const listFour = document.querySelector('.modal__list-Four');
// const listFive = document.querySelector('.modal__list-Five');
// const listSix = document.querySelector('.modal__list-Six');

// listOne.addEventListener('click', checkElement = (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);
// listTwo.addEventListener('click', checkElement = (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);
// listThree.addEventListener('click', checkElement = (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);
// listFour.addEventListener('click', checkElement = (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);
// listFive.addEventListener('click', checkElement = (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);
// listSix.addEventListener('click', checkElement = (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);


export const visited =
{
    DayOne:[ 
        {id:1, name:'Droga do Krakowa', visit:0}, 
        {id:2, name:'Lot samolotem', visit:0}, 
        {id:3, name:'BlueBay Resort', visit:0}, 
        {id:4, name:'Agia Pelagia', visit:0}],
    DayTwo:[ 
        {id:5, name:'SARAKINOS Car Rental', visit:0}, 
        {id:6, name:'Retimno', visit:0}, 
        {id:7, name:'Agia Triada', visit:0}, 
        {id:8, name:'Moni Arkadiou', visit:0}, 
        {id:9, name:'Preveli Beach', visit:0}, 
        {id:10, name:'Matala', visit:0}, 
        {id:11, name:'Jezioro Kornas', visit:0}],
    DayThree:[
        {id:12, name:'Chania', visit:0}, 
        {id:13, name:'Katholiko Monastery', visit:0}, 
        {id:14, name:'Gonia Odigitria Monastery', visit:0}, 
        {id:15, name:'Moni Arkadiou', visit:0}, 
        {id:16, name:'Balos Beach', visit:0}, 
        {id:17, name:'Elafonisi Beach', visit:0}],
    DayFour:[
        {id:18, name:'Heraklion', visit:0}, 
        {id:19, name:'Pałac Knossoss', visit:0}, 
        {id:20, name:'Gortyna', visit:0}, 
        {id:21, name:'Ajos Nikolaos', visit:0}, 
        {id:22, name:'Vai Beach', visit:0}],        
    DayFive:[
        {id:23, name:'SARAKINOS Car Rental', visit:0}, 
        {id:24, name:'BlueBay Resort - Atrakcje', visit:0}],
    DaySix:[
        {id:25, name:'Pożegnanie z Kretą', visit:0}, 
        {id:26, name:'Spakowanie rzeczy', visit:0}, 
        {id:27, name:'Lot samolotem', visit:0}, 
        {id:28, name:'Powrót samochodem', visit:0}]
}

//--- Pobieranie danych z LS
export const getVisitedFromStorage = () => {
    const visited = localStorage.getItem('visited');
    const parsedVisited = JSON.parse(visited);
    return parsedVisited;
};

//--- Zapis danych w LS
export const saveVisitedToStorage = value => {
    const visited = value;
    localStorage.setItem('visited', JSON.stringify(visited));
};

export const getVisited = () =>{
    if (getVisitedFromStorage()==null){
        saveVisitedToStorage(visited);
        console.log('brak informacji w LS, zapisano nową baze');
        console.log(visited);
        // return visited;
    }
    else{
        getVisitedFromStorage();
        console.log('pobrano dane z LS');
        console.log(visited);
        // return visited
    }
    console.log(visited.DayOne)
    console.log(visited.DayTwo)
    console.log(visited.DayThree)
    console.log(visited.DayFour)
    console.log(visited.DayFive)
    console.log(visited.DaySix)
    renderDayOne(visited.DayOne)
    renderDayTwo(visited.DayTwo)
    renderDayThree(visited.DayThree)
    renderDayFour(visited.DayFour)
    renderDayFive(visited.DayFive)
    renderDaySix(visited.DaySix)
}
const modalDayOne = document.querySelector('.modal__list-One');
const modalDayTwo = document.querySelector('.modal__list-Two');
const modalDayThree = document.querySelector('.modal__list-Three');
const modalDayFour = document.querySelector('.modal__list-Four');
const modalDayFive = document.querySelector('.modal__list-Five');
const modalDaySix = document.querySelector('.modal__list-Six');

export const renderDayOne = (elements) => {
    modalDayOne.innerHTML = ''
    const markup = elements
        .map(({ name, visit }) => {
            if (visit==0) {return `<li class="modal__list-element">${name}</li>`} 
            else {return `<li class="modal__list-element checked">${name}</li>`}})
        .join('');
    modalDayOne.insertAdjacentHTML('beforeend', markup);
}
export const renderDayTwo = (elements) => {
    modalDayTwo.innerHTML = ''
    const markup = elements
        .map(({ name, visit }) => {
            if (visit==0) {return `<li class="modal__list-element">${name}</li>`} 
            else {return `<li class="modal__list-element checked">${name}</li>`}})
        .join('');
    modalDayTwo.insertAdjacentHTML('beforeend', markup);
}
export const renderDayThree = (elements) => {
    modalDayThree.innerHTML = ''
    const markup = elements
        .map(({ name, visit }) => {
            if (visit==0) {return `<li class="modal__list-element">${name}</li>`} 
            else {return `<li class="modal__list-element checked">${name}</li>`}})
        .join('');
    modalDayThree.insertAdjacentHTML('beforeend', markup);
}
export const renderDayFour = (elements) => {
    modalDayFour.innerHTML = ''
    const markup = elements
        .map(({ name, visit }) => {
            if (visit==0) {return `<li class="modal__list-element">${name}</li>`} 
            else {return `<li class="modal__list-element checked">${name}</li>`}})
        .join('');
    modalDayFour.insertAdjacentHTML('beforeend', markup);
}

export const renderDayFive = (elements) => {
    modalDayFive.innerHTML = ''
    const markup = elements
        .map(({ name, visit }) => {
            if (visit==0) {return `<li class="modal__list-element">${name}</li>`} 
            else {return `<li class="modal__list-element checked">${name}</li>`}})
        .join('');
    modalDayFive.insertAdjacentHTML('beforeend', markup);
}
export const renderDaySix = (elements) => {
    modalDaySix.innerHTML = ''
    const markup = elements
        .map(({ name, visit }) => {
            if (visit==0) {return `<li class="modal__list-element">${name}</li>`} 
            else {return `<li class="modal__list-element checked">${name}</li>`}})
        .join('');
    modalDaySix.insertAdjacentHTML('beforeend', markup);
}

