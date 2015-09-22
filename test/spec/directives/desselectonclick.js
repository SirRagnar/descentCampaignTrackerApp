'use strict';

describe('Directive: desSelectOnClick', function () {

  // load the directive's module
  beforeEach(module('descentCampaignTrackerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<des-select-on-click></des-select-on-click>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the desSelectOnClick directive');
  }));
});
