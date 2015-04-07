'use strict';

describe('Service: overlord/desOverlord', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desOverlord;
  beforeEach(inject(function (_desOverlord_) {
    desOverlord = _desOverlord_;
  }));

  it('should do something', function () {
    expect(!!desOverlord).toBe(true);
  });

});
