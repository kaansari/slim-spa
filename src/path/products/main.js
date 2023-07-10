import lazyload from 'js/lazyload';
import waitForDom from 'js/wait-for-dom';

waitForDom(() => {
  lazyload();
});

(function() {
    initializeLazyLoadOfImages();
    $("select").change(function() {
        selectPriceBasedOnVariant();
    })
    if (!_(productVariants).isEmpty()) {
        selectPriceBasedOnVariant();
    }
})

function initializeLazyLoadOfImages() {
    var bLazy = new Blazy();
}
