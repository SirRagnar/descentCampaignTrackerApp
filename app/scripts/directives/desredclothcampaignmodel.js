'use strict';

/**
 * @ngdoc directive
 * @name descentCampaignTrackerApp.directive:desRedClothCampaignModel
 * @description
 * # desRedClothCampaignModel
 */
angular.module('descentCampaignTrackerApp')
  .directive('desRedClothCampaignModel', 
  	['$log', 'desModel', 'desCampaign',function ($log, desModel, desCampaign) {
    return {
      templateUrl: 'templates/desredclothcampaignmodel.html',
      restrict: 'E',
	  replace: true,
	  scope: {
	      model: '='
	  },
      link: function postLink(scope, element, attrs) {
      	$log.log(scope.model);
        scope.api={
          divineFavor:      desCampaign.divineFavor.bind(undefined,
                                     desModel.getOverlord(),
                                     desModel.getHeroParty()),
          totalCampaignTockens:   desCampaign.totalCampaignTockens.bind(undefined,
                                                                      desModel.getOverlord(),
                                                                      desModel.getHeroParty()),
          campaignLevel:      desCampaign.campaignLevel.bind(undefined,
                                                               desModel.getOverlord(),
                                                               desModel.getHeroParty())
        };
        //element.text('this is the desRedClothCampaignModel directive');
      }
    };
  }]);
