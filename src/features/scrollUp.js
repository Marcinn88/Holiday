// let mybutton = document.getElementById('myBtn');
mybutton = document.querySelector('#myBtn');

// export const topFunction = () => {window.scrollTo({top: 0, behavior: 'smooth', })}

// mybutton.addEventListener('click', topFunction());

window.onscroll = function() {scrollFunction()};

export function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

