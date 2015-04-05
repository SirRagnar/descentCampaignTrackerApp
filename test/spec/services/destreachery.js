'use strict';

describe('Service: desTreachery', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desTreachery;
  beforeEach(inject(function (_desTreachery_) {
    desTreachery = _desTreachery_;
  }));

  it('should do something', function () {
    expect(!!desTreachery).toBe(true);
  });

});
