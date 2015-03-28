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
        unspentTockens:0
      },
      lieutenants:[/*{name: '', location:'' }*/],
      heroParty:{
        location: '',
        homePort: '',
        rumor:{name:'',location:''},
        heroes:[/*{name: '', xp: 0}*/],
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

      newHero:    newHero,
      addHero:    addHero,
      removeHero: removeHero
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
      return {name: '', xp:0};
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

    function addHero(hero){
      model.heroParty.heroes.push(hero);
    }

    function removeHero(index){
      model.heroParty.heroes.splice(index, 1);      
    }
  });
