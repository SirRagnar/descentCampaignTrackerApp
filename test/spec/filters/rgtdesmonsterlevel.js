'use strict';

describe('Filter: rgtDesMonsterLevel', function () {

  // load the filter's module
  beforeEach(module('descentCampaignTrackerApp'));

  // initialize a new instance of the filter before each test
  var rgtDesMonsterLevel;
  beforeEach(inject(function ($filter) {
    rgtDesMonsterLevel = $filter('rgtDesMonsterLevel');
  }));

  it('should return the input prefixed with "rgtDesMonsterLevel filter:"', function () {
    var text = 'angularjs';
    expect(rgtDesMonsterLevel(text)).toBe('rgtDesMonsterLevel filter: ' + text);
  });

});
