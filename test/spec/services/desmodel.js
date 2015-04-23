'use strict';

describe('Service: desModel', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desModel, desCamaignCons, desModelControl, newModel;
  beforeEach(inject(function (_desModel_,_desCamaignCons_,_desModelControl_) {
    desModel = _desModel_;
    desCamaignCons=_desCamaignCons_;
    desModelControl=_desModelControl_;
    newModel = desModel.getModel();
  }));

  it('model should contain a control attribute', function () {
    expect(newModel.control).toBeDefined();
  });

  it('empty JSON object should be succesfully imported', function () {
    var result = desModel.fromJSON('{}');
    expect(result).toBeDefined();
    expect(result.success).toBe(true);
  });

  it('model updated from zero to one version should have '+
     'a control atribute with zero origin version and current in the '+
     'current version', 
     function(){
      var oldModel='{}';
      desModel.fromJSON(oldModel);
      var model = desModel.getModel();

      expect(model.control.version).toBeDefined();
      expect(model.control.originVersion).toBeDefined();

      expect(model.control.version).toBe(desCamaignCons.CURRENT_MODEL_VERSION);
      expect(model.control.originVersion).toBe(0);

  });
});
