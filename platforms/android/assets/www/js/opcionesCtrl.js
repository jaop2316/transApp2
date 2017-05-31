app.controller('opcionesCtrl',['$scope','$ionicModal','favoritesService',function ($scope,$ionicModal,favoritesService){
	console.log("opciones controller");

	$ionicModal.fromTemplateUrl('templates/nosotros.html', {
		id: '1',
	    scope: $scope,
	    animation: 'slide-in-up'
	    }).then(function(modal) {
	        $scope.modal = modal;
	    });

	$ionicModal.fromTemplateUrl('templates/team.html',{
		id:'2',
		scope: $scope,
	    animation: 'slide-in-up'
		 }).then(function(modal) {
	        $scope.modal2 = modal;
	    });

	$ionicModal.fromTemplateUrl('templates/favoritos.html',{
		id:'3',
		scope: $scope,
	    animation: 'slide-in-up'
		 }).then(function(modal) {
	        $scope.modal3 = modal;
	    });

	 $scope.openModal = function(index) {
	 	if (index == 1){
	 		$scope.modal.show();
	 	 }else if(index == 2){	
	 	 	$scope.modal2.show();
	 	}else{
	 		$scope.modal3.show();
	 	}
    	
  	};

   $scope.closeModal = function(index) {
   	if(index==1){
   	 $scope.modal.hide();
   	}
   	else if(index == 2){
   	 $scope.modal2.hide();
   	}else{
   	 $scope.modal3.hide();
   	}
  	};

  	$scope.paradasFavoritas=favoritesService.getFavorites();
  	console.log($scope.paradasFavoritas);
  	$scope.rutasFavoritas=favoritesService.getRoutesList();
  	console.log($scope.rutasFavoritas);
  	$scope.lugaresFavoritos=favoritesService.getSitesList();
  	console.log($scope.lugaresFavoritos);
}]);