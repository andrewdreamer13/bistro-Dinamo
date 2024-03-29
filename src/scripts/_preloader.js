const mask = document.querySelector('.mask');
const titleSpan = document.querySelector('.hero__title span');
const title = document.querySelector('.hero__title');

window.addEventListener('load',function(){

  mask.classList.add('hide');
  setTimeout(function(){
    mask.remove();
  },600);

 

 setTimeout(() => {
  titleSpan.style.color = '#b82121' ;
  title.style.color = '#fff';
 }, 600);

});