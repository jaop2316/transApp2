app.service('favoritesService', function($localstorage) {
	console.log("Favorite Services");
	var favoriteList = [];
	var favoriteRoutesList=[];
  var sitesList=[];

	var addFavorites = function(newObj) {
      var fav = $localstorage.getObject('fav');
      console.log(fav.length);

     if(!fav){
      fav.push(newObj);
      console.log(fav);
     }else{
      favoriteList.push(newObj);
      $localstorage.setObject('fav', favoriteList);
     }
      
 
      //fav.push(newObj);
      //console.log(fav);
  };

  	var getFavorites = function(){
			// TODO :ADD LOCAL STORAGE FOR favoriteItems
			//var fav = $localstorage.getObject('fav');
      //return fav;
			return $localstorage.getObject('fav');
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
