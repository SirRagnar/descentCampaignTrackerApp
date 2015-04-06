'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desCore
 * @description
 * # desCore
 * Core API
 */
angular.module('descentCampaignTrackerApp')
  .factory('desCore', ['$filter', function ($filter) { 

    // Public API here
    return {
      newUid: newUid,
      orderAndAddNamedItemToArray: orderAndAddNamedItemToArray
    };

    function orderAndAddNamedItemToArray(namedItem,listOfItems){
      listOfItems=(listOfItems || []);
      listOfItems.push(namedItem);
      return $filter('orderBy')(listOfItems,'name',false);
    }

    /** Generates new uid (from https://gist.github.com/gmilby/6611969#file-uuidmodule-js) */
    function newUid() {
      function _p8(s) {
          var p = (Math.random().toString(16)+'000000000').substr(2,8);
          return s ? '-' + p.substr(0,4) + '-' + p.substr(4,4) : p ;
      }
      return _p8() + _p8(true) + _p8(true) + _p8();
    }

    

  }]);
