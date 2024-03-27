
const menuItems = document.querySelectorAll('.menu__item');

function wathMenuItems() {

  const videoObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      // if (video.currentTime === 0) {
      //   return
      // }

      if (!entry.isIntersecting || entry.intersectionRatio <= .2) {
        video.pause();
        playButton.innerHTML = `
              <svg class="svg">
               <use xlink:href="img/svg/sprite.svg#play"></use>
              </svg>
        `;
        videoBox.prepend(playButton);
        playButton.style.position = 'absolute';
        playButton.style.margin = 'auto';

      } else {
        video.play();
        playButton.innerHTML = `
              <svg class="svg">
               <use xlink:href="img/svg/sprite.svg#pause"></use>
              </svg>
        `;
        btnControlBox.prepend(playButton);
        playButton.style.position = 'static';
        playButton.style.margin = '0px';
      }
    })

  }, {
    threshold: .2
  });

  videoObserver.observe(video);

};
// wathMenuItems();