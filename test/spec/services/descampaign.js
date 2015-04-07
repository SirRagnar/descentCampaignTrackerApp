'use strict';

describe('Service: desCampaign', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desCampaign;
  beforeEach(inject(function (_desCampaign_) {
    desCampaign = _desCampaign_;
  }));

  it('should do something', function () {
    expect(!!desCampaign).toBe(true);
  });

});
