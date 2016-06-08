'use strict';

let planetFitnessLocations = require('../data/planetFitnessLocations.js');
let youFitLocations = require('../data/youFitLocations.js');
let snapFitnessLocations = require('../data/snapFitnessLocations.js');
let lifeTimeFitnessLocations = require('../data/lifeTimeFitnessLocations.js');
let crunchLocations = require('../data/crunchLocations.js');
let blinkFitnessLocations = require('../data/blinkFitnessLocations.js');
let anytimeFitnessLocations = require('../data/anytimeFitness.js');
let allLocations = require('../data/all.js');
// let retroFitnessLocations = require('../data/retroFitnessLocations.js');

let locations = allLocations;

let map = new google.maps.Map(document.getElementById('map'), {
  //zoom: 7, // Overview map
  zoom: 8, // hot spot was 9
  center: new google.maps.LatLng(38.2067849,-95.6025334),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

let infowindow = new google.maps.InfoWindow();

let marker, i;

for (i = 0; i < locations.length; i++) {
  console.log(locations);
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map,
    icon: locations[i][3]
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}

map.set('styles', [
  {
    "featureType": "road",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.neighborhood",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.land_parcel",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
  }
]);

module.exports = true;
