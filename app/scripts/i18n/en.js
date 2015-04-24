(function (app,undefined){
	'use strict';
    
	app.config(['$translateProvider', function ($translateProvider) {
	  $translateProvider.translations('en', {
	    'TITLE': 'Campaign',
	    'ADD': 'Add',
	    'DELETE': 'Delete',
	    'LOCATION': 'Location',
	    'NAME': 'Name',
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
	    'DELETE_LIEUTENANT': 'Delete lieutenant',
	    'HEROES': 'Heroes',
	    'HERO_NAME': 'Hero name',
	    'XP': 'XP',
	    'HERO_XP_SPENT': 'XP spent',
	    'ADD_HERO': 'Add hero',
	    'DELETE_HERO': 'Delete hero',
	    'HOME_PORT': 'Home port',
	    'PARTY_LOCATION': 'Hero party location',
	    'RUMOR': 'Rumor',
	    'CURRENT_RUMOR': 'Current rumor',
	    'RUMOR_LOCATION': 'Rumor location'
	  });
	}]);
    
}(angular.module('descentCampaignTrackerApp')));