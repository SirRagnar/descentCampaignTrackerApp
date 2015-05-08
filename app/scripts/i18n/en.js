(function (app,undefined){
	'use strict';
    
	app.config(['$translateProvider', function ($translateProvider) {
	  $translateProvider.translations('en', {
	  	'UNKNOWN': 'Unknown',
	    'TITLE': 'Campaign',
	    'ACTIONS': 'Actions',
	    'ADD': 'Add',
	    'DELETE': 'Delete',
	    'LOCATION': 'Location',
	    'STATE': 'State',
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
	    'RUMOR_LOCATION': 'Rumor location',
	    'CONQUEST_TOCKENS': 'Conquest tockens',
	    'CAMPAIGN_TOTAL_CONQUEST_TOCKENS': 'Campaign total conquest tockens',
	    'LEVEL': 'Level',
	    'CAMPAIGN_LEVEL': 'Campaign level',
	    'LEVEL_CUPPER': 'Cupper',
	    'LEVEL_SILVER': 'Silver',
	    'LEVEL_GOLD': 'Gold',
	    'LEVEL_GOLD_FINAL_BATTLE': 'Gold - Final battle',
	    'LEVEL_DIAMOND': 'Diamond',
	    'DIVINE_FAVOR': 'Divine favor',
	    'LEVEL_MONSTERS': 'Level monsters',
	    'HUMANOIDS':'Humanoids',
	    'BEASTS':'Beasts',
	    'ELDRITCH': 'Eldritch',
	    'MONSTER_TYPE_UNKNOWN': 'Monster type unknown',
	    'CITIES': 'Cities',
	    'CITY': 'City',
	    'CITY_NAME': 'City name',
	    'SIEGE':'Siege',
	    'SIEGE_TOCKENS': 'Siege tockens',
	    'VAULT': 'Vault',
	    'ADD_CITY':'Add city',
	    'RAZE_CITY': 'Raze city',
	    'RESTORE_CITY': 'Restore city',
	    'DELETE_CITY': 'Delete city',
	    'FREE': 'Free',
	    'SIEGED': 'Sieged',
	    'RAZED': 'Razed',
	    'ISLANDS': 'Islands',
	    'DUNGEONS': 'Dungeons',
	    'DUNGEON': 'Dungeon',
	    'DUNGEON_NAME': 'Dungeon name',
	    'ADD_DUNGEON': 'Add dungeon',
	    'DELETE_DUNGEON': 'Delete dungeon',
	    'ACTIONS_OVER_DUNGEON': 'Actions over the dungeon',
	    'LOCATION_UNKNOWN': 'Unknown',
	    'LOCATION_VISITED': 'Visited',
	    'LOCATION_CONQUERED': 'Conquered',
	    'LOCATION_DEFEAT': 'Defeat',
	    'RESTORE_NOT_VISITED': 'Restore to not visited',
	    'RESTORE_NOT_CONQUERED': 'Restore to not conquered',
	    'RESTORE_NOT_DEFEAT': 'Restore to not defeat'
	  });
	}]);
    
}(angular.module('descentCampaignTrackerApp')));