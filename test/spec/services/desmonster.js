'use strict';

describe('Service: desMonster', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desMonster;
  beforeEach(inject(function (_desMonster_) {
    desMonster = _desMonster_;
  }));

  it('should do something', function () {
    expect(!!desMonster).toBe(true);
  });

});
