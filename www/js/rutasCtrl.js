app.controller('rutasController',['$scope',function($scope){
  console.log('Controlador de rutas');
    
   var ruta= [
       
       {
        id:1,
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
        items: [{sentido1:"Quitus Colonial- Universidad Central",
        sentido2:"Universidad Central-Quitus Colonial"}]    
        
        },
            
         {
        id:2,
        sentido1:"Jardín del Valle- Las Casas",
        sentido2:"Las Casas- Jardín del Valle",
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
        items: [{sentido1:"Jardín del Valle- Las Casas",
        sentido2:"Las Casas- Jardín del Valle"}]
        },
        
        
        {
        id:3,
        sentido1:"Ciudad Serrana-San José de Cutuglahua-San Roque",
        sentido2:"San Roque-San José de Cutuglahua-Ciudad Serrana",
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
        items: [{sentido1:"Ciudad Serrana-San José de Cutuglahua-San Roque",
        sentido2:"San Roque-San José de Cutuglahua-Ciudad Serrana"}]
        },
        
        {
        id:4,
        sentido1:"Santo Domingo de Cutuglahua-San Roque",
        sentido2:"San Roque-Santo Domingo de Cutuglahua",
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
        items: [{sentido1:"Santo Domingo de Cutuglahua-San Roque",
        sentido2:"San Roque-Santo Domingo de Cutuglahua"}] 
        },
        
        {
        id:5,
        sentido1:"Parque MetroSur-San Juan de Turubamba-Marín",
        sentido2:"Marín-San Juan de Turubamba-Parque MetroSur",
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
        items: [{sentido1:"Parque MetroSur-San Juan de Turubamba-Marín",
        sentido2:"Marín-San Juan de Turubamba-Parque MetroSur"}] 
        },
       
       {
        id:6,
        sentido1:"Ciudad Jardín-Caupicho-Marín",
        sentido2:"Marín-Caupicho-Ciudad Jardín",
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
        items: [{sentido1:"Ciudad Jardín-Caupicho-Marín",
        sentido2:"Marín-Caupicho-Ciudad Jardín"}] 
        },
       
       {
        id:7,
        sentido1:"Ciudad Jardín-Garrochal-Santo Tomás 1-Santo Tomás 2-Marín",
        sentido2:"Marín-Santo Tomás 2 -Santo Tomás 1-Garrochal-Ciudad Jardín",
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
        items: [{sentido1:"Ciudad Jardín-Garrochal-Santo Tomás 1-Santo Tomás 2-Marín",
        sentido2:"Marín-Santo Tomás 2 -Santo Tomás 1-Garrochal-Ciudad Jardín"}] 
        },
       
       {
        id:8,
        sentido1:"Ciudad Jardín-Terranova-Venecia-Marín",
        sentido2:"Marín-Venecia-Terranova-Ciudad Jardín",
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
        items: [{sentido1:"Ciudad Jardín-Terranova-Venecia-Marín",
        sentido2:"Marín-Venecia-Terranova-Ciudad Jardín"}] 
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
   
    
}]);