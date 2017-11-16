app.factory('TestFactory',['$resource',function($resource){
    var factory=$resource(
        masterUrl+'api/v1/routes'
        );


    return factory;
}]);
