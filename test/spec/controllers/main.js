'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('descentCampaignTrackerApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, localStorageService,
            desCamaignCons, desModel, desOverlord, desLieutenant, desMonster, desHero, desLocation, desCampaign) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      localStorageService: localStorageService,
      desCamaignCons: desCamaignCons, 
      desModel: desModel, 
      desOverlord: desOverlord, 
      desLieutenant: desLieutenant, 
      desMonster: desMonster, 
      desHero: desHero, 
      desLocation: desLocation, 
      desCampaign: desCampaign
    });
  }));

  it('should expose campaign constants', function () {
    expect(MainCtrl).to.have.property(cons);
  });
});
