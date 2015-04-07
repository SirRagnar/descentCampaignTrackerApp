'use strict';

describe('Service: desHero', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desHero;
  beforeEach(inject(function (_desHero_) {
    desHero = _desHero_;
  }));

  it('should do something', function () {
    expect(!!desHero).toBe(true);
  });

});
