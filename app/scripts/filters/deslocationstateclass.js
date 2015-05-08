'use strict';

/**
 * @ngdoc filter
 * @name descentCampaignTrackerApp.filter:desLocationStateClass
 * @function
 * @description
 * # desLocationStateClass
 * Filter in the descentCampaignTrackerApp.
 */
angular.module('descentCampaignTrackerApp')
  .filter('desLocationStateClass', ['desLocation',function (desLocation) {
    return function (adventureLocation) {
    	var adventureLocationState = desLocation.adventureLocationState(adventureLocation);
        var stateCssClass;
        switch(adventureLocationState){
            case 'LOCATION_DEFEAT':
                stateCssClass='label-danger';
                break;
            case 'LOCATION_VISITED':
                stateCssClass='label-primary';
                break;
            case 'LOCATION_CONQUERED':
                stateCssClass='label-success';
                break;            
            case 'LOCATION_UNKNOWN':
                stateCssClass='label-default';
                break;
        }
        return stateCssClass;
    };
  }]);
