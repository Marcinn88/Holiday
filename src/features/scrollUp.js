// let mybutton = document.getElementById('myBtn');
const mybutton = document.querySelector('.scrollUp a #myBtn');
const mybuttonMenu = document.querySelector('.scrollToMenu a #myBtnMenu');


// export const topFunction = () => {window.scrollTo({top: 0, behavior: 'smooth', })}

// mybutton.addEventListener('click', topFunction());

window.onscroll = function() {scrollFunction(), scrollFunctionMenu()};


export function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

export function scrollFunctionMenu() {
  if (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
    mybuttonMenu.style.display = "block";
  } else {
    mybuttonMenu.style.display = "none";
  }
}

