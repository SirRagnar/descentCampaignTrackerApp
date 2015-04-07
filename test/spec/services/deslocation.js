'use strict';

describe('Service: desLocation', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desLocation;
  beforeEach(inject(function (_desLocation_) {
    desLocation = _desLocation_;
  }));

  it('should do something', function () {
    expect(!!desLocation).toBe(true);
  });

});
