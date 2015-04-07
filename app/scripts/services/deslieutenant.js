'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desLieutenant
 * @description
 * # desLieutenant
 * Lieutenant API.
 */
angular.module('descentCampaignTrackerApp')
  .factory('desLieutenant', 
  ['desCore',
  function (desCore) {
    
    return {
      newLieutenants: newLieutenants,

      newLieutenant:    newLieutenant,
      addLieutenant:    addLieutenant,
      removeLieutenant: removeLieutenant
    };

    function newLieutenants(){
      return {list: []};
    }

    function  newLieutenant(){
      return {name: '', location: '', alive:true};
    }

    function addLieutenant(lieutenants, lieutenant){            
      lieutenants.list=desCore.orderAndAddNamedItemToArray(lieutenants.list,lieutenant);
    }

    function removeLieutenant(lieutenants, index){
      lieutenants.list.splice(index, 1);
    }
  }]);
