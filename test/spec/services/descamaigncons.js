'use strict';

describe('Service: desCamaignCons', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desCamaignCons;
  beforeEach(inject(function (_desCamaignCons_) {
    desCamaignCons = _desCamaignCons_;
  }));

  it('should do something', function () {
    expect(!!desCamaignCons).toBe(true);
  });

});
