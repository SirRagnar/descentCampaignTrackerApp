(function (app,undefined){
	'use strict';
    
	app.config(['$translateProvider', function ($translateProvider) {
	  $translateProvider.translations('es', {
	    'TITLE': 'Campaña',
	    'FOO': 'This is a paragraph'
	  });
	}]);
    
}(angular.module('descentCampaignTrackerApp')));