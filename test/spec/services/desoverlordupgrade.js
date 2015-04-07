'use strict';

describe('Service: desOverlordUpgrade', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desOverlordUpgrade;
  beforeEach(inject(function (_desOverlordUpgrade_) {
    desOverlordUpgrade = _desOverlordUpgrade_;
  }));

  it('should do something', function () {
    expect(!!desOverlordUpgrade).toBe(true);
  });

});
