'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.overlord/desOverlord
 * @description
 * # overlord/desOverlord
 * Overlord API.
 */
angular.module('descentCampaignTrackerApp')
  .factory('desOverlord', 
    ['desCore', 'desOverlordUpgrade', 'desTreachery',
    function (desCore, desOverlordUpgrade, desTreachery) {
    
    return {      
      newOverlord: newOverlord,

      newUpgrade:          desOverlordUpgrade.newUpgrade,
      addPlotUpgrade:      desOverlordUpgrade.addPlotUpgrade,
      removePlotUpgrade:   desOverlordUpgrade.removePlotUpgrade,
      addCommonUpgrade:    desOverlordUpgrade.addCommonUpgrade,
      removeCommonUpgrade: desOverlordUpgrade.removeCommonUpgrade,

      addOverlordConquestTockens:       addOverlordConquestTockens, 
      addOverlordSpentTockens:          addOverlordSpentTockens,
      overlordAviableConquestTockens:   overlordAviableConquestTockens,

      increaseCurrentTreachery: desTreachery.increaseCurrentTreachery,
      increaseMaxTreachery:     desTreachery.increaseMaxTreachery      
    };

    function newOverlord(){
      return { 
        name: '',
        plot: '',
        plotUpgrades: [/*{ name: }*/],
        commonUpgrades: [/*{name: }*/],
        conquestTockens:0,
        spentTockens:0,
        treachery:{
          traps:    desTreachery.newTreacheryCounter(),/*{current:0, max:0}*/
          events:   desTreachery.newTreacheryCounter(),
          monsters: desTreachery.newTreacheryCounter()
        }
      };
    }


    function addOverlordConquestTockens(overlord,amount){
      var finalConquestTockens = (overlord.conquestTockens || 0) + (amount ||0);
      if(finalConquestTockens>=0){
        overlord.conquestTockens = finalConquestTockens;
      }
    }

    function addOverlordSpentTockens(overlord,amount){
      var finalSpentTockens = (overlord.spentTockens || 0) + (amount ||0);
      var overLordTockens=(overlord.conquestTockens || 0);
      if(finalSpentTockens>=0 && finalSpentTockens<=overLordTockens){
        overlord.spentTockens = finalSpentTockens;
      }
    }

    function overlordAviableConquestTockens(overlord){
      return (overlord.conquestTockens || 0) - (overlord.spentTockens || 0);
    }

  }]);
