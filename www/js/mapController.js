app.controller('mapController',function($scope,$ionicPopup,$ionicSideMenuDelegate){

// 	var src = 'https://www.dropbox.com/s/tpphzum3bsx1m5l/firstRoute.kml?dl=1';
//
//     //var latLng = new google.maps.LatLng(-0.24540368195453613,-78.51656848144529);
// //https://www.dropbox.com/s/tpphzum3bsx1m5l/firstRoute.kml?dl=0
// //https://www.dropbox.com/s/0qn1veaz4o5akcz/Rutas-Transplaneta.kml?dl=1
//     var mapOptions = {
//       center: {lat:-0.24540368195453613, lng:-78.51656848144529},
//       zoom: 11,
//       mapTypeId: google.maps.MapTypeId.ROADMAP,
//       draggable:true
//     };
//
//     var map = new google.maps.Map(document.getElementById('map'), mapOptions);
//
//     loadKmlLayer(src, map);
//
//     function loadKmlLayer(src, map) {
//     	console.log(src);
//     	console.log(map);
//     var kmlLayer = new google.maps.KmlLayer(src, {
//       suppressInfoWindows: true,
//       preserveViewport: false,
//       map:map
//     });
//     google.maps.event.addListener(kmlLayer, 'click', function(event) {
//       var content = event.featureData.infoWindowHtml;
//       console.log(content);
//        var alertPopup = $ionicPopup.alert({
//        title: 'Información',
//        template: content
//      });
//     });
//  }

var layers = [];

layers[0] = new google.maps.KmlLayer('https://www.dropbox.com/s/3uq07wy1ss5bk2n/firstRoute.kml?dl=1', {
    preserveViewport: true
});

layers[1] = new google.maps.KmlLayer('https://www.dropbox.com/s/2awzpmw8spz4ym2/SecondRoute.kml?dl=1', {
    preserveViewport: true
});

layers[2] = new google.maps.KmlLayer('https://www.dropbox.com/s/vxniqzxtuyh1gpe/thirdRoute.kml?dl=1', {
    preserveViewport: true
});

layers[3] = new google.maps.KmlLayer('https://www.dropbox.com/s/m9tn1ytbhdha5u5/fourthRoute.kml?dl=1', {
    preserveViewport: true
});

layers[4] = new google.maps.KmlLayer('https://www.dropbox.com/s/0gldyct3gjx3nbf/fifthRoute.kml?dl=1', {
    preserveViewport: true
});

layers[5] = new google.maps.KmlLayer('https://www.dropbox.com/s/9sw3erta3zxnex3/sixroute.kml?dl=1', {
    preserveViewport: true
});

// end layers to toggle
// intialize

function initialize() {
    var mapOptions = {
        zoom: 11,
        center: {lat:-0.24540368195453613, lng:-78.51656848144529},
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    loadKml = function (opts, map) {
        var layer = new google.maps.KmlLayer();
        opts.preserveViewport = true;
        if (map) {
            opts.map = map;
        }

        google.maps.event.addListener(layer, 'defaultviewport_changed', function () {
            var map = this.getMap(),
                bounds = map.get('kmlBounds') || this.getDefaultViewport();

            bounds.union(this.getDefaultViewport());
            map.set('kmlBounds', bounds);
            map.fitBounds(bounds);
        });
        layer.setOptions(opts);
        return layer;
    };

    function toggleLayers(i) {
        if (layers[i].getMap() == null) {
            layers[i].setMap(map);
        } else {
            layers[i].setMap(null);
        }
    }
    // end toggle layers
    google.maps.event.addDomListener(document.getElementById('layer_01'), 'click', function (evt) {
        toggleLayers(0);
    });
    google.maps.event.addDomListener(document.getElementById('layer_02'), 'click', function (evt) {
        toggleLayers(1);
    });

		google.maps.event.addDomListener(document.getElementById('layer_03'), 'click', function (evt) {
        toggleLayers(2);
    });

		google.maps.event.addDomListener(document.getElementById('layer_04'), 'click', function (evt) {
        toggleLayers(3);
    });

		google.maps.event.addDomListener(document.getElementById('layer_05'), 'click', function (evt) {
        toggleLayers(4);
    });

		google.maps.event.addDomListener(document.getElementById('layer_06'), 'click', function (evt) {
        toggleLayers(5);
    });
    // toggle layers at the beginning
    toggleLayers(0);
    toggleLayers(1);
		toggleLayers(2);
		toggleLayers(3);
		toggleLayers(4);
		toggleLayers(5);




}

google.maps.event.addDomListener(window, 'load', initialize);

 $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
    console.log("toggleLeft");
  };







	});
