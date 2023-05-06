// let mybutton = document.getElementById('myBtn');
const mybutton = document.querySelector('.scrollUp a #myBtn');
const mybuttonMenu = document.querySelector('.scrollToMenu a #myBtnMenu');
const mybuttonMap = document.querySelector('.scrollMap a #myBtnMap');


// export const topFunction = () => {window.scrollTo({top: 0, behavior: 'smooth', })}

// mybutton.addEventListener('click', topFunction());

window.onscroll = function() {scrollFunction(), scrollFunctionMenu(), scrollFunctionMap()};


export function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
    mybutton.classList.add("myBtn-animation");
  } else {
    mybutton.style.display = "none";
  }
}

export function scrollFunctionMenu() {
  if (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
    mybuttonMenu.style.display = "block";
    mybuttonMenu.classList.add("myBtn-animation");
  } else {
    mybuttonMenu.style.display = "none";
  }
}

export function scrollFunctionMap() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    mybuttonMap.style.display = "block";
    mybuttonMap.classList.add("myBtn-animation");
  } else {
    mybuttonMap.style.display = "none";
  }
}
