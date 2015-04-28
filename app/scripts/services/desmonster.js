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
      newMonsterLevel: newMonsterLevel,
      newMonsterLevels:   newMonsterLevels,
      modifyMonsterLevel: modifyMonsterLevel
    };

    function newMonsterLevel(type,level){
      return {type:type,level:level||1};
    }

    function newMonsterLevels(){
      return [
        newMonsterLevel(desCamaignCons.MONSTER_TYPE_HUMANOID, 1),
        newMonsterLevel(desCamaignCons.MONSTER_TYPE_BEASTS, 1),
        newMonsterLevel(desCamaignCons.MONSTER_TYPE_ELDRITCH, 1)
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
