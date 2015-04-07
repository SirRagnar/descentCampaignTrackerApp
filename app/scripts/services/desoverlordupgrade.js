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
    [function () {
    
    return {
      newUpgrade:          newUpgrade,
      addPlotUpgrade:      addUpgrade,
      removePlotUpgrade:   removeUpgrade,
      addCommonUpgrade:    addUpgrade,
      removeCommonUpgrade: removeUpgrade
    };

    function newUpgrade(){
      return {name:''};
    }

    function addUpgrade(upgradeList,upgrade){
      upgradeList.push(upgrade);
    }

    function removeUpgrade(upgradeList, index){
      upgradeList.splice(index, 1);
    }


  }]);
