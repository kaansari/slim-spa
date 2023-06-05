import lazyload from 'js/lazyload';
import waitForDom from 'js/wait-for-dom';

waitForDom(() => {
  lazyload();
});

function initMap() {
  var mapOptions = {
    center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
    zoom: YOUR_ZOOM_LEVEL
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}