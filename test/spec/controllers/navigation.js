'use strict';

describe('Controller: NavigationCtrl', function () {

  // load the controller's module
  beforeEach(module('descentCampaignTrackerApp'));

  var NavigationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavigationCtrl = $controller('NavigationCtrl', {
      $scope: scope
    });
  }));

  it('should hava an api object', function () {
    expect(NavigationCtrl.api).toBeDefined();
  });
});
