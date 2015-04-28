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
  ['desCamaignCons',function (desCamaignCons) {
    
    return {
      newMonsterLevels:   newMonsterLevels,
      modifyMonsterLevel: modifyMonsterLevel
    };

    function newMonsterLevels(){
      return [
        {type: desCamaignCons.MONSTER_TYPE_HUMANOID, level: 1},
        {type: desCamaignCons.MONSTER_TYPE_BEASTS, level:1},
        {type: desCamaignCons.MONSTER_TYPE_ELDRITCH, level:1}
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
