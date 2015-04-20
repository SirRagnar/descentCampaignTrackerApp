(function (app,undefined){
	'use strict';
    
	app.config(['$translateProvider', function ($translateProvider) {
	  $translateProvider.translations('en', {
	    'TITLE': 'Campaign',
	    'FOO': 'This is a paragraph'
	  });
	}]);
    
}(angular.module('descentCampaignTrackerApp')));