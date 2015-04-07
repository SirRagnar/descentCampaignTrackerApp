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
  ['desCamaignCons','desModel', 'desOverlord', 'desLieutenant', 'desMonster', 'desHero', 'desLocation',
  function (desCamaignCons, desModel, desOverlord, desLieutenant, desMonster, desHero, desLocation) {
    var main=this;
    main.cons={
    	campaign: desCamaignCons
    };

    main.model = angular.extend({},desModel.getModel());
    main.addInputs={
    	plotAdvance:   desModel.newAdvance(),
    	commonAdvance: desModel.newAdvance(),
    	lieutenant:    desLieutenant.newLieutenant(),
    	hero:          desHero.newHero(),
    	city:          desLocation.newCity(),
    	island:        desLocation.newIsland(),
    	dungeon:       desLocation.newDungeon()     
    };

    main.api = {
    	addPlotAdvance:    addPlotAdvance,    	
    	removePlotAdvance: desModel.removePlotAdvance,
    	
    	addCommonAdvance: 	 addCommonAdvance,
    	removeCommonAdvance: desModel.removeCommonAdvance,

    	addLieutenant: 		addLieutenant,
    	removeLieutenant: 	desLieutenant.removeLieutenant.bind(undefined,main.model.lieutenants),

    	modifyMonsterLevel: desMonster.modifyMonsterLevel,

      	addOverlordConquestTockens:     desOverlord.addOverlordConquestTockens.bind(undefined,main.model.overlord), 
      	addOverlordSpentTockens:        desOverlord.addOverlordSpentTockens.bind(undefined,main.model.overlord),
      	overlordAviableConquestTockens: desOverlord.overlordAviableConquestTockens
      											   .bind(undefined,main.model.overlord),

      	increaseCurrentTreachery: 	desOverlord.increaseCurrentTreachery,
      	increaseMaxTreachery: 		desOverlord.increaseMaxTreachery,

    	addHero: 					addHero,
    	removeHero:                 desHero.removeHero.bind(undefined,main.model.heroParty),
      	addHeroesConquestTockens:   desHero.addHeroesConquestTockens.bind(undefined,main.model.heroParty),
      	addSpentHeroXP:             desHero.addSpentHeroXP.bind(undefined,main.model.heroParty),
      	xpAviableHero:              desHero.xpAviableHero.bind(undefined,main.model.heroParty),
      	
      	addCity: 			addCity,
      	removeCity: 		desLocation.removeCity.bind(undefined,main.model.locations.cities),
      	addCitySiegeTocken: desLocation.addCitySiegeTocken,
      	toggleCityRazed:    desLocation.toggleCityRazed,

      	addDungeon: 	addDungeon,
      	removeDungeon: 	desLocation.removeDungeon.bind(undefined,main.model.locations.dungeons),

      	addIsland:    addIsland,
      	removeIsland: desLocation.removeIsland.bind(undefined,main.model.locations.islands),

      	toggleAdvLocVisited:   desLocation.toggleAdvLocVisited,
      	toggleAdvLocConquered: desLocation.toggleAdvLocConquered,
      	toggleAdvLocFailed:    desLocation.toggleAdvLocFailed,

    	divineFavor: 			desModel.divineFavor,
    	totalCampaignTockens: 	desModel.totalCampaignTockens,
    	campaignLevel: 			desModel.campaignLevel
    };

    function addPlotAdvance(){ 
    	main.addInputs.plotAdvance = _addItem( main.addInputs.plotAdvance,
    		                                   desModel.addPlotAdvance,
    		                                   desModel.newAdvance);
    }

    function addCommonAdvance(){ 
    	main.addInputs.commonAdvance = _addItem( main.addInputs.commonAdvance,
    		                                     desModel.addCommonAdvance,
    		                                     desModel.newAdvance);
    }

    function addLieutenant(){
    	main.addInputs.lieutenant = _addItem( main.addInputs.lieutenant,
    		                                  desLieutenant.addLieutenant.bind(undefined,main.model.lieutenants),
    		                                  desLieutenant.newLieutenant);
    }

    function addHero(){
    	main.addInputs.hero = _addItem( main.addInputs.hero,
    		                            desHero.addHero.bind(undefined,main.model.heroParty),
    		                            desHero.newHero);
    }

    function addCity(){
    	main.addInputs.city = _addItem( main.addInputs.city,
    		                            desLocation.addCity.bind(undefined,main.model.locations.cities),
    		                            desLocation.newCity);
    }

    function addDungeon(){
    	main.addInputs.dungeon = _addItem( main.addInputs.dungeon,
    									   desLocation.addDungeon.bind(undefined,main.model.locations.dungeons),
    									   desLocation.newDungeon);
    }

    function addIsland(){
    	main.addInputs.island = _addItem( main.addInputs.island,
    									  desLocation.addIsland.bind(undefined,main.model.locations.islands),
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
