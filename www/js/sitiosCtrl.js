app.controller('sitiosController', function($scope) {
  $scope.sitios = [];
  
  $scope.sitios = [
    { nombreCategoria: 'Instituciones Educativas', 
      id: 1,
     items: [{ nombreSitio:'Colegio Simón Bolívar'},
            { nombreSitio: 'Colegio Pérez Pallares'},
            { nombreSitio: 'Instituto Nacional Mejía'},
            { nombreSitio: 'Colegio Vida Nueva'},
            { nombreSitio: 'Unidad Educativa "FESVIP"'},
            { nombreSitio: 'Colegio la Providencia'},
            { nombreSitio: 'Universidad Central del Ecuador'}]},
    { nombreCategoria: 'Instituciones Financieras',
     id: 2, 
     items: [{ nombreSitio: 'Banco Pichincha'},
            { nombreSitio: 'Banco Rumiñahui'},
            { nombreSitio: 'Banco Internacional'},
            { nombreSitio: 'Punto Pago Banco del Pichincha'},
            { nombreSitio: 'Banco Rumiñahui'},
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
  
});