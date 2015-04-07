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
  [function () {
    
    return {
      newMonsterLevels:   newMonsterLevels,
      modifyMonsterLevel: modifyMonsterLevel
    };

    function newMonsterLevels(){
      return [
        {name: 'Humanoides', level: 1},
        {name: 'Bestias', level:1},
        {name: 'Arcanos', level:1}
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
