'use strict';

/**
 * @ngdoc function
 * @name descentCampaignTrackerApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the descentCampaignTrackerApp
 */
angular.module('descentCampaignTrackerApp')
  .controller('SettingsCtrl', function ($scope) {
  	var settingsCtrl=this;

  	settingsCtrl.model={
	  		languages:[
		  		{id:'es', description:'SPANISH'},
		  		{id:'en', description:'ENGLISH'}
		  	],
		  	selectedLanguage:'es'
  	};

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
