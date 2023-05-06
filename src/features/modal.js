const mainModalWrapper = document.querySelector('.main__modal-wrapper')
const closeBtn = document.querySelector('#closeModal');
const showBtn = document.querySelector('#showModal')

closeBtn.addEventListener('click', closeFunction =()=> {
    mainModalWrapper.classList.add('is-hidden-modal');
    console.log('modal zamkniety')
});

showBtn.addEventListener('click', openFunction = () => {
    mainModalWrapper.classList.remove('is-hidden-modal');
})