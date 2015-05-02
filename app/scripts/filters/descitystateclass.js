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
  .filter('desCityStateClass', ['desLocation', function (desLocation) {
    return function (city) {
        var cityState = desLocation.cityState(city);
        var stateCssClass;
        switch(cityState){
            case 'RAZED':
                stateCssClass='label-danger';
                break;
            case 'SIEGED':
                stateCssClass='label-warning';
                break;
            case 'FREE':
            case 'UNKNOWN':
                stateCssClass='label-success';
                break;
        }
        return stateCssClass;
    };
  }]);
