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
      },
      lieutenants:[/*{name: '', location:'' }*/]
    };


    // Public API 
    return {      
      getModel: getModel,
      
      newAdvance: newAdvance,
      addPlotAdvance: addPlotAdvance,
      removePlotAdvance:removePlotAdvance,
      addCommonAdvance: addCommonAdvance,
      removeCommonAdvance:removeCommonAdvance,

      newLieutenant: newLieutenant,
      addLieutenant: addLieutenant,
      removeLieutenant: removeLieutenant
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


  });
