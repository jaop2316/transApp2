app.service('favoritesService', function($localstorage) {
	console.log("Favorite Services");
	var favoriteList = [];
	var favoriteRoutesList=[];
  var sitesList=[];

	var addFavorites = function(newObj) {
      favoriteList.push(newObj);
			$localstorage.setObject('fav', favoriteList);
  };

  	var getFavorites = function(){
			// TODO :ADD LOCAL STORAGE FOR favoriteItems
			//var fav = $localstorage.getObject('fav');
      //return fav;
			return favoriteList;
		//console.log(fav);
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
