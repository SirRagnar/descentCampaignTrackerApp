'use strict';

/**
 * @ngdoc filter
 * @name descentCampaignTrackerApp.filter:rgtDesMonsterLevel
 * @function
 * @description
 * # rgtDesMonsterLevel
 * Convert number of a monster level into text.
 */
angular.module('descentCampaignTrackerApp')
  .filter('rgtDesMonsterLevel', function () {
    return function (monsterLevel) {
    	var level = (monsterLevel.level) || 1;
    	var strLevel='Cobre';
		switch(level) {
			case 2:
			    strLevel='Plata';
			    break;
			case 3:
			    strLevel='Oro';
			    break;
			case 4:
			    strLevel='Diamante';
			    break;
			default:
			    strLevel='Cobre';
		}
      return strLevel;
    };
  });
