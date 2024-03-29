
const menuItems = document.querySelectorAll('.menu__item')

const menuItemsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
        entry.target.classList.add('menu__item-active');
    } else {
      entry.target.classList.remove('menu__item-active')
    }
  })
  
},{
  threshold: 1
});

menuItems.forEach((item) => {
  menuItemsObserver.observe(item);
})
         
    
    
    


