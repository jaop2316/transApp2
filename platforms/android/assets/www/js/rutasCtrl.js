app.controller('rutasController',['$scope','$ionicModal',function($scope,$ionicModal){
  console.log('Controlador de rutas');
    $scope.currentItem = 1;
   var ruta= [
       
       {
        id:"1",
        nombreRuta:"Quitus Colonial - Universidad Central",   
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
        nombreRuta:"Ciudad Serrana-San José de Cutuglahua-San Roque",
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
        nombreRuta:"Parque MetroSur-San Juan de Turubamba-Marín",
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
        Observaciones: " ",
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
        Observaciones: " ",
        url:"http://www.expedicion114.com/wp-content/themes/theexplorer/img/ruta.png",
        items: [{sentido1:"Caupicho",
        sentido2:"Marín desde Caupicho"}] 
        },
       
       {
        id:7,
        nombreRuta:"Ciudad Jardín-Garrochal-Santo Tomás 1-Santo Tomás 2-Marín",
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
        nombreRuta:"Ciudad Jardín-Terranova-Venecia-Marín",
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
    
    //$scope.contador=0;
    $scope.rutas=[];
    $scope.rutas= ruta;
    console.log($scope.rutas);

    $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
   
  //Detalles de rutas 

  $scope.getdetails = function(item){   
    $scope.currentItem = item;
    console.log($scope.currentItem);
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
  };
    
}]);