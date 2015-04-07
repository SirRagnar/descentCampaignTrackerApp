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

      newDungeon:     newDungeon,
      addDungeon:     addAdventureLocation,
      removeDungeon:  removeAdventureLocation,

      newIsland:    newIsland,
      addIsland:    addAdventureLocation,
      removeIsland: removeAdventureLocation,

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


    function addCity(cities, city){
      city.siege = Math.max(0, (city.siege || 0));
      cities.push(city);
    }

    function removeCity(cities, index){
      cities.splice(index, 1);
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

    function addAdventureLocation(adventureLocationList, adventureLocation){
      adventureLocationList.push(adventureLocation);
    }

    function removeAdventureLocation(adventureLocationList, index){
      adventureLocationList.splice(index,1);
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
