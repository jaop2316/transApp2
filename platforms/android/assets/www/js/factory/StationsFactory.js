app.factory('StationsFactory',['$resource',function($resource){
    var factory=$resource(
        masterUrl+'api/v1/stations'
        );


    return factory;
}]);
