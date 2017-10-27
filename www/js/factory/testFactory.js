app.factory('TestFactory',['$resource',function($resource){
    var factory=$resource(
        masterUrl+'/routes.json'
        );


    return factory;
}]);
