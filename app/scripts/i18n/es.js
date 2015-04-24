(function (app,undefined){
	'use strict';
    
	app.config(['$translateProvider', function ($translateProvider) {
	  $translateProvider.translations('es', {
	    'TITLE': 'Campaña',
	    'ADD': 'Agregar',
	    'DELETE': 'Eliminar',
	    'LOCATION': 'Localización',
	    'NAME': 'Nombre',
	    'OVERLORD': 'Señor supremo',
	    'OVERLORD_NAME': 'Nombre del señor supremo',
	    'PLOT': 'Trama',
	    'UPGRADES': 'Avances',
	    'PLOT_UPGRADES': 'Avances de trama',
	    'PLOT_UPGRADE': 'Avance de trama',
	    'ADD_PLOT_UPGRADE': 'Agregar avance de trama',
	    'DELETE_PLOT_UPGRADE': 'Eliminar avance de trama',
	    'COMMON_UPGRADES': 'Avances comunes',
	    'COMMON_UPGRADE': 'Avance común',
	    'ADD_COMMON_UPGRADE': 'Agregar avance común',
	    'DELETE_COMMON_UPGRADE': 'Eliminar avance común',
	    'LIEUTENANTS': 'Lugartenientes',
	    'LIEUTENANT': 'Lugarteniente',
	    'LIEUTENANT_NAME': 'Nombre del lugarteniente',
	    'ADD_LIEUTENANT': 'Agregar lugarteniente',
	    'DELETE_LIEUTENANT': 'Eliminar lugarteniente',
	    'HEROES': 'Héroes',
	    'HERO_NAME': 'Nombre del héroe',
	    'XP': 'XP',
	    'HERO_XP_SPENT': 'XP gastados',
	    'ADD_HERO': 'Agregar héroe',
	    'DELETE_HERO': 'Eliminar héroe',
	    'HOME_PORT': 'Puerto seguro',
	    'PARTY_LOCATION': 'Localización actual del grupo',
	    'RUMOR': 'Rumor',
	    'CURRENT_RUMOR': 'Rumor activo',
	    'RUMOR_LOCATION': 'Localización del rumor'
	  });
	}]);
    
}(angular.module('descentCampaignTrackerApp')));