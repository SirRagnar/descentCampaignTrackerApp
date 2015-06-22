'use strict';

describe('Service: desSettings', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));

  // instantiate service
  var desSettings;
  beforeEach(inject(function (_desSettings_) {
    desSettings = _desSettings_;
  }));

  it('getModel should return an object', function () {
    expect(angular.isObject(desSettings.getModel())).toBe(true);
  });
  
  it('loadModel should be an object', function () { 
    expect(angular.isObject(desSettings.loadModel())).toBe(true);
  });
  
  it('loadModel should contain appLang', function () { 
    var model = desSettings.loadModel();
    expect(angular.isString(model.appLang)).toBe(true);

    expect(angular.isString(desSettings.getModel().appLang)).toBe(true);
  });
  
  it('after loadModel, change appLang and save model, load model should return the new appLang', function () { 
    var model =desSettings.loadModel();
    model.appLang='tt';
    desSettings.saveModel();
    model = desSettings.loadModel();
    expect(model.appLang).toBe('tt');
  });
  
  it('languages list sould return an object', function () {
    expect(angular.isObject(desSettings.getLanguagesList())).toBe(true);
  });

  it('languages list sould contain an array', function () {    
    var languages=desSettings.getLanguagesList();
    expect(angular.isArray(languages.languages)).toBe(true);
  });
  
  it('languages list sould contain an array with several values', function () {    
    var languages=desSettings.getLanguagesList();
    expect(languages.languages.length>0).toBe(true);
  });



});
