'use strict';

describe('Service: desLieutenant', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desLieutenant;
  beforeEach(inject(function (_desLieutenant_) {
    desLieutenant = _desLieutenant_;
  }));

  it('should do something', function () {
    expect(!!desLieutenant).toBe(true);
  });

});
