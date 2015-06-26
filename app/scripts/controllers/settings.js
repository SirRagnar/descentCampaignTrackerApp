'use strict';

/**
 * @ngdoc function
 * @name descentCampaignTrackerApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the descentCampaignTrackerApp
 */
angular.module('descentCampaignTrackerApp')
  .controller('SettingsCtrl',['$scope', '$translate','desSettings', function ($scope,$translate,desSettings) {
  	var settings=this;

  	settings.model={
	  		languages:[
		  		{id:'es', description:'SPANISH'},
		  		{id:'en', description:'ENGLISH'}
		  	],
		  	selectedLanguage:desSettings.getPreferredLanguage()
  	};

    settings.api={
      setAppLang: setAppLang
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    function setAppLang(){
      $translate.use(settings.model.selectedLanguage);
      desSettings.setPreferredLanguage(settings.model.selectedLanguage);
      //console.log('lengua por defecto: ' +desSettings.model.appLang);
    }

  }]);
