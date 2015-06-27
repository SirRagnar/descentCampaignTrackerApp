'use strict';

/**
 * @ngdoc function
 * @name descentCampaignTrackerApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the descentCampaignTrackerApp
 */
angular.module('descentCampaignTrackerApp')
  .controller('NavigationCtrl', ['desNavigation',function (desNavigation) {
    
    var navigation=this;

    navigation.api={
    	isPathActive: desNavigation.isPathActive
    };

  }]);
