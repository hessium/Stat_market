let links = document.querySelectorAll('.menu__link');

links.forEach(function(element){
  element.addEventListener('click' , menuItem); 
})

function menuItem(){
  let content  = document.querySelector('.menu__sub--content');
  const $this = this.content;
   if(content.classList.contains('active')) {
    content.classList.remove('active');
   } else {
    content.classList.add('active');
   }   
}

