(function (app,undefined){
	'use strict';
    
	app.config(['$translateProvider', function ($translateProvider) {
	  $translateProvider.translations('es', {
	    'TITLE': 'Campaña',
	    'ADD': 'Agregar',
	    'DELETE': 'Eliminar',
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
	    'DELETE_COMMON_UPGRADE': 'Eliminar avance común'
	  });
	}]);
    
}(angular.module('descentCampaignTrackerApp')));