'use strict';

/**
 * @ngdoc overview
 * @name descentCampaignTrackerApp
 * @description
 * # descentCampaignTrackerApp
 *
 * Main module of the application.
 */
angular
  .module('descentCampaignTrackerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/saveAndLoad', {
        templateUrl: 'views/saveandload.html',
        controller: 'SaveandloadCtrl',
        controllerAs: 'saveAndLoad'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['localStorageServiceProvider', 
    function(localStorageServiceProvider){
      localStorageServiceProvider.setPrefix('desCT');
  }])
  .config(['$translateProvider', function ($translateProvider) {   
    $translateProvider.preferredLanguage('es');
  }]);
