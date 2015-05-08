(function (app,undefined){
	'use strict';
    
	app.config(['$translateProvider', function ($translateProvider) {
	  $translateProvider.translations('es', {
	  	'UNKNOWN': 'Desconocido',
	    'TITLE': 'Campaña',
	    'ACTIONS': 'Acciones',
	    'ADD': 'Agregar',
	    'DELETE': 'Eliminar',
	    'LOCATION': 'Localización',
	    'STATE': 'Estado',
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
	    'RUMOR_LOCATION': 'Localización del rumor',
	    'CONQUEST_TOCKENS': 'Fichas de conquista',
	    'CAMPAIGN_TOTAL_CONQUEST_TOCKENS': 'Total campaña',
	    'LEVEL': 'Nivel',
	    'CAMPAIGN_LEVEL': 'Nivel de campaña',
	    'LEVEL_CUPPER': 'Cobre',
	    'LEVEL_SILVER': 'Plata',
	    'LEVEL_GOLD': 'Oro',
	    'LEVEL_GOLD_FINAL_BATTLE': 'Oro - Batalla final',
	    'LEVEL_DIAMOND': 'Diamante',
	    'DIVINE_FAVOR': 'Favor divino',
	    'LEVEL_MONSTERS': 'Nivel de los monstruos',
	    'HUMANOIDS':'Humanoides',
	    'BEASTS':'Bestias',
	    'ELDRITCH': 'Arcanos',
	    'MONSTER_TYPE_UNKNOWN': 'Tipo de monstruo desconocido',
	    'CITIES': 'Ciudades',
	    'CITY': 'Ciudad',
	    'CITY_NAME': 'Nombre de la ciudad',
	    'SIEGE':'Asedio',
	    'SIEGE_TOCKENS': 'Marcadores de asedio',
	    'VAULT': 'Bóveda',
	    'ADD_CITY':'Agregar ciudad',
	    'RAZE_CITY': 'Arrasar ciudad',
	    'RESTORE_CITY': 'Restaurar ciudad',
	    'DELETE_CITY': 'Eliminar ciudad',
	    'FREE': 'Libre',
	    'SIEGED': 'Bajo asedio',
	    'RAZED': 'Arrasada',
	    'ISLANDS': 'Islas',
	    'DUNGEONS': 'Mazmorras',
	    'DUNGEON': 'Mazmorra',
	    'DUNGEON_NAME': 'Nombe de la mazmorra',
	    'ADD_DUNGEON': 'Agregar mazmorra',
	    'DELETE_DUNGEON': 'Eliminar dungeon',
	    'ACTIONS_OVER_DUNGEON': 'Actions over the dungeon',
	    'LOCATION_UNKNOWN': 'Desconocida',
	    'LOCATION_VISITED': 'Visitada',
	    'LOCATION_CONQUERED': 'Conquistada',
	    'LOCATION_DEFEAT': 'Derrota',
	    'RESTORE_NOT_VISITED': 'Restaurar a no visitada',
	    'RESTORE_NOT_CONQUERED': 'Restaurar a no conquistada',
	    'RESTORE_NOT_DEFEAT': 'Restaurar a no derrota'
	  });
	}]);
    
}(angular.module('descentCampaignTrackerApp')));