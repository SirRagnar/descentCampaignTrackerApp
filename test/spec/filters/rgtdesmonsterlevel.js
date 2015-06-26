'use strict';

describe('Filter: rgtDesMonsterLevel', function () {

  // load the filter's module
  beforeEach(module('descentCampaignTrackerApp'));

  // initialize a new instance of the filter before each test
  var rgtDesMonsterLevel;
  beforeEach(inject(['$filter', '$translate', function ($filter,$translate) {
    rgtDesMonsterLevel = $filter('rgtDesMonsterLevel');
    $translate.use('es');
  }]));

  it('first level should be cooper "rgtDesMonsterLevel filter:"', function () {
    var monsterLevel = {level: 1};
    expect(rgtDesMonsterLevel(monsterLevel)).toBe('Cobre');
  });

  it('second level should be silver "rgtDesMonsterLevel filter:"', function () {
    var monsterLevel = {level: 2};
    expect(rgtDesMonsterLevel(monsterLevel)).toBe('Plata');
  });

  it('third level should be gold "rgtDesMonsterLevel filter:"', function () {
    var monsterLevel = {level: 3};
    expect(rgtDesMonsterLevel(monsterLevel)).toBe('Oro');
  });

  it('fourth level should be diamond "rgtDesMonsterLevel filter:"', function () {
    var monsterLevel = {level: 4};
    expect(rgtDesMonsterLevel(monsterLevel)).toBe('Diamante');
  });

});
