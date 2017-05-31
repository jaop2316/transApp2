app.controller('sitiosController',['$scope','$ionicModal',function($scope,
    $ionicModal){
  $scope.sitios = [];
  
  $scope.sitios = [
    { nombreCategoria: 'Instituciones Educativas', 
      id: 1,
     items: [{ nombreSitio:'Colegio Simón Bolívar',
             rutas: [{ruta1:"Guajaló- Universidad Central"}] },
            {nombreSitio: 'Colegio Pérez Pallares',
             rutas: [{ruta1:"San José de Cutuglahua-San Roque",
             ruta2:"Santo Domingo de Cutuglahua-San Roque"}] },
            { nombreSitio: 'Instituto Nacional Mejía'},
            { nombreSitio: 'Colegio Vida Nueva'},
            { nombreSitio: 'Unidad Educativa "FESVIP"'},
            { nombreSitio: 'Colegio la Providencia'},
            { nombreSitio: 'Universidad Central del Ecuador'}]},
    { nombreCategoria: 'Instituciones Financieras',
     id: 2, 
     items: [{ nombreSitio: 'Banco Pichincha Plaza Grande '},
             { nombreSitio: 'Banco Pichincha Punto Pago Guajalo'},
             { nombreSitio: 'Banco Pichincha Guamaní'},
             { nombreSitio: 'Produbanco Villaflora'},
             { nombreSitio: 'Banco Internacional Guajaló'},
             { nombreSitio: 'Servipagos Villaflora'},
             { nombreSitio: 'Banco Pichincha Villafora'}
            ]},
    { nombreCategoria: 'Centros de Salud',
     id: 3,
     items: [{ nombreSitio: 'Centro de Salud Chimbacalle'},
            { nombreSitio: 'Hospital del IESS' },
            { nombreSitio: 'Centro de Salud N°1'},
            { nombreSitio: 'Unidad Metropolitana de Salud Sur'},]},
            
    { nombreCategoria: 'Sitios de Recreación',
     id: 4, 
     items: [{ nombreSitio: 'Centro Comercial "El Recreo"'},
             { nombreSitio: 'Plaza de la Independencia' }]},
  ];
  
  
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
                  scope: $scope,
                  animation: 'slide-in-up'
                }).then(function(modal) {
                  $scope.modal = modal;
                })

  $scope.openModal = function() {
    $scope.modal.show();
  };

   $scope.closeModal = function() {
    $scope.modal.hide();
  };

  
}]);
