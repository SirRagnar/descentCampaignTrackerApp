'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desModel
 * @description
 * # desModel
 * Factory with the model services.
 */
angular.module('descentCampaignTrackerApp')
  .factory('desModel', function () {
    
    var model = {      
      overlord: { 
        name: '',
        plot: '',
        plotAdvances: [/*{ name: }*/],
        commonAdvances: [/*{name: }*/],
        conquestTockens:0,
        spentTockens:0
      },
      lieutenants:[/*{name: '', location:'' }*/],
      heroParty:{
        location: '',
        homePort: '',
        rumor:{name:'',location:''},
        heroes:[/*{name: '', xpSpent: 0}*/],
        conquestTockens:0
      }
    };


    // Public API 
    return {      
      getModel: getModel,
      
      newAdvance:          newAdvance,
      addPlotAdvance:      addPlotAdvance,
      removePlotAdvance:   removePlotAdvance,
      addCommonAdvance:    addCommonAdvance,
      removeCommonAdvance: removeCommonAdvance,

      newLieutenant:    newLieutenant,
      addLieutenant:    addLieutenant,
      removeLieutenant: removeLieutenant,

      addOverlordConquestTockens:       addOverlordConquestTockens, 
      addOverlordSpentTockens:          addOverlordSpentTockens,
      overlordAviableConquestTockens:   overlordAviableConquestTockens,

      newHero:                    newHero,
      addHero:                    addHero,
      removeHero:                 removeHero,
      addHeroesConquestTockens:   addHeroesConquestTockens,
      addSpentHeroXP:             addSpentHeroXP,
      xpAviableHero:              xpAviableHero,

      divineFavor:          divineFavor,
      totalCampaignTockens: totalCampaignTockens,
      campaignLevel:        campaignLevel
    };    

    function getModel() {
      return model;
    }

    function newAdvance(){
      return {name:''};
    }

    function  newLieutenant(){
      return {name: '', location: '', alive:true};
    }

    function newHero(){
      return { name: '', 
               xpSpent:null
             };
    }

    function addPlotAdvance(advance){
      model.overlord.plotAdvances.push(advance);
    }

    function removePlotAdvance(index){
      model.overlord.plotAdvances.splice(index, 1);
    }

    function addCommonAdvance(advance){
      model.overlord.commonAdvances.push(advance);
    }

    function removeCommonAdvance(index){
      model.overlord.commonAdvances.splice(index, 1);
    }

    function addLieutenant(lieutenant){
      model.lieutenants.push(lieutenant);
    }

    function removeLieutenant(index){
      model.lieutenants.splice(index, 1);
    }


    function addOverlordConquestTockens(amount){
      var finalConquestTockens = (model.overlord.conquestTockens || 0) + (amount ||0);
      if(finalConquestTockens>=0){
        model.overlord.conquestTockens = finalConquestTockens;
      }
    }

    function addOverlordSpentTockens(amount){
      var finalSpentTockens = (model.overlord.spentTockens || 0) + (amount ||0);
      var overLordTockens=(model.overlord.conquestTockens || 0);
      if(finalSpentTockens>=0 && finalSpentTockens<=overLordTockens){
        model.overlord.spentTockens = finalSpentTockens;
      }
    }

    function overlordAviableConquestTockens(){
      return (model.overlord.conquestTockens || 0) - (model.overlord.spentTockens || 0);
    }


    function addHero(hero){
      model.heroParty.heroes.push(hero);
    }

    function removeHero(index){
      model.heroParty.heroes.splice(index, 1);      
    }

    function addHeroesConquestTockens(amount){
      var finalConquestTockens = (model.heroParty.conquestTockens || 0) + (amount || 0);
      if(finalConquestTockens>=0){
        model.heroParty.conquestTockens = finalConquestTockens;
      }
    }

    function addSpentHeroXP(hero, amount){
      var finalXpSpent = (hero.xpSpent || 0 ) + (amount || 0);
      var heroPartyConquestTockens = (model.heroParty.conquestTockens || 0 );      
      if(finalXpSpent>=0 && finalXpSpent<=heroPartyConquestTockens ){
        hero.xpSpent = finalXpSpent;
      }
    }

    function xpAviableHero(hero){
      return (model.heroParty.conquestTockens || 0) - (hero.xpSpent||0); 
    }


    function divineFavor(){      
      /*
      For every full 25 conquest tokens the heroes’ conquest total
      is below the overlord’s total, each hero’s conquest value is
      reduced by 1, to a minimum of 0

      On the other hand, for every full 25 conquest tokens the
      heroes’ total is above the overlord’s total, the overlord’s
      conquest value is increased by 1
      */
      var overLordTockens = (model.overlord.conquestTockens || 0);
      var heroesTockens = (model.heroParty.conquestTockens || 0 ); 
      var difference = Math.abs(overLordTockens - heroesTockens);
      var sign=1;
      if(overLordTockens>heroesTockens){
        sign=-1;
      }
      var df = Math.floor(difference/25)*sign;
      return df;
    }

    function totalCampaignTockens(){
      var heroPartyConquestTockens = (model.heroParty.conquestTockens || 0 );
      var overLordTockens=(model.overlord.conquestTockens || 0);
      return heroPartyConquestTockens + overLordTockens;
    }

    function campaignLevel(){
      var level='Cobre';
      var totalTockens = totalCampaignTockens();
      if(totalTockens>=200){
        level='Plata';
      }else if(totalTockens>=400){
        level='Oro';
      }else if(totalTockens>=600){
        level='Oro - Batalla final';
      }
      return level;
    }
  });
