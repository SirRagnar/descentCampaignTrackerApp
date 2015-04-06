'use strict';

describe('Service: desCore', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desCore;
  beforeEach(inject(function (_desCore_) {
    desCore = _desCore_;
  }));

  it('should do something', function () {
    expect(!!desCore).toBe(true);
  });

});
