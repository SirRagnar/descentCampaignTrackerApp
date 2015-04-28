'use strict';

/**
 * @ngdoc filter
 * @name descentCampaignTrackerApp.filter:rgtDesMonsterTypeName
 * @function
 * @description
 * # rgtDesMonsterTypeName
 * Returns the monster type name translated.
 */
angular.module('descentCampaignTrackerApp')
  .filter('rgtDesMonsterTypeName', ['$translate', 'desCamaignCons', function ($translate,desCamaignCons) {
  	
    return function (input) {
    	var outputKey;
    	switch(input){
    		case desCamaignCons.MONSTER_TYPE_HUMANOID:
    			outputKey='HUMANOIDS';
    			break;
    		case desCamaignCons.MONSTER_TYPE_BEASTS:
    			outputKey='BEASTS';
    			break;
    		case desCamaignCons.MONSTER_TYPE_ELDRITCH:
    			outputKey='ELDRITCH';
    			break;
    		default:
    			outputKey='MONSTER_TYPE_UNKNOWN';
    	}
      return $translate.instant(outputKey);
    };
  }]);
