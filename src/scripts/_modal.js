// modal windows
openModalWindows();

 function openModalWindows() {

  const modalWindow = document.querySelector('.modal-window');
  const closeButtons = document.querySelectorAll('.modal__close-btn');
  const openButtons = document.querySelectorAll('button[data-path]');

  openButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      let path = event.currentTarget.getAttribute('data-path');
      modalWindow.classList.add('modal-window--visible');
      document.body.classList.add('no-scroll');
      // document.querySelector(`[data-target="${path}"]`).classList.add('visible');


      closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
          modalWindow.classList.remove('modal-window--visible');
          // document.querySelector(`[data-target="${path}"]`).classList.remove('visible');
          document.body.classList.remove('no-scroll');
        })
      });

      window.addEventListener('click', (e) => {
        if (e.target == modalWindow) {
          modalWindow.classList.remove('modal-window--visible');
          // document.querySelector(`[data-target="${path}"]`).classList.remove('visible');
          document.body.classList.remove('no-scroll');
        }
      })
    })

  });

 
  
} // end of openModalWindows

