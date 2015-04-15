'use strict';

/**
 * @ngdoc function
 * @name descentCampaignTrackerApp.controller:SaveandloadCtrl
 * @description
 * # SaveandloadCtrl
 * Controller of the descentCampaignTrackerApp
 */
angular.module('descentCampaignTrackerApp')
  .controller('SaveandloadCtrl', 
  	['desModel', function (desModel) {
    	
    	var saveAndLoad=this;

    	// Controller model
    	saveAndLoad.model={
    		output:'',
    		input:'',
    		showImportMessage:false,
    		importResult:{},
            campaignModel:desModel.getModel()
    	};

    	// Controller public API
 		saveAndLoad.api={	
 			toJSON: 	toJSON,
 			fromJSON: 	fromJSON,

 			toObsidianPortalWiki: toObsidianPortalWiki
    	};

    	function toJSON(){
    		saveAndLoad.model.output=desModel.toJSON();
    	}

    	function fromJSON(){
    		saveAndLoad.model.importResult = desModel.fromJSON(saveAndLoad.model.input);
    		saveAndLoad.model.showImportMessage=true;
    	}

    	function toObsidianPortalWiki(){
    		saveAndLoad.model.output='toObsidianPortalWiki';
    	}
  }]);
