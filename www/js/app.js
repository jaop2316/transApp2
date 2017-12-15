// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var masterUrl='https://api-transapp-jaop.c9users.io/';
//var masterUrl='http://localhost:3000/';
var app=angular.module('myApp', ['ionic','ngCordova','ngResource'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.paradas', {
    url: '/paradas',
    views: {
      'tab-paradas': {
        templateUrl: 'templates/paradas.html',
        controller:'paradasController'

      }
    }
  })

  .state('tab.rutas', {
      url: '/rutas',
      views: {
        'tab-rutas': {
          templateUrl: 'templates/rutas.html',
          controller:'rutasController'
        }
      }
    })
    .state('tab.lugares', {
      url: '/lugares',
      views: {
        'tab-lugares': {
          templateUrl: 'templates/lugares.html',
            controller:'sitiosController'
        }
      }
    })



  .state('tab.mapa', {
    url: '/mapa',
    views: {
      'tab-mapa': {
        templateUrl: 'templates/mapa.html',
        controller:'mapController'

      }
    }
  })

  .state('tab.mas', {
    url: '/mas',
    views: {
      'tab-mas': {
        templateUrl:'templates/opciones.html',
        controller:'opcionesCtrl'

      }
    }
  });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/paradas');

});
app.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}]);
