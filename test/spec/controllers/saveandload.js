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

  it('should have a model with an empty output', function () {
    expect(SaveandloadCtrl.model.output).toBe('');
  });
});
