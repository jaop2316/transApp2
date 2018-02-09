app.controller('TabsCtrl',function($scope,$ionicPopup,$ionicSideMenuDelegate){
  $scope.toggleLeft = function() {
     $ionicSideMenuDelegate.toggleLeft();
     console.log("toggleLeft");
   };
});
