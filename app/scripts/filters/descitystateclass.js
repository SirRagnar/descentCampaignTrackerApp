'use strict';

/**
 * @ngdoc filter
 * @name descentCampaignTrackerApp.filter:desCityStateClass
 * @function
 * @description
 * # desCityStateClass
 * Filter that calculate the css class of the city state
 */
angular.module('descentCampaignTrackerApp')
  .filter('desCityStateClass', function () {
    return function (city) {
    	var stateCssClass;
    	if(angular.isUndefined(city) || !angular.isObject(city)){
			stateCssClass='label-success';
    	}else if(city.razed){
    		stateCssClass='label-danger';
    	}else if(city.siege===0){
    		stateCssClass='label-success';
    	}else if(city.siege>0){
    		stateCssClass='label-warning';
    	}else{
    		stateCssClass='label-success';
    	}
      return stateCssClass;
    };
  });
