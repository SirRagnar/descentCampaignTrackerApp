'use strict';

describe('Service: desModel', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desModel, newModel;
  beforeEach(inject(function (_desModel_) {
    desModel = _desModel_;
    newModel = desModel.getModel();
  }));

  it('model should contain a control attribute', function () {
    expect(newModel.control).toBeDefined();
  });

});
