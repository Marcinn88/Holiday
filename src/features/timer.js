const counter = document.querySelector('.timer__value')
const counterWrapper = document.querySelector('.timer__wrapper')

export function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


export function countdown() {
    let todayDate = new Date();
    let callendarDate = new Date(2023, 05, 09);
    let dateSum = callendarDate - todayDate;
    let timeArray = convertMs(dateSum);
    if(timeArray.days>=0){
        counter.innerHTML=timeArray.days
    }
    else{
        counterWrapper.innerHTML='Następne wakacje za rok.. ;)'
    }
  }
