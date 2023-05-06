const mainModalWrapper = document.querySelector('.main__modal-wrapper')
const closeBtn = document.querySelector('#closeModal');
const showBtn = document.querySelector('#showModal')

closeBtn.addEventListener('click', closeFunction =()=> {
    mainModalWrapper.classList.add('is-hidden-modal');
});

showBtn.addEventListener('click', openFunction = () => {
    mainModalWrapper.classList.remove('is-hidden-modal');
})


// Add a "checked" symbol when clicking on a list item
const listOne = document.querySelector('.modal__list-One');
const listTwo = document.querySelector('.modal__list-Two');
const listThree = document.querySelector('.modal__list-Three');
const listFour = document.querySelector('.modal__list-Four');
const listFive = document.querySelector('.modal__list-Five');
const listSix = document.querySelector('.modal__list-Six');

listOne.addEventListener('click', checkElement = (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);
listTwo.addEventListener('click', checkElement = (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);
listThree.addEventListener('click', checkElement = (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);
listFour.addEventListener('click', checkElement = (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);
listFive.addEventListener('click', checkElement = (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);
listSix.addEventListener('click', checkElement = (ev) => {if (ev.target.tagName === 'LI') {ev.target.classList.toggle('checked')}}, false);
