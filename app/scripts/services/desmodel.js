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
      getModel: getModel
    };    

    function getModel() {
      return model;
    }
  }]);
