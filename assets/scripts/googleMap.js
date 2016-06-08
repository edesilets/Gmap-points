'use strict';

let planetFitnessLocations = require('../data/planetFitnessLocations.js');
let locations = planetFitnessLocations;

let map = new google.maps.Map(document.getElementById('map'), {
  zoom: 7,
  center: new google.maps.LatLng(38.2067849,-95.6025334),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

let infowindow = new google.maps.InfoWindow();

let marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}
module.exports = true;
