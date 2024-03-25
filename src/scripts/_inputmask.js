/* inputmask */
import {mainPage} from './_vars'; 

// const telInputs = document.querySelector('input[type="tel"]');
// const telMask = new IMask(telInputs, {
//   mask:'+{38}(000)000-00-00'
// });

const telInputs = document.querySelectorAll('input[type="tel"]');

telInputs.forEach((input) => {
  const telMask = new IMask(input, {
    mask: '+{38}(000)000-00-00'
  });
});
