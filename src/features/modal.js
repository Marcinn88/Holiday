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
        {id:0, name:'Droga do Krakowa', visit:0}, 
        {id:1, name:'Lot samolotem', visit:0}, 
        {id:2, name:'BlueBay Resort', visit:0}, 
        {id:3, name:'Agia Pelagia', visit:0}],
    DayTwo:[ 
        {id:0, name:'SARAKINOS Car Rental', visit:0}, 
        {id:1, name:'Retimno', visit:0}, 
        {id:2, name:'Agia Triada', visit:0}, 
        {id:3, name:'Moni Arkadiou', visit:0}, 
        {id:4, name:'Preveli Beach', visit:0}, 
        {id:5, name:'Matala', visit:0}, 
        {id:6, name:'Jezioro Kornas', visit:0}],
    DayThree:[
        {id:0, name:'Chania', visit:0}, 
        {id:1, name:'Katholiko Monastery', visit:0}, 
        {id:2, name:'Gonia Odigitria Monastery', visit:0}, 
        {id:3, name:'Moni Arkadiou', visit:0}, 
        {id:4, name:'Balos Beach', visit:0}, 
        {id:5, name:'Elafonisi Beach', visit:0}],
    DayFour:[
        {id:0, name:'Heraklion', visit:0}, 
        {id:1, name:'Pałac Knossoss', visit:0}, 
        {id:2, name:'Gortyna', visit:0}, 
        {id:3, name:'Ajos Nikolaos', visit:0}, 
        {id:4, name:'Vai Beach', visit:0}],        
    DayFive:[
        {id:0, name:'SARAKINOS Car Rental', visit:0}, 
        {id:1, name:'BlueBay Resort - Atrakcje', visit:0}],
    DaySix:[
        {id:0, name:'Pożegnanie z Kretą', visit:0}, 
        {id:1, name:'Spakowanie rzeczy', visit:0}, 
        {id:2, name:'Lot samolotem', visit:0}, 
        {id:3, name:'Powrót samochodem', visit:0}]
}

//--- Pobieranie danych z LS - Visited
export const getVisitedFromStorage = () => {
    const visited = localStorage.getItem('visited');
    const parsedVisited = JSON.parse(visited);
    return parsedVisited;
};

//--- Zapis danych w LS - Visited
export const saveVisitedToStorage = value => {
    const visited = value;
    localStorage.setItem('visited', JSON.stringify(visited));
};


// --- Zapis i Pobieranie Ratio

//--- Pobieranie danych z LS
export const getRatioOneFromStorage = () => {
    const ratioOne = localStorage.getItem('ratioOne');
    const parsedRatioOne = JSON.parse(ratioOne);
    return parsedRatioOne;
};

//--- Zapis danych w LS
export const saveRatioOneToStorage = value => {
    const ratioOne = value;
    localStorage.setItem('ratioOne', JSON.stringify(ratioOne));
};

//--- Pobieranie danych z LS
export const getRatioTwoFromStorage = () => {
    const ratioTwo = localStorage.getItem('ratioTwo');
    const parsedRatioTwo = JSON.parse(ratioTwo);
    return parsedRatioTwo;
};

//--- Zapis danych w LS
export const saveRatioTwoToStorage = value => {
    const ratioTwo = value;
    localStorage.setItem('ratioTwo', JSON.stringify(ratioTwo));
};

//--- Pobieranie danych z LS
export const getRatioThreeFromStorage = () => {
    const ratioThree = localStorage.getItem('ratioThree');
    const parsedRatioThree = JSON.parse(ratioThree);
    return parsedRatioThree;
};

//--- Zapis danych w LS
export const saveRatioThreeToStorage = value => {
    const ratioThree = value;
    localStorage.setItem('ratioThree', JSON.stringify(ratioThree));
};

//--- Pobieranie danych z LS
export const getRatioFourFromStorage = () => {
    const ratioFour = localStorage.getItem('ratioFour');
    const parsedRatioFour = JSON.parse(ratioFour);
    return parsedRatioFour;
};

//--- Zapis danych w LS
export const saveRatioFourToStorage = value => {
    const ratioFour = value;
    localStorage.setItem('ratioFour', JSON.stringify(ratioFour));
};

//--- Pobieranie danych z LS
export const getRatioFiveFromStorage = () => {
    const ratioFive = localStorage.getItem('ratioFive');
    const parsedRatioFive = JSON.parse(ratioFive);
    return parsedRatioFive;
};

//--- Zapis danych w LS
export const saveRatioFiveToStorage = value => {
    const ratioFive = value;
    localStorage.setItem('ratioFive', JSON.stringify(ratioFive));
};

//--- Pobieranie danych z LS
export const getRatioSixFromStorage = () => {
    const ratioSix = localStorage.getItem('ratioSix');
    const parsedRatioSix = JSON.parse(ratioSix);
    return parsedRatioSix;
};

//--- Zapis danych w LS
export const saveRatioSixToStorage = value => {
    const ratioSix = value;
    localStorage.setItem('ratioSix', JSON.stringify(ratioSix));
};

export const getVisited = () =>{
    if (getVisitedFromStorage()==null){
        saveVisitedToStorage(visited);
        renderDayOne(visited.DayOne)
        renderDayTwo(visited.DayTwo)
        renderDayThree(visited.DayThree)
        renderDayFour(visited.DayFour)
        renderDayFive(visited.DayFive)
        renderDaySix(visited.DaySix)
    }
    else{
        const visitedLs = getVisitedFromStorage();
        renderDayOne(visitedLs.DayOne)
        renderDayTwo(visitedLs.DayTwo)
        renderDayThree(visitedLs.DayThree)
        renderDayFour(visitedLs.DayFour)
        renderDayFive(visitedLs.DayFive)
        renderDaySix(visitedLs.DaySix)
    }

}
const modalDayOne = document.querySelector('.modal__list-One');
const modalDayTwo = document.querySelector('.modal__list-Two');
const modalDayThree = document.querySelector('.modal__list-Three');
const modalDayFour = document.querySelector('.modal__list-Four');
const modalDayFive = document.querySelector('.modal__list-Five');
const modalDaySix = document.querySelector('.modal__list-Six');

const modalShieldOne = document.querySelector('.modal__shield-One');
const modalShieldTwo = document.querySelector('.modal__shield-Two');
const modalShieldThree = document.querySelector('.modal__shield-Three');
const modalShieldFour = document.querySelector('.modal__shield-Four');
const modalShieldFive = document.querySelector('.modal__shield-Five');
const modalShieldSix = document.querySelector('.modal__shield-Six');

export const renderDayOne = (elements) => {
    modalDayOne.innerHTML = ''
    const markup = elements
        .map(({id, name, visit }) => {
            if (visit==0) {return `<li data-id="${id}" class="modal__list-element">${name}</li>`} 
            else {return `<li data-id="${id}" class="modal__list-element checked">${name}</li>`}})
        .join('');
    modalDayOne.insertAdjacentHTML('beforeend', markup);
}
export const renderDayTwo = (elements) => {
    modalDayTwo.innerHTML = ''
    const markup = elements
        .map(({id, name, visit }) => {
            if (visit==0) {return `<li data-id="${id}" class="modal__list-element">${name}</li>`} 
            else {return `<li data-id="${id}" class="modal__list-element checked">${name}</li>`}})
        .join('');
    modalDayTwo.insertAdjacentHTML('beforeend', markup);
}
export const renderDayThree = (elements) => {
    modalDayThree.innerHTML = ''
    const markup = elements
        .map(({id, name, visit }) => {
            if (visit==0) {return `<li data-id="${id}" class="modal__list-element">${name}</li>`} 
            else {return `<li data-id="${id}" class="modal__list-element checked">${name}</li>`}})
        .join('');
    modalDayThree.insertAdjacentHTML('beforeend', markup);
}
export const renderDayFour = (elements) => {
    modalDayFour.innerHTML = ''
    const markup = elements
        .map(({id, name, visit }) => {
            if (visit==0) {return `<li data-id="${id}" class="modal__list-element">${name}</li>`} 
            else {return `<li data-id="${id}" class="modal__list-element checked">${name}</li>`}})
        .join('');
    modalDayFour.insertAdjacentHTML('beforeend', markup);
}

export const renderDayFive = (elements) => {
    modalDayFive.innerHTML = ''
    const markup = elements
        .map(({id, name, visit }) => {
            if (visit==0) {return `<li data-id="${id}" class="modal__list-element">${name}</li>`} 
            else {return `<li data-id="${id}" class="modal__list-element checked">${name}</li>`}})
        .join('');
    modalDayFive.insertAdjacentHTML('beforeend', markup);
}
export const renderDaySix = (elements) => {
    modalDaySix.innerHTML = ''
    const markup = elements
        .map(({id, name, visit }) => {
            if (visit==0) {return `<li data-id="${id}" class="modal__list-element">${name}</li>`} 
            else {return `<li data-id="${id}" class="modal__list-element checked">${name}</li>`}})
        .join('');
    modalDaySix.insertAdjacentHTML('beforeend', markup);
}

export const sumCheckedOne = () => {
    const data = getVisitedFromStorage()
    const dayData = data.DayOne
    let sumVisitedOne = 0
    for (let i = 0; i < dayData.length; i++) {
        let element = dayData[i].visit;
        sumVisitedOne += element;
    }
    console.log(sumVisitedOne)
    return sumVisitedOne
}

export const sumCheckedTwo = () => {
    const data = getVisitedFromStorage()
    const dayData = data.DayTwo
    let sumVisitedTwo = 0
    for (let i = 0; i < dayData.length; i++) {
        let element = dayData[i].visit;
        sumVisitedTwo += element;
    }
    console.log(sumVisitedTwo)
    return sumVisitedTwo
}

export const sumCheckedThree = () => {
    const data = getVisitedFromStorage()
    const dayData = data.DayThree
    let sumVisitedThree = 0
    for (let i = 0; i < dayData.length; i++) {
        let element = dayData[i].visit;
        sumVisitedThree += element;
    }
    console.log(sumVisitedThree)
    return sumVisitedThree
}

export const sumCheckedFour = () => {
    const data = getVisitedFromStorage()
    const dayData = data.DayFour
    let sumVisitedFour = 0
    for (let i = 0; i < dayData.length; i++) {
        let element = dayData[i].visit;
        sumVisitedFour += element;
    }
    console.log(sumVisitedFour)
    return sumVisitedFour
}

export const sumCheckedFive = () => {
    const data = getVisitedFromStorage()
    const dayData = data.DayFive
    let sumVisitedFive = 0
    for (let i = 0; i < dayData.length; i++) {
        let element = dayData[i].visit;
        sumVisitedFive += element;
    }
    console.log(sumVisitedFive)
    return sumVisitedFive
}

export const sumCheckedSix = () => {
    const data = getVisitedFromStorage()
    const dayData = data.DaySix
    let sumVisitedSix = 0
    for (let i = 0; i < dayData.length; i++) {
        let element = dayData[i].visit;
        sumVisitedSix += element;
    }
    console.log(sumVisitedSix)
    return sumVisitedSix
}

// export const dayRatioOne = () =>{
//     const data = getVisitedFromStorage()
//     const elementQuantity = data.DayOne.length
//     const elementSum = sumCheckedOne()
//     const ratioStorage = getRatioOneFromStorage()
//     if (ratioStorage==!null) {
//         const ratioOne = getRatioOneFromStorage()
//         console.log(ratioOne)
//         saveRatioOneToStorage(ratioOne)
//         return ratioOne
//         } else{
//         const ratioOne = (elementSum*100)/elementQuantity
//         console.log(ratioOne)
//         saveRatioOneToStorage(ratioOne)
//         return ratioOne}
//     }

export const dayRatioOne = () =>{
    const data = getVisitedFromStorage()
    const elementQuantity = data.DayOne.length
    const elementSum = sumCheckedOne()
    const ratioOne = (elementSum*100)/elementQuantity
    console.log(ratioOne)
    saveRatioOneToStorage(ratioOne)
    return ratioOne
    }

export const dayRatioTwo = () =>{
    const data = getVisitedFromStorage()
    const elementQuantity = data.DayTwo.length
    const elementSum = sumCheckedTwo()
    const ratioTwo = (elementSum*100)/elementQuantity
    console.log(ratioTwo)
    saveRatioTwoToStorage(ratioTwo)
    return ratioTwo
    }

export const dayRatioThree = () =>{
    const data = getVisitedFromStorage()
    const elementQuantity = data.DayThree.length
    const elementSum = sumCheckedThree()
    const ratioThree = (elementSum*100)/elementQuantity
    console.log(ratioThree)
    saveRatioThreeToStorage(ratioThree)
    return ratioThree
    }

export const dayRatioFour = () =>{
    const data = getVisitedFromStorage()
    const elementQuantity = data.DayFour.length
    const elementSum = sumCheckedFour()
    const ratioFour = (elementSum*100)/elementQuantity
    console.log(ratioFour)
    saveRatioFourToStorage(ratioFour)
    return ratioFour
    }

export const dayRatioFive = () =>{
    const data = getVisitedFromStorage()
    const elementQuantity = data.DayFive.length
    const elementSum = sumCheckedFive()
    const ratioFive = (elementSum*100)/elementQuantity
    console.log(ratioFive)
    saveRatioFiveToStorage(ratioFive)
    return ratioFive
    }
    
export const dayRatioSix = () =>{
    const data = getVisitedFromStorage()
    const elementQuantity = data.DaySix.length
    const elementSum = sumCheckedSix()
    const ratioSix = (elementSum*100)/elementQuantity
    console.log(ratioSix)
    saveRatioSixToStorage(ratioSix)
    return ratioSix
    }

export const renderShieldOne = () => {
const shieldRatio = dayRatioOne()
if (shieldRatio<25) {
    modalShieldOne.classList.add('grey-shield')
    modalShieldOne.classList.remove('grey-shield25')
    modalShieldOne.classList.remove('grey-shield75')
    modalShieldOne.classList.remove('gold-One')
    console.log('mniej niz 25')
    console.log(shieldRatio)
} else if (shieldRatio>=25 && shieldRatio <75) {
    modalShieldOne.classList.remove('grey-shield')
    modalShieldOne.classList.add('grey-shield25')
    modalShieldOne.classList.remove('grey-shield75')
    modalShieldOne.classList.remove('gold-One')
    console.log('wiecej niz 25 mniej niz 75')
    console.log(shieldRatio)
} else if (shieldRatio>=75 && shieldRatio <100) {
    modalShieldOne.classList.remove('grey-shield')
    modalShieldOne.classList.remove('grey-shield25')
    modalShieldOne.classList.add('grey-shield75')
    modalShieldOne.classList.remove('gold-One')
    console.log('wiecej niz 75 mniej niz 100')
    console.log(shieldRatio)
} else{
    modalShieldOne.classList.remove('grey-shield')
    modalShieldOne.classList.remove('grey-shield25')
    modalShieldOne.classList.remove('grey-shield75')
    modalShieldOne.classList.add('gold-One')    
    console.log('max')
    console.log(shieldRatio)
}
}

export const renderShieldTwo = () => {
    const shieldRatio = dayRatioTwo()
    if (shieldRatio<25) {
        modalShieldTwo.classList.add('grey-shield')
        modalShieldTwo.classList.remove('grey-shield25')
        modalShieldTwo.classList.remove('grey-shield75')
        modalShieldTwo.classList.remove('gold-Two')
        console.log('mniej niz 25')
        console.log(shieldRatio)
    } else if (shieldRatio>=25 && shieldRatio <75) {
        modalShieldTwo.classList.remove('grey-shield')
        modalShieldTwo.classList.add('grey-shield25')
        modalShieldTwo.classList.remove('grey-shield75')
        modalShieldTwo.classList.remove('gold-Two')
        console.log('wiecej niz 25 mniej niz 75')
        console.log(shieldRatio)
    } else if (shieldRatio>=75 && shieldRatio <100) {
        modalShieldTwo.classList.remove('grey-shield')
        modalShieldTwo.classList.remove('grey-shield25')
        modalShieldTwo.classList.add('grey-shield75')
        modalShieldTwo.classList.remove('gold-Two')
        console.log('wiecej niz 75 mniej niz 100')
        console.log(shieldRatio)
    } else{
        modalShieldTwo.classList.remove('grey-shield')
        modalShieldTwo.classList.remove('grey-shield25')
        modalShieldTwo.classList.remove('grey-shield75')
        modalShieldTwo.classList.add('gold-Two')    
        console.log('max')
        console.log(shieldRatio)
    }
    }

export const renderShieldThree = () => {
    const shieldRatio = dayRatioThree()
    if (shieldRatio<25) {
        modalShieldThree.classList.add('grey-shield')
        modalShieldThree.classList.remove('grey-shield25')
        modalShieldThree.classList.remove('grey-shield75')
        modalShieldThree.classList.remove('gold-Three')
        console.log('mniej niz 25')
        console.log(shieldRatio)
    } else if (shieldRatio>=25 && shieldRatio <75) {
        modalShieldThree.classList.remove('grey-shield')
        modalShieldThree.classList.add('grey-shield25')
        modalShieldThree.classList.remove('grey-shield75')
        modalShieldThree.classList.remove('gold-Three')
        console.log('wiecej niz 25 mniej niz 75')
        console.log(shieldRatio)
    } else if (shieldRatio>=75 && shieldRatio <100) {
        modalShieldThree.classList.remove('grey-shield')
        modalShieldThree.classList.remove('grey-shield25')
        modalShieldThree.classList.add('grey-shield75')
        modalShieldThree.classList.remove('gold-Three')
        console.log('wiecej niz 75 mniej niz 100')
        console.log(shieldRatio)
    } else{
        modalShieldThree.classList.remove('grey-shield')
        modalShieldThree.classList.remove('grey-shield25')
        modalShieldThree.classList.remove('grey-shield75')
        modalShieldThree.classList.add('gold-Three')    
        console.log('max')
        console.log(shieldRatio)
    }
    }

export const renderShieldFour = () => {
    const shieldRatio = dayRatioFour()
    if (shieldRatio<25) {
        modalShieldFour.classList.add('grey-shield')
        modalShieldFour.classList.remove('grey-shield25')
        modalShieldFour.classList.remove('grey-shield75')
        modalShieldFour.classList.remove('gold-Four')
        console.log('mniej niz 25')
        console.log(shieldRatio)
    } else if (shieldRatio>=25 && shieldRatio <75) {
        modalShieldFour.classList.remove('grey-shield')
        modalShieldFour.classList.add('grey-shield25')
        modalShieldFour.classList.remove('grey-shield75')
        modalShieldFour.classList.remove('gold-Four')
        console.log('wiecej niz 25 mniej niz 75')
        console.log(shieldRatio)
    } else if (shieldRatio>=75 && shieldRatio <100) {
        modalShieldFour.classList.remove('grey-shield')
        modalShieldFour.classList.remove('grey-shield25')
        modalShieldFour.classList.add('grey-shield75')
        modalShieldFour.classList.remove('gold-Four')
        console.log('wiecej niz 75 mniej niz 100')
        console.log(shieldRatio)
    } else{
        modalShieldFour.classList.remove('grey-shield')
        modalShieldFour.classList.remove('grey-shield25')
        modalShieldFour.classList.remove('grey-shield75')
        modalShieldFour.classList.add('gold-Four')    
        console.log('max')
        console.log(shieldRatio)
    }
    }

export const renderShieldFive = () => {
    const shieldRatio = dayRatioFive()
    if (shieldRatio<25) {
        modalShieldFive.classList.add('grey-shield')
        modalShieldFive.classList.remove('grey-shield25')
        modalShieldFive.classList.remove('grey-shield75')
        modalShieldFive.classList.remove('gold-Five')
        console.log('mniej niz 25')
        console.log(shieldRatio)
    } else if (shieldRatio>=25 && shieldRatio <75) {
        modalShieldFive.classList.remove('grey-shield')
        modalShieldFive.classList.add('grey-shield25')
        modalShieldFive.classList.remove('grey-shield75')
        modalShieldFive.classList.remove('gold-Five')
        console.log('wiecej niz 25 mniej niz 75')
        console.log(shieldRatio)
    } else if (shieldRatio>=75 && shieldRatio <100) {
        modalShieldFive.classList.remove('grey-shield')
        modalShieldFive.classList.remove('grey-shield25')
        modalShieldFive.classList.add('grey-shield75')
        modalShieldFive.classList.remove('gold-Five')
        console.log('wiecej niz 75 mniej niz 100')
        console.log(shieldRatio)
    } else{
        modalShieldFive.classList.remove('grey-shield')
        modalShieldFive.classList.remove('grey-shield25')
        modalShieldFive.classList.remove('grey-shield75')
        modalShieldFive.classList.add('gold-Five')    
        console.log('max')
        console.log(shieldRatio)
    }
    }

export const renderShieldSix = () => {
    const shieldRatio = dayRatioSix()
    if (shieldRatio<25) {
        modalShieldSix.classList.add('grey-shield')
        modalShieldSix.classList.remove('grey-shield25')
        modalShieldSix.classList.remove('grey-shield75')
        modalShieldSix.classList.remove('gold-Six')
        console.log('mniej niz 25')
        console.log(shieldRatio)
    } else if (shieldRatio>=25 && shieldRatio <75) {
        modalShieldSix.classList.remove('grey-shield')
        modalShieldSix.classList.add('grey-shield25')
        modalShieldSix.classList.remove('grey-shield75')
        modalShieldSix.classList.remove('gold-Six')
        console.log('wiecej niz 25 mniej niz 75')
        console.log(shieldRatio)
    } else if (shieldRatio>=75 && shieldRatio <100) {
        modalShieldSix.classList.remove('grey-shield')
        modalShieldSix.classList.remove('grey-shield25')
        modalShieldSix.classList.add('grey-shield75')
        modalShieldSix.classList.remove('gold-Six')
        console.log('wiecej niz 75 mniej niz 100')
        console.log(shieldRatio)
    } else{
        modalShieldSix.classList.remove('grey-shield')
        modalShieldSix.classList.remove('grey-shield25')
        modalShieldSix.classList.remove('grey-shield75')
        modalShieldSix.classList.add('gold-Six')    
        console.log('max')
        console.log(shieldRatio)
    }
    }