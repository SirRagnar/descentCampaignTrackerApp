'use strict';

describe('Service: desModel', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desModel;
  beforeEach(inject(function (_desModel_) {
    desModel = _desModel_;
  }));

  it('should do something', function () {
    expect(!!desModel).toBe(true);
  });

});
