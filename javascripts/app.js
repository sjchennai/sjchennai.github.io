App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true,

  // Extremely detailed logging, highlighting every internal
  // step made while transitioning into a route, including
  // `beforeModel`, `model`, and `afterModel` hooks, and
  // information about redirects and aborted transitions
  LOG_TRANSITIONS_INTERNAL: true
});

App.Router.map(function() {
  this.route("index", {path: "/"});
  this.route("contactus", {path: "/contactus"});
  this.route("aboutus", {path: "/aboutus"});
  this.route("team", {path: "/team"});
  this.route("programs", {path: "/programs"});
});

/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);
function initialize() {

  /* position Amsterdam */
  var latlng = new google.maps.LatLng(13.0476346, 80.1833265);

  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 13
  };

  var marker = new google.maps.Marker({
    position: latlng,
    url: '/',
    animation: google.maps.Animation.DROP
  });

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  marker.setMap(map);

};
