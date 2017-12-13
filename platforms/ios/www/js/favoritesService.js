app.service('favoritesService', function() {
	console.log("Favorite Services");
	var favoriteList = [];
	var favoriteRoutesList=[];
  var sitesList=[];

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

  var addSitesList=function(newObj){
    sitesList.push(newObj);
  }

  var getSitesList=function(newObj)
  {
    return sitesList;
  }

  return {
    addFavorites: addFavorites,
    getFavorites: getFavorites,
    addRoutesList: addRoutesList,
    getRoutesList: getRoutesList,
    addSitesList: addSitesList,
    getSitesList:getSitesList
  };


})