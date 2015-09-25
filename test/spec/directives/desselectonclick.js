'use strict';

describe('Directive: desSelectOnClick', function () {

  // load the directive's module
  beforeEach(module('descentCampaignTrackerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should have an ng-scope class', inject(function ($compile) {
    element = angular.element('<pre des-select-on-click>my text</pre>');
    element = $compile(element)(scope);
    expect(element.hasClass('ng-scope')).toBeTruthy();
  }));

  it('on click the text should have selected text custom attribute', inject(function ($compile) {
    element = angular.element('<pre des-select-on-click>my text</pre>');
    element = $compile(element)(scope);
    element.triggerHandler('click');
    expect(element.attr('data-selected-text')).toBeDefined();
  }));
});
