app.service('favoritesService', function() {
	console.log("Favorite Services");
	var favoriteList = [];
	var favoriteRoutesList=[];

	var addFavorites = function(newObj) {
      favoriteList.push(newObj);
  };

  	var getFavorites = function(){
      return favoriteList;
  };

  var addRoutesList=function(newObj){
  	favoriteRoutesList.push(newObj);
  }

  var getRoutesList=function(newObj){
  	return favoriteRoutesList;
  }

  return {
    addFavorites: addFavorites,
    getFavorites: getFavorites,
    addRoutesList: addRoutesList,
    getRoutesList: getRoutesList
  };


})