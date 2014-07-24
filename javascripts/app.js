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
  this.route("curriculum", {path: "/curriculum"});
  this.route("gallery", {path: "/gallery"});
  this.route("programs", {path: "/programs"});

});


App.NewsView = Ember.View.extend({

	  didInsertElement: function() {
		  $('.ticker').ticker();

		  $.fn.ticker.defaults = {
		    random:        false, // Whether to display ticker items in a random order
		    itemSpeed:     3000,  // The pause on each ticker item before being replaced
		    cursorSpeed:   50,    // Speed at which the characters are typed
		    pauseOnHover:  true,  // Whether to pause when the mouse hovers over the ticker
		    finishOnHover: true,  // Whether or not to complete the ticker item instantly when moused over
		    cursorOne:     '_',   // The symbol for the first part of the cursor
		    cursorTwo:     '-',   // The symbol for the second part of the cursor
		    fade:          true,  // Whether to fade between ticker items or not
		    fadeInSpeed:   600,   // Speed of the fade-in animation
		    fadeOutSpeed:  300    // Speed of the fade-out animation
		};
	}
});


App.MapView = Ember.ContainerView.extend({
  id: 'map-canvas',
  tagName: 'div',

  attributeBindings: ['style'],
  style:"height: 300px; ",

  map:null,

  didInsertElement: function() {
	var latlng = new google.maps.LatLng(13.0476346, 80.1833265);
    var mapOptions = {
      center: latlng,
      zoom: 13,
      scrollWheel: false
    };

    var marker = new google.maps.Marker({
	    position: latlng,
	    url: '/',
	    animation: google.maps.Animation.DROP
  });

    var map = new google.maps.Map(this.$().get(0),mapOptions);
    //this.set("map",map);
    marker.setMap(map);
  }
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
