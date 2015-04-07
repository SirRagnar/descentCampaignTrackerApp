'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desCampaign
 * @description
 * # desCampaign
 * Campaign API.
 */
angular.module('descentCampaignTrackerApp')
  .factory('desCampaign', 
    [function () {
    
    return {
      divineFavor:          divineFavor,
      totalCampaignTockens: totalCampaignTockens,
      campaignLevel:        campaignLevel
    };

    function divineFavor(overlord, heroParty){      
      /*
      For every full 25 conquest tokens the heroes’ conquest total
      is below the overlord’s total, each hero’s conquest value is
      reduced by 1, to a minimum of 0

      On the other hand, for every full 25 conquest tokens the
      heroes’ total is above the overlord’s total, the overlord’s
      conquest value is increased by 1
      */
      var overLordTockens = (overlord.conquestTockens || 0);
      var heroesTockens = (heroParty.conquestTockens || 0 ); 
      var difference = Math.abs(overLordTockens - heroesTockens);
      var sign=1;
      if(overLordTockens>heroesTockens){
        sign=-1;
      }
      var df = Math.floor(difference/25)*sign;
      return df;
    }

    function totalCampaignTockens(overlord, heroParty){
      var heroPartyConquestTockens = (heroParty.conquestTockens || 0 );
      var overLordTockens=(overlord.conquestTockens || 0);
      return heroPartyConquestTockens + overLordTockens;
    }

    function campaignLevel(overlord, heroParty){
      var level='Cobre';
      var totalTockens = totalCampaignTockens(overlord, heroParty);
      if(totalTockens>=200){
        level='Plata';
      }else if(totalTockens>=400){
        level='Oro';
      }else if(totalTockens>=600){
        level='Oro - Batalla final';
      }
      return level;
    }
  }]);
