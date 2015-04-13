'use strict';

describe('Service: desModelControl', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desModelControl, control;
  beforeEach(inject(function (_desModelControl_) {
    desModelControl = _desModelControl_;
    control = desModelControl.newControl();
  }));

  it('New control should contain a version property', function () {    
    expect(control.version).toBeDefined();
  });

  it('New control should contain a numeric version property', function () {    
    expect(angular.isNumber(control.version)).toBe(true);
  });

  it('New control should contain an origin model version property', function () {    
    expect(control.originVersion).toBeDefined();
  });

  it('New control should contain an origin model numeric version property', function () {    
    expect(angular.isNumber(control.originVersion)).toBe(true);
  }); 

  it('Set originVersion should change origin version', function () { 
    desModelControl.setOriginVersion(control,7);
    expect(control.originVersion).toBe(7);

    desModelControl.setOriginVersion(control,9);
    expect(control.originVersion).toBe(9);
  });  

  it('Call newControl with parameters should result in informed version control', function () {    
    var customControl=desModelControl.newControl(0,0);
    expect(customControl.version).toBe(0);
    expect(customControl.originVersion).toBe(0);
  }); 

});
