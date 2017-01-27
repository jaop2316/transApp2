app.controller('paradasController',['$scope',function($scope){
console.log("paradas Controller");

$scope.paradas=[

{
	cod:'1',
	nomParada:'Parada Liga Barrial San Roque ',
	url:"http://images.teinteresa.es/comunidad-de-madrid/madrid/Ayuntamiento-nombres-paradas-autobuses-Madrid_TINIMA20120107_0067_5.jpg",
	latitud:'-0.2180695',
	longitud:'-78.521121'
},

{
	cod:'2',
	nomParada:'Parada Mercado de San Roque ',
	url:'https://photos-1.dropbox.com/t/2/AAAxuWyk9HZYlF8Zsb13dQC_-Vi6e428eYWGyorydV0JTg/12/200894603/jpeg/32x32/1/_/1/2/2017-01-03-10-43-47-7389.jpg/EIzPh4gFGFAgBygH/fDy2C5ZLY-V8t9oeZrraYIyxdHqWUOpB4zp51ymUTdw?size=1280x960&size_mode=3',
	latitud:'-0.2210294',
	longitud:'-78.520708'
}




];

console.log($scope.paradas);

	}]);