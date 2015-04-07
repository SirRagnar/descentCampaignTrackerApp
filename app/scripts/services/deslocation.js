'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desLocation
 * @description
 * # desLocation
 * Factory in the descentCampaignTrackerApp.
 */
angular.module('descentCampaignTrackerApp')
  .factory('desLocation', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
