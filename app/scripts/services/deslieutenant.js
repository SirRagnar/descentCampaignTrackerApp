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
      return [];
    }

    function  newLieutenant(){
      return {name: '', location: '', alive:true};
    }

    function addLieutenant(lieutenants, lieutenant){
      lieutenants.push(lieutenant);
    }

    function removeLieutenant(lieutenants, index){
      lieutenants.splice(index, 1);
    }
  }]);
