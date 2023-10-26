import lazyload from 'js/lazyload';
import waitForDom from 'js/wait-for-dom';
import showSlides from 'js/slideshow';

waitForDom(() => {
  lazyload();
});
