
let mybutton = document.getElementById("myBtn");
mybutton.addEventListener('click', topFunction=()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log('button dziala')
  });
window.onscroll = function() {scrollFunction()};

export function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

