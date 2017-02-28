app.controller('paradasController',['$scope','$cordovaGeolocation',function($scope,$cordovaGeolocation){
console.log("paradas Controller");

$scope.location=false;
$scope.latitud=0;
$scope.longitud=0;
$scope.paradasCercanas=[];
$scope.paradas=[

{
	cod:'1',
	nomParada:'Liga Barrial San Roque ',
	url:"http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg",
	latitud:-0.2180695,
	longitud:-78.521121
},

{
	cod:'2',
	nomParada:'Mercado de San Roque ',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2210294,
	longitud:-78.520708
},

{
	cod:'3',
	nomParada:'San Diego ',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2272661,
	longitud:-78.5222701
},
{
	cod:'4',
	nomParada:'Dos Puentes ',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2339936,
	longitud:-78.5239095
},

{
	cod:'5',
	nomParada:'Rodrigo de Chavez ',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2437754,
	longitud:-78.5194404
},
{
	cod:'6',
	nomParada:'Villaflora',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2453297,
	longitud:-78.5194105
},

{
	cod:'7',
	nomParada:'El Recreo ',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2505556,
	longitud:-78.5214724
},
{
	cod:'8',
	nomParada:'Cuartel Eplicachima',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2658254,
	longitud:-78.5261073
},
{
	cod:'9',
	nomParada:'Ayapamba ',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2778326,
	longitud:-78.5312569
},
{
	cod:'10',
	nomParada:'CC.Mayoristas y Negocios Andinos ',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2797471,
	longitud:-78.5327129
},
{
	cod:'11',
	nomParada:'Puente de Guajalo ',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2888889,
	longitud:-78.538333
},
{
	cod:'12',
	nomParada:'Chifa Cantonés ',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3072222,
	longitud:-78.5438888
},
{
	cod:'13',
	nomParada:'Guamaní 1 ',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3156499,
	longitud:-78.5494325
},
{
	cod:'14',
	nomParada:'Tia Guamani ',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3188206,
	longitud:-78.5494679
},
{
	cod:'15',
	nomParada:'Escuela Celiano Monge',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3223622,
	longitud:-78.5498679
},
{
	cod:'16',
	nomParada:'CC.Artesanal del Sur ',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3306086,
	longitud:-78.5506482
},
{
	cod:'17',
	nomParada:'Colegio Vida Nueva ',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3380343,
	longitud:-78.5496652
},
{
	cod:'18',
	nomParada:'Cesar Arguello ',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3547764,
	longitud:-78.5492969
},
{
	cod:'19',
	nomParada:'San José 1',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.362392,
	longitud:-78.5552237
},
{
	cod:'20',
	nomParada:'San José 2',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3606163,
	longitud:-78.5612386
},
{
	cod:'21',
	nomParada:'San José 3',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3604947,
	longitud:-78.5617802
},

{
	cod:'22',
	nomParada:' San José 4',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3604947,
	longitud:-78.5617802
},
//Paradas de regreso.

{
	cod:'23',
	nomParada:' Parada 1 San José',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.360556,
	longitud:-78.562222
},

{
	cod:'23',
	nomParada:' Parada 1 San José',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.360556,
	longitud:-78.562222
},

{
	cod:'24',
	nomParada:' Parada 2 San José',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3625,
	longitud:-78.555278
},
    
{
	cod:'25',
	nomParada:' Parada 3 San José',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.358611,
	longitud:-78.568333
},
    
{
	cod:'26',
	nomParada:' Av. Maldonado',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.358889,
	longitud:-78.567222
},
    
{
	cod:'27',
	nomParada:' Av. Maldonado 2',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.365833,
	longitud:-78.550833
},

{
	cod:'28',
	nomParada:'Ecovía',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.340278,
	longitud:-78.549167
},
    
{
	cod:'29',
	nomParada:'La Barba',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.328056,
	longitud:-78.550278
},
    
{
	cod:'30',
	nomParada:'Camino al Conde',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.307778,
	longitud:-78.544167
},
    
{
	cod:'31',
	nomParada:'Puente Guajalo',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.284444,
	longitud:-78.536389
},
  
{
	cod:'32',
	nomParada:'Guajalo 2',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.280556,
	longitud:78.533333
},

{
	cod:'33',
	nomParada:'San Bartolo',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.275,
	longitud:-78.53
},
    
{
	cod:'34',
	nomParada:'C.C El Recreo',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.252222,
	longitud:-78.521389
},
    
{
	cod:'35',
	nomParada:'Restaurante Forastero',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.245278,
	longitud:-78.519167
},
    
{
	cod:'36',
	nomParada:'Parada Rodrigo de Chavez',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:0.2437754,
	longitud:-78.5194404
},
    
{
	cod:'37',
	nomParada:'Cinco de Junio 1',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.239722,
	longitud:-78.522778
},
    
{
	cod:'38',
	nomParada:'Cinco de Junio 2',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2371061,
	longitud:-78.5221314
},    
    
{
	cod:'39',
	nomParada:'Cinco de Junio 2',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2367251,
	longitud:-78.5217565
},    

{
	cod:'40',
	nomParada:'Cinco de Junio Antonio Tejada',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2314546,
	longitud:-78.5158829
},    

{
	cod:'41',
	nomParada:'Cinco de Junio Antonio Tejada',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2282791,
	longitud:-78.5144374
}, 
    
{
	cod:'42',
	nomParada:'Heroes del Cenepa',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2271362,
	longitud:-78.5149672
}, 
    
{
	cod:'43',
	nomParada:'Escuela Alejandro Cardenas',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2256224,
	longitud:-78.5157738
},     
    
{
	cod:'44',
	nomParada:'Rocafuerte',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.221944,
	longitud:-78.515833
}, 

{
	cod:'45',
	nomParada:'Rocafuerte e Imbabura',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2207301,
	longitud:-78.5172973
}, 
    
{
	cod:'46',
	nomParada:'Rocafuerte y Chimborazo',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.219961,
	longitud:-78.5183356
}, 

{
	cod:'47',
	nomParada:'Liga Barrial San Roque',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2180695,
	longitud:-78.521121
}, 
        
//SANTO DOMINGO- SAN ROQUE
    
{
	cod:'48',
	nomParada:'Santo Domingo',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.372778,
	longitud:-78.564167
},
    
{
	cod:'49',
	nomParada:'Calle 16',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.373333,
	longitud:-78.563056
},

{
	cod:'50',
	nomParada:'Calle A',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.370278,
	longitud:-78.561389
},
    
{
	cod:'51',
	nomParada:'Calle A',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.370278,
	longitud:-78.561389
},
    
    
// U.Central- Monjas
  
{
	cod:'52',
	nomParada:'Seminario Mayor',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.197559,
	longitud:-78.5006206
},
        
{
	cod:'53',
	nomParada:'Universidad Central',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.199858,
	longitud:-78.5008683
},
    
{
	cod:'54',
	nomParada:'Universidad Central 2',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.200833,
	longitud:-78.501388
},
  
{
	cod:'55',
	nomParada:'Bolivia',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2052778,
	longitud:-78.500277
}, 

{
	cod:'56',
	nomParada:'Ejido 1',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2080556,
	longitud:-78.4975
}, 
    
{
	cod:'57',
	nomParada:'Ejido 2',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2077778,
	longitud:-78.497222
}, 
    
{
	cod:'58',
	nomParada:'Ejido 3',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2085633,
	longitud:-78.495900
}, 
    
{
	cod:'59',
	nomParada:'Casa de la Cultura',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2091667,
	longitud:-78.495277
}, 
    
{
	cod:'60',
	nomParada:'Parque "El Arblito"',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2118059,
	longitud:-78.4961918
},
    
{
	cod:'61',
	nomParada:'Alameda',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2163889,
	longitud:-78.503888
},

{
	cod:'62',
	nomParada:'Marin 1',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2286111,
	longitud:-78.507222
},
    
{
	cod:'63',
	nomParada:'Marin 2',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2183333,
	longitud:-78.505833
},
    
{
	cod:'64',
	nomParada:'Marin 3',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2246290,
	longitud:-78.507131
},
    
{
	cod:'65',
	nomParada:'Marin 4',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.228611,
	longitud:-78.50722
},

{
	cod:'66',
	nomParada:'Trébol',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2325,
	longitud:-78.504444
},   

{
	cod:'67',
	nomParada:'General Rumiñahui',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.227222,
	longitud:-78.490278
},  

{
	cod:'68',
	nomParada:'General Rumiñahui 2',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud: -0.2275,
	longitud:-78.487222
},    

{
	cod:'69',
	nomParada:'Alfonso Mora Bowen',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud: -0.232222,
	longitud:-78.483056
},

{
	cod:'70',
	nomParada:'E21B',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2322222,
	longitud:-78.483055
},
    
//Marin- San Juan de Turubamba
{
	cod:'71',
	nomParada:'Pichincha y Calixto',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2245639,
	longitud:-78.5070384
},

{
	cod:'72',
	nomParada:'Marín Sur 2',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2183333,
	longitud:-78.505833
},
    
{
	cod:'73',
	nomParada:'Marín Sur 3',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2246290,
	longitud:-78.507131
},    
   
{
	cod:'73',
	nomParada:'Marín Sur 4',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.228611,
	longitud:-78.50722
}, 

{
	cod:'74',
	nomParada:'Trébol Sur',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2325,
	longitud:-78.504444
}, 

{
	cod:'75',
	nomParada:'Velasco Ibarra',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2359098,
	longitud:-78.5093443
}, 

{
	cod:'76',
	nomParada:'Napo y Guayllabamba',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2393001,
	longitud:-78.5106639
}, 
    
{
	cod:'77',
	nomParada:'Napo S7J Sangay',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2404803,
	longitud:-78.5119943
}, 
    
{
	cod:'78',
	nomParada:'Napo y Alpahuasi',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2432268,
	longitud:-78.5140328
},
    
{
	cod:'79',
	nomParada:'Calle Corazón',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.244722,
	longitud:-78.517778
}, 
    
{
	cod:'80',
	nomParada:'San Juan de T. Entrada',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3449751,
	longitud:-78.5484887
}, 
    
{
	cod:'81',
	nomParada:'S60 y E2',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3455263,
	longitud:-78.5477827
},  
    
{
	cod:'82',
	nomParada:'S60 y E3',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3475516,
	longitud:-78.5453091
},
    
{
	cod:'83',
	nomParada:'E6 y S60',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3492994,
	longitud:-78.5404751
},  

{
	cod:'84',
	nomParada:'E6 y S61',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3520259,
	longitud:-78.5395563
}, 

{
	cod:'85',
	nomParada:'E7A y S62',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.354493,
	longitud:-78.5383539
},     
  
{
	cod:'86',
	nomParada:'S62E',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3548167,
	longitud:-78.5292347
},
    
{
	cod:'87',
	nomParada:'E10',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3548167,
	longitud:-78.529234
}, 
    
//Marín - Garrochal
    
{
	cod:'88',
	nomParada:'S58',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3419681,
	longitud:-78.5486964
},
  
{
	cod:'89',
	nomParada:'S58D',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.339444,
	longitud:-78.545556
},   

{
	cod:'90',
	nomParada:'S58 Y EBA',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3380527,
	longitud:-78.5324461
}, 

{
	cod:'91',
	nomParada:'S57C y S57',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3345446,
	longitud:-78.5353803
}, 
    
//Adicional  
    
{
	cod:'92',
	nomParada:'Espe- Heroes del Cenepa',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2275,
	longitud:-78.514722
},     
    
{
	cod:'93',
	nomParada:'U.E Fernandez Salvador 1',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2438889,
	longitud:-78.519444
},    

{
	cod:'94',
	nomParada:'Gasolineria 5 de Junio',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2369444,
	longitud:-78.521944
},        
     
{
	cod:'95',
	nomParada:'Iglesia Santa Clara',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2219444,
	longitud:-78.515833
}, 

{
	cod:'96',
	nomParada:'Parada Rocafuerte y Quiroga',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2191667,
	longitud:-78.519444
},
 
//Universidad Central Guajaló
{
	cod:'97',
	nomParada:'Carlos Andrade Marin',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2039455,
	longitud:-78.5055113
},    

{
	cod:'98',
	nomParada:'Parque Matovelle',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.212778,
	longitud:-78.5075
},       
  
{
	cod:'99',
	nomParada:'Venezuela',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2161111,
	longitud:-78.509166
}, 
    
{
	cod:'100',
	nomParada:'Benalcazar',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2175248,
	longitud:-78.5115919
}, 

{
	cod:'101',
	nomParada:'Benalcazar Y Rocafuerte',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.2222225,
	longitud:-78.515757
},

{
	cod:'102',
	nomParada:'Bahía',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.225278,
	longitud:-78.516111
}, 

{
	cod:'103',
	nomParada:'Ambato',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.227778,
	longitud:-78.514722
},
    
{
	cod:'104',
	nomParada:'Letort',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3041667,
	longitud:-78.540833
},

{
	cod:'105',
	nomParada:'Letort 2',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3047222,
	longitud:-78.538055
},
    
{
	cod:'106',
	nomParada:'S4DB',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3055556,
	longitud:-78.536388
},    
    
{
	cod:'107',
	nomParada:'E58',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3072222,
	longitud:-78.534444
},
    
{
	cod:'108',
	nomParada:'S42',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3080556,
	longitud:-78.534444
},
    
{
	cod:'109',
	nomParada:'S4DB',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3055556,
	longitud:-78.536388
},
    
{
	cod:'110',
	nomParada:'ESG',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.31,
	longitud:-78.5338888
},
    
{
	cod:'111',
	nomParada:'S418',
	url:'http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg',
	latitud:-0.3088889,
	longitud:-78.532777
},    
];

console.log($scope.paradas);

$scope.obtenerPosicion = function(){
var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
      $scope.latitud=lat;
      $scope.longitud=long;
      
      
      console.log(lat);
      console.log(long);
    }, function(err) {
      // error
    });
   
};

$scope.getAddress=function(){
$scope.distanciaParadas();
var geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng($scope.latitud, $scope.longitud);
      var request = {
        latLng: latlng
      };
       geocoder.geocode(request, function(data, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (data[0] != null) {
            var humanDirection=data[0].formatted_address;
            $scope.address=humanDirection;
            console.log($scope.address);
            $scope.location=true;
          } else {
          	humanDirection="No address available";
          }
        }
      })
  };

$scope.calcularDistancia=function(lat1, lat2, lon1, lon2){
    var R = 6371; // Radio del planeta tierra en km
    var phi1 = lat1.toRad();
    var phi2 = lat2.toRad();
    var deltaphi = (lat2-lat1).toRad();
    var deltalambda = (lon2-lon1).toRad();

    var a = Math.sin(deltaphi/2) * Math.sin(deltaphi/2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(deltalambda/2) * Math.sin(deltalambda/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c
    return d.toFixed(3);

    }

    


   $scope.distanciaParadas=function(){
   	var contadorCercanas=0;
    for(var i=0;i<$scope.paradas.length;i++){
    	var latitudUsuario=$scope.latitud;
        var longitudUsuario=$scope.longitud;
        var latitudParada=$scope.paradas[i].latitud;
        var longitudParada=$scope.paradas[i].longitud;
        console.log(latitudUsuario);
         console.log(longitudUsuario);
          console.log(latitudParada);
           console.log(longitudParada);
       
       var distancia=$scope.calcularDistancia(latitudUsuario,latitudParada,
        	longitudUsuario,longitudParada);
       			if(distancia < 1)
       			{
       				$scope.paradas[i].distancia=distancia*1000;
       				$scope.paradas[i].kilometros=false;
       				$scope.paradas[i].metros=true;
       				if($scope.paradas[i].distancia<=600)
       				{
       				$scope.paradasCercanas[contadorCercanas]=$scope.paradas[i];
       				contadorCercanas ++;
       				}
       				
       			}
       			else{
       				$scope.paradas[i].distancia=distancia;
       				$scope.paradas[i].kilometros=true;
       			}
             
             console.log($scope.paradas[i].distancia);


    	}
    	console.log($scope.paradasCercanas);
 	}

 	var init = function () {
 		$scope.obtenerPosicion();
     }

     init();

	}]);