'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desOverlordUpgrade
 * @description
 * # desOverlordUpgrade
 * Factory for overlord upgrade API.
 */
angular.module('descentCampaignTrackerApp')
  .factory('desOverlordUpgrade', 
    [ 'desCore',
    function (desCore) {
    
    return {
      newUpgrade:          newUpgrade,
      addPlotUpgrade:      addPlotUpgrade,
      removePlotUpgrade:   removePlotUpgrade,
      addCommonUpgrade:    addCommonUpgrade,
      removeCommonUpgrade: removeCommonUpgrade
    };

    function newUpgrade(){
      return {name:''};
    }

    function _removeUpgrade(upgradeList, index){
      upgradeList.splice(index, 1);
    }

    function addPlotUpgrade(overlord,upgrade){
      overlord.plotUpgrades=desCore.orderAndAddNamedItemToArray(overlord.plotUpgrades,upgrade);
    }

    function removePlotUpgrade(overlord,index){
      _removeUpgrade(overlord.plotUpgrades,index);
    }

    function addCommonUpgrade(overlord,upgrade){
      overlord.commonUpgrades=desCore.orderAndAddNamedItemToArray(overlord.commonUpgrades,upgrade);
    }

    function removeCommonUpgrade(overlord,index){
      _removeUpgrade(overlord.commonUpgrades,index);
    }


  }]);
