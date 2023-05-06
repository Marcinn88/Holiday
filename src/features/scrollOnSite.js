const dayOne = document.querySelector('#dayOne')
const dayOneDistance = dayOne.top
const dayOneTarget = (dayOne.offsetTop)
const attractionOneBtn = document.querySelector('#attraction-One');

attractionOneBtn.addEventListener('click', moveTo=()=>{
console.log(dayOneTarget)
    window.scrollTo({top:dayOneDistance, behavior: 'smooth', });
  });