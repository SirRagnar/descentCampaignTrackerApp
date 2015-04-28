'use strict';

describe('Filter: rgtDesMonsterTypeName', function () {

  // load the filter's module
  beforeEach(module('descentCampaignTrackerApp'));

  // initialize a new instance of the filter before each test
  var rgtDesMonsterTypeName,translate,desCamaignCons;
  beforeEach(inject(['$filter', '$translate', 'desCamaignCons', function ($filter,$translate,_desCamaignCons_) {
    rgtDesMonsterTypeName = $filter('rgtDesMonsterTypeName');
    translate=$translate;
    desCamaignCons=_desCamaignCons_;
  }]));

  it('humanoid type name should be Humanoids:"', function () {
    var monsterType = 'H';
    expect(rgtDesMonsterTypeName(monsterType)).toBe(translate.instant('HUMANOIDS'));
  });

  it('beasts type name should be Beasts:', function () {
    var monsterType = 'B';
    expect(rgtDesMonsterTypeName(monsterType)).toBe(translate.instant('BEASTS'));
  });

  it('eldrich type name should be Eldritch:', function () {
    var monsterType = 'E';
    expect(rgtDesMonsterTypeName(monsterType)).toBe(translate.instant('ELDRITCH'));
  });

  it('null monster type name should be unkown', function(){
    var monsterType;
    expect(rgtDesMonsterTypeName(monsterType)).toBe(translate.instant('MONSTER_TYPE_UNKNOWN'));
  });

  it('arbitrary monster type name should be unkown', function(){
    var monsterType='JSLFJLKSJ';
    expect(rgtDesMonsterTypeName(monsterType)).toBe(translate.instant('MONSTER_TYPE_UNKNOWN'));
  });
});
