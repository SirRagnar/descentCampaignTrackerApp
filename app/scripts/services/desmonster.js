'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desMonster
 * @description
 * # desMonster
 * API for monsters.
 */
angular.module('descentCampaignTrackerApp')
  .factory('desMonster',
  ['$translate',function ($translate) {
    
    return {
      newMonsterLevels:   newMonsterLevels,
      modifyMonsterLevel: modifyMonsterLevel
    };

    function newMonsterLevels(){
      return [
        {name: $translate.instant('HUMANOIDS'), level: 1},
        {name: $translate.instant('BEASTS'), level:1},
        {name: $translate.instant('ELDRITCH'), level:1}
      ];
    }

    function modifyMonsterLevel(monsterLevel, amount){
      var currentLevel=(monsterLevel.level || 1);
      var amountNS = (amount || 0);
      var finalLevel = currentLevel + amount;
      if(finalLevel>=1 && finalLevel<=4){
        monsterLevel.level=finalLevel;
      }
    }
  }]);
