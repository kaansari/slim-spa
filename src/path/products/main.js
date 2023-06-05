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

function getSelectedVariant(productVariants, selectedProductOptions) {
    var sortedSelectedProductOptions = _.sortBy(selectedProductOptions)
    return _(productVariants).filter(function(productVariant) {
        var sortedOptionCombination=_.sortBy(productVariant.optionCombination)
        return _(sortedOptionCombination).isEqual(sortedSelectedProductOptions)
    }).first()
}

function selectPriceBasedOnVariant() {
    var selectedProductOptions = $.map($("select:visible"), function(n, i) {
        return $(n).val();
    });
    var selectedVariant = getSelectedVariant(productVariants, selectedProductOptions);
    if (selectedVariant) {
        $(".product-actual-price").text(selectedVariant.actualPrice);
        $(".product-compare-price").text(selectedVariant.comparePrice);
        $(".product-not-in-stock").toggle(!selectedVariant.inStock);
    } else {
        $(".product-not-in-stock").toggle(true);     
    }
}