/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

  /* position Amsterdam */
  var latlng = new google.maps.LatLng(13.0476346, 80.1833265);

  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 8
  };

  var marker = new google.maps.Marker({
    position: latlng,
    url: '/',
    animation: google.maps.Animation.DROP
  });

  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  marker.setMap(map);

};



   var im= new Array()//set your pictures here as an array
	                im[0] = './images/1.JPG';
	                im[1] = './images/2.JPG';
	                im[2] = './images/3.JPG';
	                im[3] = './images/4.JPG';
	                im[4] = './images/5.JPG';
	                im[5] = './images/6.JPG';
	                var time = 2000; // set delay in miliseconds
	                var q=1;
	                function slideI(){
	                document.getElementById('ima').setAttribute('src',im[q]);
	                q++;
	                if(q==im.length){q=0}
	                setTimeout('slideI()',time);
	                }
	                onload=function(){setTimeout('slideI()',time)}