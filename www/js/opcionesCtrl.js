app.controller('opcionesCtrl',['$scope','$ionicModal','favoritesService','$ionicScrollDelegate','$localstorage','$state','$ionicSlideBoxDelegate',function ($scope,$ionicModal,favoritesService,$ionicScrollDelegate,$localstorage,$state,$ionicSlideBoxDelegate){
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

	$ionicModal.fromTemplateUrl('templates/detallesRutas2.html',{
		id:'4',
		scope: $scope,
	    animation: 'slide-in-up'
		 }).then(function(modal) {
	        $scope.modal4 = modal;
	    });

	$ionicModal.fromTemplateUrl('templates/detallesParadas2.html',{
		id:'5',
		scope: $scope,
	    animation: 'slide-in-up'
		 }).then(function(modal) {
	        $scope.modal5 = modal;
	    });

	$ionicModal.fromTemplateUrl('templates/detallesLugares2.html',{
		id:'6',
		scope: $scope,
	    animation: 'slide-in-up'
		 }).then(function(modal) {
	        $scope.modal6 = modal;
	    });


	 $scope.openModal = function(index,currentItem) {
	 	if (index == 1){
	 		$scope.modal.show();
	 	 }else if(index == 2){
	 	 	$scope.modal2.show();
	 	}else if(index == 3){
	 		$scope.modal3.show();
	 	}else if(index == 4){
	 		$scope.modal4.show();
	 		$scope.currentItem=currentItem;
	 		console.log($scope.currentItem);
	 	}else if(index==5){
	 		$scope.modal5.show();
	 		$scope.currentItem=currentItem;
	 		console.log($scope.currentItem);
	 	}else{
	 		$scope.modal6.show();
	 		$scope.currentItem=currentItem;
	 		console.log($scope.currentItem);
	 	}

  	};

   $scope.closeModal = function(index) {
   	if(index==1){
   	 $scope.modal.hide();
   	}
   	else if(index == 2){
   	 $scope.modal2.hide();
   	}else if(index == 3){
	 		$scope.modal3.hide();
	 	}else if(index == 4){
	 		$scope.modal4.hide();
	 		$ionicScrollDelegate.scrollTop();
	 	}else if(index==5){
	 		$scope.modal5.hide();
	 		$ionicScrollDelegate.scrollTop();
	 	}else{
	 		$scope.modal6.hide();
	 		$ionicScrollDelegate.scrollTop();
	 	}
	};


  	$scope.rutasFavoritas=favoritesService.getRoutesList();
  	console.log($scope.rutasFavoritas);
  	$scope.lugaresFavoritos=favoritesService.getSitesList();
  	console.log($scope.lugaresFavoritos);

  	$scope.$on('$ionicView.afterEnter', function() {
    $scope.paradasFavoritas=favoritesService.getFavorites();


    // Initial Tour option.

    $scope.toIntro = function(){
    $state.go('intro');
  };


  });



}]);
