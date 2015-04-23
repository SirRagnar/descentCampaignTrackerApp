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

  it('new control should contain a version property', function () {    
    expect(control.version).toBeDefined();
  });

  it('new control should contain a numeric version property', function () {    
    expect(angular.isNumber(control.version)).toBe(true);
  });

  it('new control should contain an origin model version property', function () {    
    expect(control.originVersion).toBeDefined();
  });

  it('new control should contain an origin model numeric version property', function () {    
    expect(angular.isNumber(control.originVersion)).toBe(true);
  });   

  it('set originVersion should change origin version', function () { 
    desModelControl.setOriginVersion(control,7);
    expect(control.originVersion).toBe(7);

    desModelControl.setOriginVersion(control,9);
    expect(control.originVersion).toBe(9);
  });  

  it('call newControl with Zero as parameters should result in zero informed version control', function () {    
    var customControl=desModelControl.newControl(0,0);
    expect(customControl.version).toBe(0);
    expect(customControl.originVersion).toBe(0);
  });   

  it('call newControl with 1 as parameters should result in 1 informed version control', function () {    
    var customControl=desModelControl.newControl(1,1);
    expect(customControl.version).toBe(1);
    expect(customControl.originVersion).toBe(1);
  });   

  it('call newControl with parameters should result in informed version control', function () {    
    var customControl=desModelControl.newControl(7,94);
    expect(customControl.version).toBe(94);
    expect(customControl.originVersion).toBe(7);
  }); 
});
