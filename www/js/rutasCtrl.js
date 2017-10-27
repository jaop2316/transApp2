app.controller('rutasController',['$scope','$ionicModal','$ionicPopup','$timeout','favoritesService','$ionicScrollDelegate','RoutesService','TestFactory','$state',function($scope,
    $ionicModal,$ionicPopup,$timeout,favoritesService,$ionicScrollDelegate,RoutesService,TestFactory,$state){
  console.log('Controlador de rutas');
    $scope.currentItem = 1;
    $scope.currentItem.favorites=false;

$scope.routes=[];

$scope.listaRutas = function(){
  TestFactory.query().$promise.then(function (respuesta) {
    $scope.routes = respuesta;
    console.log($scope.routes);
},
function(err){
    console.log(err);
}

);
};

$scope.listaRutas();

    console.log($scope.paradasCercanas);
   var ruta= [

       {
        id:"1",
        nombreRuta:"Guajaló - Universidad Central",
        horarioLV: "Lunes-Viernes",
        flotaLV: 20,
        horaLV: "05:26-19:00",
        interLVP:"0:09",
        interLVN:"0:10",
        horarioS: "Sábado",
        flotaS: 14,
        horaS:"05:50-18:30",
        interSP:"0:12",
        interSN:"0:12",
        horarioDF: "Domingo-Feriado",
        flotaDF: 10,
        horaDF:"07:00-18:00",
        interDFP:"0:00",
        interDFN:"0:14",
        Observaciones: "Desde Quitus- colonial se despacha intercaladamente: 2 Unidades por el Capulí",
        url:"http://www.expedicion114.com/wp-content/themes/theexplorer/img/ruta.png",
        items: [{sentido1:" Quitus Colonial",
        sentido2:" Universidad Central"}]

        },

         {
        id:2,
        nombreRuta:"Jardín del Valle - Las Casas",
        horarioLV: "Lunes-Viernes",
        flotaLV: 16,
        horaLV: "06:00-19:00",
        interLVP:"0:09",
        interLVN:"0:10",
        horarioS: "Sábado",
        flotaS: 8,
        horaS:"06:30-18:30",
        interSP:"0:12",
        interSN:"0:12",
        horarioDF: "Domingo-Feriado",
        flotaDF: 8,
        horaDF:"07:00-18:00",
        interDFP:"0:00",
        interDFN:"0:14",
        Observaciones: "Salen de Buenos Aires los suigientes turnos: 05:38,06:01 y 06:29. Los turnos despachados desde Alma Lojana a Las 11:00, 11:30, 12:00, 16:00, 16:30, 17:00, 17:30 retornan a Buenos Aires.",
        url:"http://www.expedicion114.com/wp-content/themes/theexplorer/img/ruta.png",
        items: [{sentido1:"Jardín del Valle - Monjas",
        sentido2:"Las Casas"}]
        },


        {
        id:3,
        nombreRuta:"San José de Cutuglahua-San Roque",
        horarioLV: "Lunes-Viernes",
        flotaLV: 12,
        horaLV: "04:24-19:00",
        interLVP:"0:14",
        interLVN:"0:16",
        horarioS: "Sábado",
        flotaS: 12,
        horaS:"04:24-18:30",
        interSP:"0:16",
        interSN:"0:16",
        horarioDF: "Domingo-Feriado",
        flotaDF: 12,
        horaDF:"05:00-18:00",
        interDFP:"0:00",
        interDFN:"0:20",
        Observaciones: "Ruta que se alterna con la de Santo Domingo (Las unidades que venga de San José regresan a Santo Domingo).",
        url:"http://www.expedicion114.com/wp-content/themes/theexplorer/img/ruta.png",
        items: [{sentido1:"San José de Cutuglahua",
        sentido2:"San Roque"}]
        },

        {
        id:4,
        nombreRuta:"Santo Domingo de Cutuglahua-San Roque",
        horarioLV: "Lunes-Viernes",
        flotaLV: 12,
        horaLV: "04:30-19:07",
        interLVP:"0:14",
        interLVN:"0:16",
        horarioS: "Sábado",
        flotaS: 12,
        horaS:"04:30-18:38",
        interSP:"0:16",
        interSN:"0:16",
        horarioDF: "Domingo-Feriado",
        flotaDF: 12,
        horaDF:"05:06-18:10",
        interDFP:"0:00",
        interDFN:"0:20",
        Observaciones: "Ruta que se alterna con la de San José (Las unidades que venga de Santo Domingo regresan a San José ).",
        url:"http://www.expedicion114.com/wp-content/themes/theexplorer/img/ruta.png",
        items: [{sentido1:"Santo Domingo de Cutuglahua",
        sentido2:"San Roque"}]
        },

        {
        id:5,
        nombreRuta:"San Juan de Turubamba-Marín",
        horarioLV: "Lunes-Viernes",
        flotaLV: 12,
        horaLV: "04:44-19:00",
        interLVP:"0:14",
        interLVN:"0:14",
        horarioS: "Sábado",
        flotaS: 9,
        horaS:"05:30-18:30",
        interSP:"0:18",
        interSN:"0:18",
        horarioDF: "Domingo-Feriado",
        flotaDF: 7,
        horaDF:"06:00-18:00",
        interDFP:"0:00",
        interDFN:"0:20",
        Observaciones: "No existe informacion adicional",
        url:"http://www.expedicion114.com/wp-content/themes/theexplorer/img/ruta.png",
        items: [{sentido1:"San Juan de Turubamba",
        sentido2:"Marín desde San Juan de Turubamba"}]
        },

       {
        id:6,
        nombreRuta: "Caupicho-Marín",
        horarioLV: "Lunes-Viernes",
        flotaLV: 10,
        horaLV: "04:44-19:00",
        interLVP:"0:15",
        interLVN:"0:15",
        horarioS: "Sábado",
        flotaS: 8,
        horaS:"05:14-18:30",
        interSP:"0:18",
        interSN:"0:18",
        horarioDF: "Domingo-Feriado",
        flotaDF: 7,
        horaDF:"05:00-18:00",
        interDFP:"0:00",
        interDFN:"0:18",
        Observaciones: "No existe informacion adicional",
        url:"http://www.expedicion114.com/wp-content/themes/theexplorer/img/ruta.png",
        items: [{sentido1:"Caupicho",
        sentido2:"Marín desde Caupicho"}]
        },

       {
        id:7,
        nombreRuta:"Garrochal - Marín",
        horarioLV: "Lunes-Viernes",
        flotaLV: 12,
        horaLV: "04:29-19:06",
        interLVP:"0:12",
        interLVN:"0:14",
        horarioS: "Sábado",
        flotaS: 12,
        horaS:"04:29-18:38",
        interSP:"0:16",
        interSN:"0:16",
        horarioDF: "Domingo-Feriado",
        flotaDF: 12,
        horaDF:"05:00-18:09",
        interDFP:"0:00",
        interDFN:"0:18",
        Observaciones: "Ruta Que se alterna con la Terranova (Las unidades que vengan por el Garrochal regresa a Terranova).",
        url:"http://www.expedicion114.com/wp-content/themes/theexplorer/img/ruta.png",
        items: [{sentido1:"El Garrochal",
        sentido2:"Marín desde El Garrochal"}]
        },

       {
        id:8,
        nombreRuta:"Venecia - Marín",
        horarioLV: "Lunes-Viernes",
        flotaLV: 12,
        horaLV: "04:24-19:00",
        interLVP:"0:15",
        interLVN:"0:15",
        horarioS: "Sábado",
        flotaS: 12,
        horaS:"04:29-18:30",
        interSP:"0:18",
        interSN:"0:18",
        horarioDF: "Domingo-Feriado",
        flotaDF: 12,
        horaDF:"05:00-18:00",
        interDFP:"0:00",
        interDFN:"0:18",
        Observaciones: "Ruta Que se alterna con la del Garrochal(Unidad que venga por Terranova regresa al Garrochal).",
        url:"http://www.expedicion114.com/wp-content/themes/theexplorer/img/ruta.png",
        items: [{sentido1:"Terranova-Venecia",
        sentido2:"Marín desde Venecia-Terranova"}]
       }

       ];

    RoutesService.addRoutes(ruta);

    //$scope.contador=0;
    $scope.custom = true;
    $scope.rutas=[];
    $scope.rutas= ruta;
    console.log($scope.rutas);

    $scope.toggleGroup = function(group) {
        $scope.resetSearch();
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

    $scope.resetSearch = function(){
          console.log("reset");
          $scope.busqueda ='';
      }
  //Detalles de rutas

  $scope.getdetails = function(item,num){
    $scope.currentItem = item;
    console.log($scope.currentItem);
    //console.log($scope.currentParadas.rutas);
    var numero=num;
    if(numero==1){
        $scope.sentido1=true;
        $scope.sentido2=false;
    }else{
        $scope.sentido2=true;
        $scope.sentido1=false;
    }
    $scope.modal.show();
  };

   $ionicModal.fromTemplateUrl('templates/detallesRutas.html', {
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
    $ionicScrollDelegate.scrollTop();
  };

  $scope.addFavorites=function(item){
        if($scope.currentItem.favorites){
            var alertPopup = $ionicPopup.alert({
              title: 'Alerta',
              template: 'Esta ruta ya esta en tus favoritos'
            });
        }else{
               $scope.currentItem.favorites=true;
               var alertPopup = $ionicPopup.alert({
              title: 'Alerta',
              template: 'Añadido a tu lista de favoritos.'
            });
               favoritesService.addRoutesList(item);
        }

    };

   $scope.is_on_profile = function() {
    if ($state.current.name) return $state.current.name.match(/tabs.rutas/);
  };

  $scope.open_tabs = function() {
   if ($state.current.views['tab-paradas']) return $state.go('tab.paradas');
   if ($state.current.views['tab-rutas']) return $state.go('tab.rutas');
   if ($state.current.views['tab-lugares']) return $state.go('tab.lugares');
   if ($state.current.views['tab-mapa']) return $state.go('tab.mapa');
   if ($state.current.views['tab-mas']) return $state.go('tab.mas');

 };

}])
