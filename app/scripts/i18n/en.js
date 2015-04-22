(function (app,undefined){
	'use strict';
    
	app.config(['$translateProvider', function ($translateProvider) {
	  $translateProvider.translations('en', {
	    'TITLE': 'Campaign',
	    'ADD': 'Add',
	    'DELETE': 'Delete',
	    'LOCATION': 'Location',
	    'OVERLORD': 'Overlord',
	    'OVERLORD_NAME': 'Overlord name',
	    'PLOT': 'Plot',
	    'UPGRADES': 'Upgrades',
	    'PLOT_UPGRADES': 'Plot upgrades',
	    'PLOT_UPGRADE': 'Plot upgrade',
	    'ADD_PLOT_UPGRADE': 'Add plot upgrade',
	    'DELETE_PLOT_UPGRADE': 'Delete plot upgrade',
	    'COMMON_UPGRADES': 'Common upgrades',
	    'COMMON_UPGRADE': 'Common upgrade',
	    'ADD_COMMON_UPGRADE': 'Add common upgrade',
	    'DELETE_COMMON_UPGRADE': 'Delete common upgrade',
	    'LIEUTENANTS': 'Lieutenants',
	    'LIEUTENANT': 'Lieutenant',
	    'LIEUTENANT_NAME': 'Lieutenant name',
	    'ADD_LIEUTENANT': 'Add lieutenant',
	    'DELETE_LIEUTENANT': 'Delete lieutenant'
	  });
	}]);
    
}(angular.module('descentCampaignTrackerApp')));