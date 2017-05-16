app.controller('mapController',function($scope){

/*	var src = 'https://www.dropbox.com/s/0qn1veaz4o5akcz/Rutas-Transplaneta.kml?dl=1';

    //var latLng = new google.maps.LatLng(-0.24540368195453613,-78.51656848144529);
 
    var mapOptions = {
      center: {lat:-0.24540368195453613, lng:-78.51656848144529},
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      draggable:true
    };
 
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    loadKmlLayer(src, map);

    function loadKmlLayer(src, map) {
    	console.log(src);
    	console.log(map);
    var kmlLayer = new google.maps.KmlLayer(src, {
      suppressInfoWindows: true,
      preserveViewport: false,
      map:map
    });
 }*/

 map = L.map('map').setView([-0.24540368195453613,-78.51656848144529], 11);

	 
	     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamExOTc5IiwiYSI6ImNpazcyZHFtcjAxOGJ2ZGt0NGNhamQ1cXQifQ.Kkz4bJY_fOE6PM9YaWzJIg',
	                    {
	            attribution: 'Map data &copy; <a href="http://openo streetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	            id: 'mapbox.streets'
	        }).addTo(map);

	     var circle = L.circle([-0.24540368195453613,-78.51656848144529], {
	         color: 'red',
	         fillColor: '#f03',
	         fillOpacity: 0.5,
	         radius: 500
	     }).addTo(map);


	     /*var kmlLayer = new L.KML("lib/Rutas-Transplaneta.kml", {async: true});

	    kmlLayer.on("loaded", function(e) { 
            map.fitBounds(e.target.getBounds());
         });


                                                
         map.addLayer(kmlLayer);*/

 
   /*$scope.map = {
          defaults: {
            tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            maxZoom: 18,
            zoomControlPosition: 'bottomleft'
          },
          markers : {},
          events: {
            map: {
              enable: ['context'],
              logic: 'emit'
            }
          }
        };

        $scope.map.center  = {
          lat : -0.24540368195453613,
          lng : -78.51656848144529,
          zoom : 12
        };
*/


	});

