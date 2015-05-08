'use strict';

describe('Filter: desLocationStateClass', function () {

  // load the filter's module
  beforeEach(module('descentCampaignTrackerApp'));

  // initialize a new instance of the filter before each test
  var desLocationStateClass,desLocation,island,dungeon;
  beforeEach(inject(['$filter','desLocation',function ($filter,_desLocation_) {
    desLocationStateClass = $filter('desLocationStateClass');
    desLocation=_desLocation_;
    island=desLocation.newIsland();
    dungeon=desLocation.newDungeon();
  }]));

 it('undefined adventure state class should be label-default', function () {
    var undefinedLocation;
    expect(desLocationStateClass(undefinedLocation)).toBe('label-default');
    
  });

 it('empty adventure state calss should be label-default', function () {
    var emptyLocation={};
    expect(desLocationStateClass(emptyLocation)).toBe('label-default');
  });

 it('non visited island class should be label-default', function () {
    island.visited=false;
    expect(desLocationStateClass(island)).toBe('label-default');
  });

 it('non visited dungeon class should be label-default', function () {
    dungeon.visited=false;
    expect(desLocationStateClass(dungeon)).toBe('label-default');
  });

 it('visited, not conquered and not failed island class should be label-primary', function () {
    island.visited=true;
    island.conquered=false;
    island.failed=false;
    expect(desLocationStateClass(island)).toBe('label-primary');
  });

 it('visited, not conquered and not failed dungeon class should be label-primary', function () {
    dungeon.visited=true;
    dungeon.conquered=false;
    dungeon.failed=false;
    expect(desLocationStateClass(dungeon)).toBe('label-primary');
  });

 it('visited, and conquered island class should be label-success', function () {
    island.visited=true;
    island.conquered=true;
    island.failed=false;
    expect(desLocationStateClass(island)).toBe('label-success');
  });

 it('visited, and conquered dungeon class should be label-success', function () {
    dungeon.visited=true;
    dungeon.conquered=true;
    dungeon.failed=false;
    expect(desLocationStateClass(dungeon)).toBe('label-success');
  });

 it('visited, and failed island class should be label-danger', function () {
    island.visited=true;
    island.conquered=false;
    island.failed=true;
    expect(desLocationStateClass(island)).toBe('label-danger');
  });

 it('visited, and failed dungeon class should be label-danger', function () {
    dungeon.visited=true;
    dungeon.conquered=false;
    dungeon.failed=true;
    expect(desLocationStateClass(dungeon)).toBe('label-danger');
  });

});
