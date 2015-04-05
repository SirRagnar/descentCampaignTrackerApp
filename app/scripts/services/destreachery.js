'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desTreachery
 * @description
 * # desTreachery
 * Service in the descentCampaignTrackerApp.
 */
angular.module('descentCampaignTrackerApp')
  .factory('desTreachery', [function () {

    // Public API 
    return {
    	newTreacheryCounter: 		newTreacheryCounter,
    	increaseCurrentTreachery:	increaseCurrentTreachery,
    	increaseMaxTreachery: 		increaseMaxTreachery
    };

    function newTreacheryCounter(){
    	return {current:0, max:0};
    }

    function increaseCurrentTreachery(counter,amount){
    	var current=(counter.current || 0);
    	var max=(counter.max || 0);
    	var finalCount = current + (amount || 0);
    	if(finalCount<=max && finalCount>=0){
    		counter.current=finalCount;
    	}
    }

    function increaseMaxTreachery(counter,amount){
    	var current=(counter.current || 0);
    	var finalMax = (counter.max || 0) + (amount || 0);
    	if(finalMax>=0 && finalMax>=current){
    		counter.max=finalMax;
    	}
    }

  }]);
