'use strict';

describe('Directive: desSelectOnClick', function () {

  // load the directive's module
  beforeEach(module('descentCampaignTrackerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should have an onclick function after compile', inject(function ($compile) {
    element = angular.element('<pre des-select-on-click>my text</pre>');
    element = $compile(element)(scope);
    console.log(element);
    expect(element.hasClass('ng-scope')).toBeTruthy();
  }));
});
