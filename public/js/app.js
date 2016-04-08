angular.module('PatientPassport', ['ui.router', 'LocationCtrls'])

.config(['$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
  
  $urlRouterProvider.otherwise('/404');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'Locations'
  })
  .state('directions', {
    url: '/locations/:id',
    templateUrl: 'views/directions.html',
    controller: 'Directions'
  })
  .state('search', {
    url: '/results',
    templateUrl: 'views/searchResults.html',
    controller: 'ResultsCtrl'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'views/404.html'
  });

  $locationProvider.html5Mode(true);
}]);