

// breakpoint where swiper will be destroyed
const breakpoint = window.matchMedia( '(max-width:376px)' );

// keep track of swiper instances to destroy later
let menuSlider;

const breakpointChecker = function() {
   // if larger viewport and multi-row layout needed
   if ( breakpoint.matches === true ) {
      // clean up old instances and inline styles when available
      if ( menuSlider !== undefined ) menuSlider.destroy( true, true );
      // or/and do nothing
      return;
   // else if a small viewport and single column layout needed
   } else if ( breakpoint.matches === false ) {
      // fire small viewport version of swiper
      return enableSwiper();
   }
};

const enableSwiper = function() {
  menuSlider = new Swiper ('.menu__slider', {
    loop: true,
    slidesPerView: "auto",
    centeredSlides:true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
   });
};

breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();



// script for turning on swiper slider at pointed window width

window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
     let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
       swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  // callback function to do something when slider is working
  const someFunc = (instance) => {
    if (instance) {
      // console.log(instance)
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  // Swiper initialization

  resizableSwiper(
    '(max-width: 376px)',
    '.galary__images',
    {
      // loop:true,
      spaceBetween: 0,
      slidesPerView: 1,
      centeredSlides:true,
      speed:500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
      },
    },
     someFunc
  );
  

});


