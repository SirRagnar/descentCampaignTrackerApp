(function(angular,undefined){    
    'use strict';

    /**
     * @ngdoc function
     * @name descentCampaignTrackerApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the descentCampaignTrackerApp
     */
    angular.module('descentCampaignTrackerApp')
      .controller('MainCtrl', 
      [ '$scope','localStorageService',
        'desCamaignCons','desModel', 
        'desOverlord', 'desLieutenant', 'desMonster', 'desHero', 'desLocation', 'desCampaign',
      function ($scope, localStorageService,
                desCamaignCons, desModel, 
                desOverlord, desLieutenant, desMonster, desHero, desLocation, desCampaign) {
        
        var main=this;
        main.cons={
        	campaign: desCamaignCons
        };

        main.model = desModel.getModel();
        main.addInputs={
        	plotUpgrade:   desOverlord.newUpgrade(),
        	commonUpgrade: desOverlord.newUpgrade(),
        	lieutenant:    desLieutenant.newLieutenant(),
        	hero:          desHero.newHero(),
        	city:          desLocation.newCity(),
        	island:        desLocation.newIsland(),
        	dungeon:       desLocation.newDungeon()     
        };

        main.api = {
        	addPlotUpgrade:    addPlotUpgrade,    	
        	removePlotUpgrade: desOverlord.removePlotUpgrade.bind(undefined,desModel.getOverlord()),
        	
        	addCommonUpgrade: 	 addCommonUpgrade,
        	removeCommonUpgrade: desOverlord.removeCommonUpgrade.bind(undefined,desModel.getOverlord()),

        	addLieutenant: 		addLieutenant,
        	removeLieutenant: 	desLieutenant.removeLieutenant.bind(undefined,desModel.getLieutenants()),

        	modifyMonsterLevel: desMonster.modifyMonsterLevel,

        	addOverlordConquestTockens:     desOverlord.addOverlordConquestTockens.bind(
                                                                                    undefined,
                                                                                    desModel.getOverlord()), 
        	addOverlordSpentTockens:        desOverlord.addOverlordSpentTockens.bind(
                                                                                    undefined,
                                                                                    desModel.getOverlord()),
        	overlordAviableConquestTockens: desOverlord.overlordAviableConquestTockens
        											   .bind(undefined,desModel.getOverlord()),

        	increaseCurrentTreachery: 	desOverlord.increaseCurrentTreachery,
        	increaseMaxTreachery: 		desOverlord.increaseMaxTreachery,

        	addHero: 					addHero,
        	removeHero:                 desHero.removeHero.bind(undefined,desModel.getHeroParty()),
        	addHeroesConquestTockens:   desHero.addHeroesConquestTockens.bind(undefined,desModel.getHeroParty()),
        	addSpentHeroXP:             desHero.addSpentHeroXP.bind(undefined,desModel.getHeroParty()),
        	xpAviableHero:              desHero.xpAviableHero.bind(undefined,desModel.getHeroParty()),
        	
        	addCity: 			addCity,
        	removeCity: 		desLocation.removeCity.bind(undefined,desModel.getLocations()),
        	addCitySiegeTocken: desLocation.addCitySiegeTocken,
        	toggleCityRazed:    desLocation.toggleCityRazed,

        	addDungeon: 	addDungeon,
        	removeDungeon: 	desLocation.removeDungeon.bind(undefined,desModel.getLocations()),

        	addIsland:    addIsland,
        	removeIsland: desLocation.removeIsland.bind(undefined,desModel.getLocations()),

        	toggleAdvLocVisited:   desLocation.toggleAdvLocVisited,
        	toggleAdvLocConquered: desLocation.toggleAdvLocConquered,
        	toggleAdvLocFailed:    desLocation.toggleAdvLocFailed,

        	divineFavor: 			desCampaign.divineFavor.bind(undefined,
        														 desModel.getOverlord(),
        														 desModel.getHeroParty()),
        	totalCampaignTockens: 	desCampaign.totalCampaignTockens.bind(undefined,
        		                                                          desModel.getOverlord(),
        		                                                          desModel.getHeroParty()),
        	campaignLevel: 			desCampaign.campaignLevel.bind(undefined,
        		                                                   desModel.getOverlord(),
        		                                                   desModel.getHeroParty())
        };
        
        // Autosave on changes
        $scope.model=main.model;
        $scope.$watch(
          'model', 
          function(){
            desModel.saveModel();
          },
          true
        );

        function addPlotUpgrade(){ 
        	main.addInputs.plotUpgrade = _addItem( main.addInputs.plotUpgrade,
        		                                   desOverlord.addPlotUpgrade.bind(undefined,
        		                                   	                               desModel.getOverlord()),
        		                                   desOverlord.newUpgrade);
        }

        function addCommonUpgrade(){ 
        	main.addInputs.commonUpgrade = _addItem( main.addInputs.commonUpgrade,
        		                                     desOverlord.addCommonUpgrade.bind(undefined,
        		                                     	                               desModel.getOverlord()),
        		                                     desOverlord.newUpgrade);
        }

        function addLieutenant(){
        	main.addInputs.lieutenant = _addItem( main.addInputs.lieutenant,
        		                                  desLieutenant.addLieutenant.bind(undefined,desModel.getLieutenants()),
        		                                  desLieutenant.newLieutenant);
        }

        function addHero(){
        	main.addInputs.hero = _addItem( main.addInputs.hero,
        		                            desHero.addHero.bind(undefined,desModel.getHeroParty()),
        		                            desHero.newHero);
        }

        function addCity(){
        	main.addInputs.city = _addItem( main.addInputs.city,
        		                            desLocation.addCity.bind(undefined,desModel.getLocations()),
        		                            desLocation.newCity);
        }

        function addDungeon(){
        	main.addInputs.dungeon = _addItem( main.addInputs.dungeon,
        									   desLocation.addDungeon.bind(undefined,desModel.getLocations()),
        									   desLocation.newDungeon);
        }

        function addIsland(){
        	main.addInputs.island = _addItem( main.addInputs.island,
        									  desLocation.addIsland.bind(undefined,desModel.getLocations()),
        									  desLocation.newIsland);
        }

        /**
         * Add entity item with attribute name not null using an addItemToModelFunction 
         * if the name is not null. After that returns
         * a new instance of the entity.
         * If the name is null then returns de entity without adding the item to the model
         */
        function _addItem(item,addItemToModelFunction,newItemFunction){
        	if(item && angular.isDefined(item.name) && angular.isString(item.name) && item.name.length>0){
        		addItemToModelFunction(item);
        		return newItemFunction();
        	}else{
        		return item;
        	}

        }
      }]);
})(angular);