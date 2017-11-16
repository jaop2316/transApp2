app.factory('PlacesFactory',['$resource',function($resource){
    var factory=$resource(
        masterUrl+'api/v1/places'
        );


    return factory;
}]);
