'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desLocation
 * @description
 * # desLocation
 * Factory for descent location API.
 */
angular.module('descentCampaignTrackerApp')
  .factory('desLocation', 
    ['desCore',
    function (desCore) {
    
    return {
      newLocations:       newLocations,

      newCity:            newCity,
      addCity:            addCity,
      removeCity:         removeCity,
      addCitySiegeTocken: addCitySiegeTocken,
      toggleCityRazed:    toggleCityRazed,
      cityState:          cityState,
      
      adventureLocationState: adventureLocationState,

      newDungeon:     newDungeon,
      addDungeon:     addDungeon,
      removeDungeon:  removeDungeon,

      newIsland:    newIsland,
      addIsland:    addIsland,
      removeIsland: removeIsland,

      toggleAdvLocVisited:   toggleAdvLocVisited,
      toggleAdvLocConquered: toggleAdvLocConquered,
      toggleAdvLocFailed:    toggleAdvLocFailed
    };

    function newLocations(){
      return {
        cities:[],
        dungeons:[],
        islands:[]        
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


    function addCity(locations, city){
      city.siege = Math.max(0, (city.siege || 0));
      locations.cities=desCore.orderAndAddNamedItemToArray(locations.cities,city);
    }

    function removeCity(locations, index){
      locations.cities.splice(index, 1);
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

    function cityState(city){
      var state;
      if(angular.isUndefined(city) || !angular.isObject(city)){
        state='UNKNOWN';
      }else if(city.razed){
        state='RAZED';
      }else if(city.siege===0){
        state='FREE';
      }else if(city.siege>0){
        state='SIEGED';
      }else{
        state='UNKNOWN';
      }
      return state;
    }

    function adventureLocationState(adventureLocation){
      var state;
      /*      
      'LOCATION_UNKNOWN': 'Unknown',
      'LOCATION_VISITED': 'Visited',
      'LOCATION_CONQUERED': 'Conquered',
      'LOCATION_DEFEAT': 'Defeat'
      */
      if(angular.isUndefined(adventureLocation) || !angular.isObject(adventureLocation)){
        state='UNKNOWN';
      }
      return state;
    }

    function addDungeon(locations,dungeon){
      locations.dungeons=desCore.orderAndAddNamedItemToArray(locations.dungeons,dungeon);
    }

    function removeDungeon(locations,index){
      locations.dungeons.splice(index,1);
    }

    function addIsland(locations,island){
      locations.islands=desCore.orderAndAddNamedItemToArray(locations.islands,island);
    }

    function removeIsland(locations,index){
      locations.islands.splice(index,1);
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

  }]);
