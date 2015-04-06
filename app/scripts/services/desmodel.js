'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desModel
 * @description
 * # desModel
 * Factory with the model services.
 */
angular.module('descentCampaignTrackerApp')
  .factory('desModel', ['desCore', 'desTreachery',function (desCore, desTreachery) {
    
    var model = {      
      overlord: { 
        name: '',
        plot: '',
        plotAdvances: [/*{ name: }*/],
        commonAdvances: [/*{name: }*/],
        conquestTockens:0,
        spentTockens:0,
        treachery:{
          traps:    desTreachery.newTreacheryCounter(),/*{current:0, max:0}*/
          events:   desTreachery.newTreacheryCounter(),
          monsters: desTreachery.newTreacheryCounter()
        }
      },
      lieutenants:[/*{name: '', location:'' }*/],
      monsterLevels:[
        {name: 'Humanoides', level: 1},
        {name: 'Bestias', level:1},
        {name: 'Arcanos', level:1}
      ],
      heroParty:{
        location: '',
        homePort: '',
        rumor:{name:'',location:''},
        heroes:[/*{name: '', xpSpent: 0}*/],
        conquestTockens:0
      },
      locations:{
        cities:[],
        dungeons:[],
        islands:[]
      }
    };


    // Public API 
    return {      
      getModel: getModel,
      
      newAdvance:          newAdvance,
      addPlotAdvance:      addPlotAdvance,
      removePlotAdvance:   removePlotAdvance,
      addCommonAdvance:    addCommonAdvance,
      removeCommonAdvance: removeCommonAdvance,

      newLieutenant:    newLieutenant,
      addLieutenant:    addLieutenant,
      removeLieutenant: removeLieutenant,

      modifyMonsterLevel: modifyMonsterLevel,

      addOverlordConquestTockens:       addOverlordConquestTockens, 
      addOverlordSpentTockens:          addOverlordSpentTockens,
      overlordAviableConquestTockens:   overlordAviableConquestTockens,

      newHero:                    newHero,
      addHero:                    addHero,
      removeHero:                 removeHero,
      addHeroesConquestTockens:   addHeroesConquestTockens,
      addSpentHeroXP:             addSpentHeroXP,
      xpAviableHero:              xpAviableHero,

      newCity:            newCity,
      addCity:            addCity,
      removeCity:         removeCity,
      addCitySiegeTocken: addCitySiegeTocken,
      toggleCityRazed:     toggleCityRazed,

      toggleAdvLocVisited:   toggleAdvLocVisited,
      toggleAdvLocConquered: toggleAdvLocConquered,
      toggleAdvLocFailed:    toggleAdvLocFailed,

      newDungeon:     newDungeon,
      addDungeon:     addDungeon,
      removeDungeon:  removeDungeon, 

      newIsland:    newIsland,
      addIsland:    addIsland,
      removeIsland: removeIsland,

      divineFavor:          divineFavor,
      totalCampaignTockens: totalCampaignTockens,
      campaignLevel:        campaignLevel
    };    

    function getModel() {
      return model;
    }

    function newAdvance(){
      return {name:''};
    }

    function  newLieutenant(){
      return {name: '', location: '', alive:true};
    }

    function newHero(){
      return { 
        name: '', 
        xpSpent:null
      };
    }

    function _newLocation(locationType){
      return {
        name: '',
        type: locationType
      };
    }

    function newCity(){
      var city = angular.extend({}, _newLocation('C'));
      city.siege=0;
      city.vault='';
      city.razed=false;
      return city;
    }

    function _newAdventureLocation(){
      var location = angular.extend({}, _newLocation('A'));
      location.visited=false;
      location.conquered=false;
      location.failed=false;
      return location;
    }

    function newIsland(){
      var island = _newAdventureLocation();
      island.levels=['',''];
      return island;
    }

    function newDungeon(){
      var dungeon = _newAdventureLocation();
      dungeon.levels=['','',''];
      return dungeon;
    }

    function addPlotAdvance(advance){
      model.overlord.plotAdvances.push(advance);
    }

    function removePlotAdvance(index){
      model.overlord.plotAdvances.splice(index, 1);
    }

    function addCommonAdvance(advance){
      model.overlord.commonAdvances.push(advance);
    }

    function removeCommonAdvance(index){
      model.overlord.commonAdvances.splice(index, 1);
    }

    function addLieutenant(lieutenant){
      model.lieutenants.push(lieutenant);
    }

    function removeLieutenant(index){
      model.lieutenants.splice(index, 1);
    }

    function modifyMonsterLevel(monsterLevel, amount){
      var currentLevel=(monsterLevel.level || 1);
      var amountNS = (amount || 0);
      var finalLevel = currentLevel + amount;
      if(finalLevel>=1 && finalLevel<=4){
        monsterLevel.level=finalLevel;
      }
    }

    function addOverlordConquestTockens(amount){
      var finalConquestTockens = (model.overlord.conquestTockens || 0) + (amount ||0);
      if(finalConquestTockens>=0){
        model.overlord.conquestTockens = finalConquestTockens;
      }
    }

    function addOverlordSpentTockens(amount){
      var finalSpentTockens = (model.overlord.spentTockens || 0) + (amount ||0);
      var overLordTockens=(model.overlord.conquestTockens || 0);
      if(finalSpentTockens>=0 && finalSpentTockens<=overLordTockens){
        model.overlord.spentTockens = finalSpentTockens;
      }
    }

    function overlordAviableConquestTockens(){
      return (model.overlord.conquestTockens || 0) - (model.overlord.spentTockens || 0);
    }


    function addHero(hero){
      hero.xpSpent = Math.max(0, (hero.xpSpent || 0));
      model.heroParty.heroes=desCore.orderAndAddNamedItemToArray(hero,model.heroParty.heroes);
    }

    function removeHero(index){
      model.heroParty.heroes.splice(index, 1);      
    }

    function addHeroesConquestTockens(amount){
      var finalConquestTockens = (model.heroParty.conquestTockens || 0) + (amount || 0);
      if(finalConquestTockens>=0){
        model.heroParty.conquestTockens = finalConquestTockens;
      }
    }

    function addSpentHeroXP(hero, amount){
      var finalXpSpent = (hero.xpSpent || 0 ) + (amount || 0);
      var heroPartyConquestTockens = (model.heroParty.conquestTockens || 0 );      
      if(finalXpSpent>=0 && finalXpSpent<=heroPartyConquestTockens ){
        hero.xpSpent = finalXpSpent;
      }
    }

    function xpAviableHero(hero){
      return (model.heroParty.conquestTockens || 0) - (hero.xpSpent||0); 
    }

    function addCity(city){
      city.siege = Math.max(0, (city.siege || 0));

      model.locations.cities.push(city);
    }

    function removeCity(index){
      model.locations.cities.splice(index, 1);
    }

    function addCitySiegeTocken(city, amount){
      var finalCitySiegetockens = (city.siege || 0) + (amount || 0);

      if(finalCitySiegetockens>=0){
        city.siege = finalCitySiegetockens;
      }
    }

    function toggleCityRazed(city){
      city.razed=(!city.razed);
    }


    function toggleAdvLocVisited(location,flag){
        if(!location.conquered && !location.failed){
          location.visited=flag;
        }
    }

    function toggleAdvLocConquered(location,flag){
      if(location.visited && !location.failed){
        location.conquered=flag;
      }
    }
    
    function toggleAdvLocFailed(location,flag){
      if(location.visited && !location.conquered){
        location.failed=flag;
      }
    }

    function addDungeon(dungeon){
      model.locations.dungeons.push(dungeon);
    }

    function removeDungeon(index){
      model.locations.dungeons.splice(index, 1);
    }

    function addIsland(island){
      model.locations.islands.push(island);
    }

    function removeIsland(index){
      model.locations.islands.splice(index, 1);
    }

    function divineFavor(){      
      /*
      For every full 25 conquest tokens the heroes’ conquest total
      is below the overlord’s total, each hero’s conquest value is
      reduced by 1, to a minimum of 0

      On the other hand, for every full 25 conquest tokens the
      heroes’ total is above the overlord’s total, the overlord’s
      conquest value is increased by 1
      */
      var overLordTockens = (model.overlord.conquestTockens || 0);
      var heroesTockens = (model.heroParty.conquestTockens || 0 ); 
      var difference = Math.abs(overLordTockens - heroesTockens);
      var sign=1;
      if(overLordTockens>heroesTockens){
        sign=-1;
      }
      var df = Math.floor(difference/25)*sign;
      return df;
    }

    function totalCampaignTockens(){
      var heroPartyConquestTockens = (model.heroParty.conquestTockens || 0 );
      var overLordTockens=(model.overlord.conquestTockens || 0);
      return heroPartyConquestTockens + overLordTockens;
    }

    function campaignLevel(){
      var level='Cobre';
      var totalTockens = totalCampaignTockens();
      if(totalTockens>=200){
        level='Plata';
      }else if(totalTockens>=400){
        level='Oro';
      }else if(totalTockens>=600){
        level='Oro - Batalla final';
      }
      return level;
    }
  }]);
