'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desModel
 * @description
 * # desModel
 * Factory with the model services.
 */
angular.module('descentCampaignTrackerApp')
  .factory('desModel', 
    [          'desCore', 'desOverlord', 'desLieutenant', 'desMonster', 'desHero', 'desLocation', 
    function ( desCore,    desOverlord,   desLieutenant,   desMonster,   desHero,   desLocation) {
    
    var model = {      
      overlord: desOverlord.newOverlord(),
                  /*{ 
                    name: '',
                    plot: '',
                    plotUpgrades: [{ name: '' }],
                    commonUpgrades: [{name: '' }],
                    conquestTockens:0,
                    spentTockens:0,
                    treachery:{
                      traps:    {current:0, max:0},
                      events:   {current:0, max:0},
                      monsters: {current:0, max:0}
                    }
                  }*/
      lieutenants: desLieutenant.newLieutenants(), //[{name: '', location:'' }]
      monsterLevels: desMonster.newMonsterLevels(),
                      /*[
                        {name: 'Humanoides', level: 1},
                        {name: 'Bestias', level:1},
                        {name: 'Arcanos', level:1}
                      ]*/
      heroParty: desHero.newHeroParty(),
                  /*{
                    location: '',
                    homePort: '',
                    rumor:{name:'',location:''},
                    heroes:[{name: '', xpSpent: 0}],
                    conquestTockens:0
                  }*/
      locations: desLocation.newLocations(),
                  /*
                  {
                    cities:[],
                    dungeons:[],
                    islands:[]
                  }
                  */
    };


    // Public API 
    return {      
      getModel: getModel,

      divineFavor:          divineFavor,
      totalCampaignTockens: totalCampaignTockens,
      campaignLevel:        campaignLevel
    };    

    function getModel() {
      return model;
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
