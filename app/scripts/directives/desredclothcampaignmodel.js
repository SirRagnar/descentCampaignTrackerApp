'use strict';

/**
 * @ngdoc directive
 * @name descentCampaignTrackerApp.directive:desRedClothCampaignModel
 * @description
 * # desRedClothCampaignModel
 */
angular.module('descentCampaignTrackerApp')
  .directive('desRedClothCampaignModel', 
  	['$log',function ($log) {
    return {
      templateUrl: 'templates/desredclothcampaignmodel.html',
      restrict: 'E',
	  replace: true,
	  scope: {
	      model: '='
	  }/*,
      link: function postLink(scope, element, attrs) {
      	$log.log(scope.model);
        element.text('this is the desRedClothCampaignModel directive');
      }*/
    };
  }]);
