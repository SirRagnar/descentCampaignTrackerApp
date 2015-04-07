'use strict';

describe('Controller: SaveandloadCtrl', function () {

  // load the controller's module
  beforeEach(module('descentCampaignTrackerApp'));

  var SaveandloadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SaveandloadCtrl = $controller('SaveandloadCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
