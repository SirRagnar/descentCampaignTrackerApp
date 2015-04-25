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
  .filter('rgtDesMonsterLevel',['$translate', function ($translate) {
    return function (monsterLevel) {
    	var level = (monsterLevel.level) || 1;
    	var strLevel='LEVEL_CUPPER';
		switch(level) {
			case 2:
			    strLevel='LEVEL_SILVER';
			    break;
			case 3:
			    strLevel='LEVEL_GOLD';
			    break;
			case 4:
			    strLevel='LEVEL_DIAMOND';
			    break;
			default:
			    strLevel='LEVEL_CUPPER';
		}
      return $translate.instant(strLevel);
    };
  }]);
