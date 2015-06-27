'use strict';

describe('Service: desNavigation', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desNavigation;
  beforeEach(inject(function (_desNavigation_) {
    desNavigation = _desNavigation_;
  }));

  it('should have an isPathActive function', function () {
    expect(angular.isFunction(desNavigation.isPathActive)).toBe(true);
  });

});
