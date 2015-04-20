'use strict';

describe('Directive: desRedClothCampaignModel', function () {

  // load the directive's module
  beforeEach(module('descentCampaignTrackerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope,_desModel_) {
    scope = $rootScope.$new();
    scope.model = _desModel_.getModel();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<des-red-cloth-campaign-model data-model="scope.model"></des-red-cloth-campaign-model>');
    element = $compile(element)(scope);
    //Implementation in progress expect(element.text()).toBe('this is the desRedClothCampaignModel directive');
  }));
});
