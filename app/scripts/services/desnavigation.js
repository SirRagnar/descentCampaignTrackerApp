'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desNavigation
 * @description
 * # desNavigation
 * Navigation fatory.
 */
angular.module('descentCampaignTrackerApp')
  .factory('desNavigation', ['$location',function ($location) {
    
    // Public API here
    return {
      isPathActive: isPathActive
    };

    /**
     * @description
     * #menuClass
     * Return menu class if it is the same as route being navigated.
     * See http://stackoverflow.com/a/12592693/840635
     */
    function isPathActive(path) {
      if ($location.path() === path) {
        return true;
      } else {
        return false;
      }
    }
  }]);
