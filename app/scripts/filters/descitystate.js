'use strict';

/**
 * @ngdoc filter
 * @name descentCampaignTrackerApp.filter:desCityState
 * @function
 * @description
 * # desCityState
 * City state description.
 */
angular.module('descentCampaignTrackerApp')
  .filter('desCityState', ['$translate', function ($translate) {
    return function (city) {
    	var stateKey;
    	if(angular.isUndefined(city) || !angular.isObject(city)){
			stateKey='UNKNOWN';
    	}else if(city.razed){
    		stateKey='RAZED';
    	}else if(city.siege===0){
    		stateKey='FREE';
    	}else if(city.siege>0){
    		stateKey='SIEGED';
    	}else{
    		stateKey='UNKNOWN';
    	}
    	
      return $translate.instant(stateKey);
    };
  }]);
