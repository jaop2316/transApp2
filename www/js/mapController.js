app.controller('mapController',function($scope,$ionicPopup,$ionicSideMenuDelegate){

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

layers[5] = new google.maps.KmlLayer('https://www.dropbox.com/s/acbeadsmlt8swpz/sixroute.kml?dl=1', {
    preserveViewport: true
});

layers[6] = new google.maps.KmlLayer('https://www.dropbox.com/s/s1794y0e6bzkt5f/sevenroute.kml?dl=1', {
    preserveViewport: true
});

layers[7] = new google.maps.KmlLayer('https://www.dropbox.com/s/zt5vlw6np9aetim/eightRoute.kml?dl=1', {
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

    google.maps.event.addDomListener(document.getElementById('layer_07'), 'click', function (evt) {
        toggleLayers(6);
    });

    google.maps.event.addDomListener(document.getElementById('layer_08'), 'click', function (evt) {
        toggleLayers(7);
    });




    // toggle layers at the beginning
    toggleLayers(0);
    toggleLayers(1);
		toggleLayers(2);
		toggleLayers(3);
		toggleLayers(4);
		toggleLayers(5);
    toggleLayers(6);
    toggleLayers(7);





}

//google.maps.event.addDomListener(window, 'load', initialize);

// Charge the function
initialize();

 $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
    console.log("toggleLeft");
  };







	});
