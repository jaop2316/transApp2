app.controller('paradasController',['$scope','$cordovaGeolocation',function($scope,$cordovaGeolocation){
console.log("paradas Controller");

$scope.location=false;
$scope.latitud=0;
$scope.longitud=0;

$scope.paradas=[

{
	cod:'1',
	nomParada:'Liga Barrial San Roque ',
	url:"http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg",
	latitud:'-0.2180695',
	longitud:'-78.521121'
},

{
	cod:'2',
	nomParada:'Mercado de San Roque ',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.2210294',
	longitud:'-78.520708'
},

{
	cod:'3',
	nomParada:'San Diego ',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.2272661',
	longitud:'-78.5222701'
},
{
	cod:'4',
	nomParada:'Dos Puentes ',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.2339936',
	longitud:'-78.5239095'
},

{
	cod:'5',
	nomParada:'Rodrigo de Chavez ',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.2437754',
	longitud:'-78.5194404'
},
{
	cod:'6',
	nomParada:'Villaflora',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.2453297',
	longitud:'-78.5194105'
},

{
	cod:'7',
	nomParada:'El Recreo ',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.2505556',
	longitud:'-78.5214724'
},
{
	cod:'8',
	nomParada:'Cuartel Eplicachima',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.2658254',
	longitud:'-78.5261073'
},
{
	cod:'9',
	nomParada:'Ayapamba ',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.2778326',
	longitud:'-78.5312569'
},
{
	cod:'10',
	nomParada:'CC.Mayoristas y Negocios Andinos ',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.2797471',
	longitud:'-78.5327129'
},
{
	cod:'11',
	nomParada:'Puente de Guajalo ',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.2888889',
	longitud:'-78.538333'
},
{
	cod:'12',
	nomParada:'Chifa Cantonés ',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.3072222',
	longitud:'-78.5438888'
},
{
	cod:'13',
	nomParada:'Guamaní 1 ',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.3156499',
	longitud:'-78.5494325'
},
{
	cod:'14',
	nomParada:'Tia Guamani ',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.3188206',
	longitud:'-78.5494679'
},
{
	cod:'15',
	nomParada:'Escuela Celiano Monge',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.3223622',
	longitud:'-78.5498679'
},
{
	cod:'16',
	nomParada:'CC.Artesanal del Sur ',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.3306086',
	longitud:'-78.5506482'
},
{
	cod:'17',
	nomParada:'Colegio Vida Nueva ',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.3380343',
	longitud:'-78.5496652'
},
{
	cod:'18',
	nomParada:'Cesar Arguello ',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.3547764',
	longitud:'-78.5492969'
},
{
	cod:'19',
	nomParada:'Cutuglahua 1',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.362392',
	longitud:'-78.5552237'
},
{
	cod:'20',
	nomParada:'Cutuglahua 2',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.3606163',
	longitud:'-78.5612386'
},
{
	cod:'21',
	nomParada:'Cutuglahua 3',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.3604947',
	longitud:'-78.5617802'
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
$scope.obtenerPosicion();
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
            $scope.location=true;
            console.log($scope.address);
          } else {
          	humanDirection="No address available";
          }
        }
      })
  };






	}]);