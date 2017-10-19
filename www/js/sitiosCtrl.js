app.controller('sitiosController',['$scope','$ionicModal','$ionicPopup','favoritesService','$ionicScrollDelegate','$ionicLoading','$ionicPopover','RoutesService',function($scope,
    $ionicModal,$ionicPopup,favoritesService,$ionicScrollDelegate,$ionicLoading,$ionicPopover,RoutesService){
   //$scope.currentItem.favorites=false;
  $scope.sitios = [];
  $scope.routesList=[];
  
  $scope.sitios = [
    { nombreCategoria: 'Instituciones Educativas', 
      id: 1,
     items: [{ nombreSitio:'Colegio Simón Bolívar',
             rutas: [{ruta1:"Guajaló - Universidad Central"}] },
            {nombreSitio: 'Colegio Pérez Pallares',
             rutas: [{ruta1:"San José de Cutuglahua-San Roque",
             ruta2:"Santo Domingo de Cutuglahua-San Roque",
             ruta3:"Guajaló - Universidad Central"}] }, 
            { nombreSitio: 'Instituto Nacional Mejía',
              rutas: [{ruta1:"Guajaló - Universidad Central"}] },
            { nombreSitio: 'Colegio Vida Nueva',
             rutas: [{ruta1:"San José de Cutuglahua-San Roque",
             ruta2:"Santo Domingo de Cutuglahua-San Roque",
             ruta3:"Guajaló - Universidad Central",
             ruta4:"Garrochal - Marín",
             ruta5:"Venecia - Marín",
             ruta6:"San Juan de Turubamba-Marín"}] },  
            { nombreSitio: 'Unidad Educativa "FESVIP"',
             rutas: [{ruta1:"San José de Cutuglahua-San Roque",
             ruta2:"Santo Domingo de Cutuglahua-San Roque",
             ruta3:"Guajaló - Universidad Central"}] }, 
            { nombreSitio: 'Colegio la Providencia',
              rutas: [{ruta1:"Guajaló - Universidad Central"}] }, 
            { nombreSitio: 'Universidad Central del Ecuador',
             rutas: [{ruta1:"Guajaló - Universidad Central"}] }
        ]},
    { nombreCategoria: 'Instituciones Financieras',
     id: 2, 
     items: [{ nombreSitio: 'Banco Pichincha Plaza Grande',
              rutas: [{ruta1:"Guajaló - Universidad Central"}] },
             { nombreSitio: 'Banco Pichincha Punto Pago Guajalo',
              rutas: [{ruta1:"San José de Cutuglahua-San Roque",
              ruta2:"Santo Domingo de Cutuglahua-San Roque",
              ruta3:"Guajaló - Universidad Central",
              ruta4:"Garrochal - Marín",
              ruta5:"Venecia - Marín",
              ruta6:"San Juan de Turubamba-Marín",
              ruta7:"Caupicho-Marín"}] }, 
             { nombreSitio: 'Banco Pichincha Guamaní',
              rutas: [{ruta1:"San José de Cutuglahua-San Roque",
              ruta2:"Santo Domingo de Cutuglahua-San Roque",
              ruta3:"Guajaló - Universidad Central",
              ruta4:"Garrochal - Marín",
              ruta5:"Venecia - Marín",
              ruta6:"San Juan de Turubamba-Marín",}] },
             { nombreSitio: 'Produbanco Villaflora',
              rutas: [{ruta1:"San José de Cutuglahua-San Roque",
              ruta2:"Santo Domingo de Cutuglahua-San Roque",
              ruta3:"Guajaló - Universidad Central"}] },
             { nombreSitio: 'Banco Internacional Guajaló',
              rutas: [{ruta1:"San José de Cutuglahua-San Roque",
              ruta2:"Santo Domingo de Cutuglahua-San Roque",
              ruta3:"Guajaló - Universidad Central",
              ruta4:"Garrochal - Marín",
              ruta5:"Venecia - Marín",
              ruta6:"San Juan de Turubamba-Marín",
              ruta7:"Caupicho-Marín"}] },
             { nombreSitio: 'Servipagos Villaflora',
              rutas: [{ruta1:"San José de Cutuglahua-San Roque",
              ruta2:"Santo Domingo de Cutuglahua-San Roque",
              ruta3:"Guajaló - Universidad Central",
              ruta4:"Garrochal - Marín",
              ruta5:"Venecia - Marín",
              ruta6:"San Juan de Turubamba-Marín",
              ruta7:"Caupicho-Marín"}] },
             { nombreSitio: 'Banco Pichincha Villafora',
              rutas: [{ruta1:"San José de Cutuglahua-San Roque",
              ruta2:"Santo Domingo de Cutuglahua-San Roque",
              ruta3:"Guajaló - Universidad Central"}] },
            ]},
    { nombreCategoria: 'Centros de Salud',
     id: 3,
     items: [{ nombreSitio: 'Centro de Salud Chimbacalle',
              rutas: [{ruta1:"Garrochal - Marín",
              ruta2:"Venecia - Marín",
              ruta3:"San Juan de Turubamba-Marín",}]
             }, 
            { nombreSitio: 'Hospital del IESS' ,
             rutas: [{ruta1:"Guajaló - Universidad Central"}] },
            { nombreSitio: 'Centro de Salud N°1',
              rutas: [{ruta1:"San José de Cutuglahua-San Roque",
              ruta2:"Santo Domingo de Cutuglahua-San Roque"}] },
            { nombreSitio: 'Unidad Metropolitana de Salud Sur',
              rutas: [{ruta1:"San José de Cutuglahua-San Roque",
              ruta2:"Santo Domingo de Cutuglahua-San Roque",
              ruta3:"Guajaló - Universidad Central",
              ruta4:"Garrochal - Marín",
              ruta5:"Venecia - Marín",
              ruta6:"San Juan de Turubamba-Marín",
              ruta7:"Caupicho-Marín"}] },
            { nombreSitio: 'Hospital Metropolitano',
              rutas: [{ruta1:"Jardín del Valle - Las Casas"}] },
            { nombreSitio: 'MediRecreo',
                  rutas: [{ruta1:"San José de Cutuglahua-San Roque",
                  ruta2:"Santo Domingo de Cutuglahua-San Roque",
                  ruta3:"Guajaló - Universidad Central",
                  ruta4:"Garrochal - Marín",
                  ruta5:"Venecia - Marín",
                  ruta6:"San Juan de Turubamba-Marín",
                  ruta7:"Caupicho-Marín"}] },
              { nombreSitio: 'Hospital Eugenio Espejo',
                  rutas: [{ruta1:"Jardín del Valle - Las Casas"}] },
              { nombreSitio: 'Maternidad Isidro Ayora',
                  rutas: [{ruta1:"Jardín del Valle - Las Casas"}] },
        ]},
            
    { nombreCategoria: 'Sitios de Recreación',
     id: 4, 
     items: [{ nombreSitio: 'Centro Comercial "El Recreo"',
                  rutas: [{ruta1:"San José de Cutuglahua-San Roque",
                  ruta2:"Santo Domingo de Cutuglahua-San Roque",
                  ruta3:"Guajaló - Universidad Central",
                  ruta4:"Garrochal - Marín",
                  ruta5:"Venecia - Marín",
                  ruta6:"San Juan de Turubamba-Marín",
                  ruta7:"Caupicho-Marín"}] },
             { nombreSitio: 'Plaza de la Independencia',
                  rutas: [{ruta1:"Guajaló - Universidad Central"}] },
             { nombreSitio: 'Parque "El Ejido"',
                  rutas: [{ruta1:"Jardín del Valle - Las Casas"}] },
              { nombreSitio: 'Parque "La Alameda"',
                  rutas: [{ruta1:"Jardín del Valle - Las Casas"}] },
             { nombreSitio: 'Parque Cuscungo',
                  rutas: [{ruta1:"Jardín del Valle - Las Casas"}] },
     ]},
            
  ];
  
  $scope.routesList=RoutesService.getRoutes();
  //console.log($scope.routesList[1].nombreRuta);

  $scope.toggleGroup = function(sitio) {
    if ($scope.isGroupShown(sitio)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = sitio;
    }
  };
  $scope.isGroupShown = function(sitio) {
    return $scope.shownGroup === sitio;
  };
    
    //Detalles de rutas 

  $scope.getdetails = function(item){   
    $scope.currentItem = item;
    console.log($scope.currentItem);
    //console.log($scope.currentParadas.rutas);
    $scope.modal.show();
  };

   $ionicModal.fromTemplateUrl('templates/detallesLugares.html', {
                  id:'1',
                  scope: $scope,
                  animation: 'slide-in-up'
                }).then(function(modal) {
                  $scope.modal = modal;
                });
  $ionicModal.fromTemplateUrl('templates/detallesRutas3.html', {
                  id:'2',
                  scope: $scope,
                  animation: 'slide-in-up'
                }).then(function(modal) {
                  $scope.modal2 = modal;
                })

  $scope.openModal = function(index,currentItem) {
    if (index == 1){
      $scope.modal.show();
     }else if(index == 2){
      $scope.modal2.show();
      $ionicScrollDelegate.scrollTop();
      $scope.currentItem=currentItem;
      console.log($scope.currentItem);  
    }
  };

$scope.searchIndexinRoutes=function(ruta){
    
    for(var i=0;i<$scope.routesList.length;i++){
      //var nomRutaList=$scope.routesList[i].nombreRuta;
      console.log($scope.routesList[i].nombreRuta);
      console.log(ruta);
      if($scope.routesList[i].nombreRuta.localeCompare(ruta)==0){
        $scope.getRouteService=$scope.routesList[i];
        console.log($scope.getRouteService);
      }else{
        console.log("no coincidencia");
      }
    }
  };

   $scope.closeModal = function(index) {
    if (index == 1){
      $scope.modal.hide();
     }else if(index == 2){
       $scope.modal2.hide();
    }
  };


  $scope.addFavorites=function(item){

    if($scope.currentItem.favorites){
            var alertPopup = $ionicPopup.alert({
              title: 'Alerta',
              template: 'Este sitio esta ya en tus favoritos'
            });
        }else{
          $scope.currentItem.favorites=true;
          var alertPopup = $ionicPopup.alert({
          title: 'Alerta',
          template: 'Añadido a tu lista de favoritos.'
          });
           favoritesService.addSitesList(item);
            //$scope.openPopover();
        }     
  };

  var template = '<ion-popover-view>' + '<ion-header-bar>' +
      '<h1 class = "title">Alerta</h1>' +
      '</ion-header-bar>'+ '<ion-content>' +
      'Añadido a tu lista de favoritos.' + '</ion-content>' + '</ion-popover-view>';

   $scope.popover = $ionicPopover.fromTemplate(template, {
      scope: $scope
   });

   $scope.openPopover = function($event,item) {
    if($scope.currentItem.favorites){
      
      }else{
        $scope.currentItem.favorites=true;
        favoritesService.addSitesList(item);
        $scope.popover.show($event);
        }
   };

   $scope.closePopover = function() {
      $scope.popover.hide();
   };

  
}]);
