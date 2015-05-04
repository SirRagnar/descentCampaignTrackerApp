'use strict';

describe('Service: desLocation', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desLocation, newCity,island,dungeon;
  beforeEach(inject(function (_desLocation_) {
    desLocation = _desLocation_;
    newCity = desLocation.newCity();
    island=desLocation.newIsland();
    dungeon=desLocation.newDungeon();
  }));

  it('new city state should be free', function () {
    expect(desLocation.cityState(newCity)).toBe('FREE');
  });

  it('city with siege tockens shoul be sieged', function () {
    var siegedCity = newCity;
    siegedCity.siege=7;
    expect(desLocation.cityState(siegedCity)).toBe('SIEGED');
  });

  it('city with razed flag true tockens shoul be razed', function () {
    var razedCity = newCity;
    razedCity.razed=true;
    expect(desLocation.cityState(razedCity)).toBe('RAZED');
  });

  it('undefined city state should be unkown', function () {
    var undefinedCity;
    expect(desLocation.cityState(undefinedCity)).toBe('UNKNOWN');
  });

  it('empty city state should be unkown', function () {
    var emptyCity={};
    expect(desLocation.cityState(emptyCity)).toBe('UNKNOWN');
  });

  it('wrong type city state should be unkown', function () {
    var wrongTypeCity=8;
    expect(desLocation.cityState(wrongTypeCity)).toBe('UNKNOWN');
  });

 it('undefined adventure state should be unkown', function () {
    var undefinedLocation;
    expect(desLocation.adventureLocationState(undefinedLocation)).toBe('LOCATION_UNKNOWN');
  });

 it('empty adventure state should be unkown', function () {
    var emptyLocation={};
    expect(desLocation.adventureLocationState(emptyLocation)).toBe('LOCATION_UNKNOWN');
  });

 it('non visited island should be unknown', function () {
    island.visited=false;
    expect(desLocation.adventureLocationState(island)).toBe('LOCATION_UNKNOWN');
  });

 it('non visited dungeon should be unknown', function () {
    dungeon.visited=false;
    expect(desLocation.adventureLocationState(dungeon)).toBe('LOCATION_UNKNOWN');
  });

 it('visited, not conquered and not failed island should be visited', function () {
    island.visited=true;
    island.conquered=false;
    island.failed=false;
    expect(desLocation.adventureLocationState(island)).toBe('LOCATION_VISITED');
  });

 it('visited, not conquered and not failed dungeon should be visited', function () {
    dungeon.visited=true;
    dungeon.conquered=false;
    dungeon.failed=false;
    expect(desLocation.adventureLocationState(dungeon)).toBe('LOCATION_VISITED');
  });

 it('visited, and conquered island should be conquered', function () {
    island.visited=true;
    island.conquered=true;
    island.failed=false;
    expect(desLocation.adventureLocationState(island)).toBe('LOCATION_CONQUERED');
  });

 it('visited, and conquered dungeon should be conquered', function () {
    dungeon.visited=true;
    dungeon.conquered=true;
    dungeon.failed=false;
    expect(desLocation.adventureLocationState(dungeon)).toBe('LOCATION_CONQUERED');
  });

 it('visited, and failed island should be defeat', function () {
    island.visited=true;
    island.conquered=false;
    island.failed=true;
    expect(desLocation.adventureLocationState(island)).toBe('LOCATION_DEFEAT');
  });

 it('visited, and failed dungeon should be defeat', function () {
    dungeon.visited=true;
    dungeon.conquered=false;
    dungeon.failed=true;
    expect(desLocation.adventureLocationState(dungeon)).toBe('LOCATION_DEFEAT');
  });

});
