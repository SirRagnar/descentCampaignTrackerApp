'use strict';

/**
 * @ngdoc function
 * @name descentCampaignTrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the descentCampaignTrackerApp
 */
angular.module('descentCampaignTrackerApp')
  .controller('MainCtrl', ['$scope','desModel',function ($scope,desModel) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var main=this;
    main.model = angular.extend({},desModel.getModel());
    main.addInputs={
    	plotAdvance: desModel.newAdvance(),
    	commonAdvance: desModel.newAdvance()
    };

    main.api = {
    	addPlotAdvance: addPlotAdvance,    	
    	removePlotAdvance: desModel.removePlotAdvance,
    	addCommonAdvance: addCommonAdvance
    };

    function addPlotAdvance(){ 
    	main.addInputs.plotAdvance = _addAdvance(main.addInputs.plotAdvance,desModel.addPlotAdvance);
    }

    function addCommonAdvance(){ 
    	main.addInputs.commonAdvance = _addAdvance(main.addInputs.commonAdvance,desModel.addCommonAdvance);
    }

    function _addAdvance(advance,addModelFunction){
    	if(advance && angular.isDefined(advance.name) && angular.isString(advance.name) && advance.name.length>0){
    		addModelFunction(advance);
    		return desModel.newAdvance();
    	}else{
    		return advance;
    	}

    }
  }]);
