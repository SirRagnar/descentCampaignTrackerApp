'use strict';

describe('Filter: desAdventureLocationStateClass', function () {

  // load the filter's module
  beforeEach(module('descentCampaignTrackerApp'));

  // initialize a new instance of the filter before each test
  var desAdventureLocationStateClass,desLocation,island,dungeon;
  beforeEach(inject(['$filter','desLocation',function ($filter,_desLocation_) {
    desAdventureLocationStateClass = $filter('desAdventureLocationStateClass');
    desLocation=_desLocation_;
    island=desLocation.newIsland();
    dungeon=desLocation.newDungeon();
  }]));

 it('undefined adventure state class should be label-default', function () {
    var undefinedLocation;
    expect(desAdventureLocationStateClass(undefinedLocation)).toBe('label-default');
    
  });

 it('empty adventure state calss should be label-default', function () {
    var emptyLocation={};
    expect(desAdventureLocationStateClass(emptyLocation)).toBe('label-default');
  });

 it('non visited island class should be label-default', function () {
    island.visited=false;
    expect(desAdventureLocationStateClass(island)).toBe('label-default');
  });

 it('non visited dungeon class should be label-default', function () {
    dungeon.visited=false;
    expect(desAdventureLocationStateClass(dungeon)).toBe('label-default');
  });

 it('visited, not conquered and not failed island class should be label-primary', function () {
    island.visited=true;
    island.conquered=false;
    island.failed=false;
    expect(desAdventureLocationStateClass(island)).toBe('label-primary');
  });

 it('visited, not conquered and not failed dungeon class should be label-primary', function () {
    dungeon.visited=true;
    dungeon.conquered=false;
    dungeon.failed=false;
    expect(desAdventureLocationStateClass(dungeon)).toBe('label-primary');
  });

 it('visited, and conquered island class should be label-success', function () {
    island.visited=true;
    island.conquered=true;
    island.failed=false;
    expect(desAdventureLocationStateClass(island)).toBe('label-success');
  });

 it('visited, and conquered dungeon class should be label-success', function () {
    dungeon.visited=true;
    dungeon.conquered=true;
    dungeon.failed=false;
    expect(desAdventureLocationStateClass(dungeon)).toBe('label-success');
  });

 it('visited, and failed island class should be label-danger', function () {
    island.visited=true;
    island.conquered=false;
    island.failed=true;
    expect(desAdventureLocationStateClass(island)).toBe('label-danger');
  });

 it('visited, and failed dungeon class should be label-danger', function () {
    dungeon.visited=true;
    dungeon.conquered=false;
    dungeon.failed=true;
    expect(desAdventureLocationStateClass(dungeon)).toBe('label-danger');
  });

});
