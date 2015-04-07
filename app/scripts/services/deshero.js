'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desHero
 * @description
 * # desHero
 * Factory API for Hero party management
 */
angular.module('descentCampaignTrackerApp')
  .factory('desHero', 
    ['desCore', function (desCore) {
    
    return {
      newHeroParty:             newHeroParty,
      newHero:                  newHero,
      addHero:                  addHero,
      removeHero:               removeHero,
      addSpentHeroXP:           addSpentHeroXP,
      xpAviableHero:            xpAviableHero,
      addHeroesConquestTockens: addHeroesConquestTockens
    };

    function newHeroParty(){
      return {
        location: '',
        homePort: '',
        rumor:{name:'',location:''},
        heroes:[/*{name: '', xpSpent: 0}*/],
        conquestTockens:0
      };
    }

    function newHero(){
      return { 
        name: '', 
        xpSpent:null
      };
    }

    function addHero(heroParty,hero){
      hero.xpSpent = Math.max(0, (hero.xpSpent || 0));
      heroParty.heroes=desCore.orderAndAddNamedItemToArray(hero,heroParty.heroes);
    }

    function removeHero(heroParty,index){
      heroParty.heroes.splice(index, 1);      
    }

    function addSpentHeroXP(heroParty,hero,amount){
      var finalXpSpent = (hero.xpSpent || 0 ) + (amount || 0);
      var heroPartyConquestTockens = (heroParty.conquestTockens || 0 );      
      if(finalXpSpent>=0 && finalXpSpent<=heroPartyConquestTockens ){
        hero.xpSpent = finalXpSpent;
      }
    }

    function xpAviableHero(heroParty,hero){
      return (heroParty.conquestTockens || 0) - (hero.xpSpent||0); 
    }

    function addHeroesConquestTockens(heroParty,amount){
      var finalConquestTockens = (heroParty.conquestTockens || 0) + (amount || 0);
      if(finalConquestTockens>=0){
        heroParty.conquestTockens = finalConquestTockens;
      }
    }


  }]);
