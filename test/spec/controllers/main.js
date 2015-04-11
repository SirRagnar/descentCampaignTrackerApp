'use strict';

describe('Controller: MainCtrl', function () {

  // PhantomJS doesn't support bind yet (from https://github.com/c9/smith/blob/master/tests/public/test.js#L2-L7)
  Function.prototype.bind = Function.prototype.bind || function (thisp) {
    var fn = this;
    return function () {
      return fn.apply(thisp, arguments);
    };
  };

  // load the controller's module
  beforeEach(module('descentCampaignTrackerApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('controller should be defined', function () {
    expect(MainCtrl).toBeDefined();
  });

  it('should expose campaign constants', function () {
    expect(MainCtrl.cons).toBeDefined();
  });

  it('should expose campaign model', function () {
    expect(MainCtrl.model).toBeDefined();
  });

  it('should expose list of inputs', function () {
    expect(MainCtrl.addInputs).toBeDefined();
  });

  it('should expose public api to the view', function () {
    expect(MainCtrl.api).toBeDefined();
  });

  it('private api of the controller shouldn\'t be exposed', function () {
    expect(MainCtrl._addItem).not.toBeDefined();
  });
});
