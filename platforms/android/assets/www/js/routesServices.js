app.service('RoutesService', function() {

console.log("Routes services");
var routesList = [];

var addRoutes = function(newObj) {
      routesList=newObj;
  };

 var getRoutes = function(){
      return routesList;
  };

  return {
  	addRoutes:addRoutes,
  	getRoutes:getRoutes
  	};

	 });