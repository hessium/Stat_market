let burger  = document.querySelector('.hamburger');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');

let linksHamb = document.querySelectorAll('.menu__link');

linksHamb.forEach(function(element){
  element.addEventListener('click' , toggleMenu);

 
})

function toggleMenu(){
  burger.classList.toggle('hamburger--active');
  overlay.classList.toggle('overlay--active');
  body.classList.toggle('body--active-menu');
  blockScroll();
}


burger.addEventListener('click' , toggleMenu);
