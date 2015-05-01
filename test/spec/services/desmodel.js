'use strict';

describe('Service: desModel', function () {

  // load the service's module
  beforeEach(module('descentCampaignTrackerApp'));
  beforeEach(module('served/modelV0.json'));

  // instantiate service
  var desModel, desCamaignCons, desModelControl, newModel,modelV0Str,modelV0;
  beforeEach(inject(function (_desModel_,_localStorageService_,_desCamaignCons_,_desModelControl_, _servedModelV0_) {      
    desCamaignCons=_desCamaignCons_;
    _localStorageService_.remove(desCamaignCons.LOCAL_STORAGE_NAME);
    desModel = _desModel_;
    desModelControl=_desModelControl_;
    modelV0Str=angular.toJson(_servedModelV0_, 2);
    modelV0=_servedModelV0_;
    newModel = desModel.loadModel();

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

  it('new model should be of the current version',function(){
    expect(newModel.control.version).toBe(desCamaignCons.CURRENT_MODEL_VERSION);
  });
  
  it('complete json model migrated from 0 version should be succesfully migrated to version 1',function(){
    var loadRes= desModel.fromJSON(modelV0Str);
    expect(loadRes.success).toBe(true);
  });
  
  it('complete json model migrated from 0 version should have originVersion 0', function(){
    var loadRes=desModel.fromJSON(modelV0Str);
    var model = desModel.getModel();
    if(loadRes.success){
      expect(model.control.originVersion).toBe(0);
    }
  });
  
  it('complete json model migrated from 0 version should have version 1', function(){
    var loadRes=desModel.fromJSON(modelV0Str);
    var model = desModel.getModel();
    if(loadRes.success){
      expect(model.control.version).toBe(1);    
    }
  });

  it('complete json model migrated from 0 version should have monsterLevels attribute', function(){
    var loadRes=desModel.fromJSON(modelV0Str);
    var model = desModel.getModel();

    if(loadRes.success){
      expect(model.monsterLevels).toBeDefined();    
    }
  });

  it('complete json model migrated from 0 version should have monsterLevels attribute and it should be an array', function(){
    var loadRes=desModel.fromJSON(modelV0Str);
    var model = desModel.getModel();

    if(loadRes.success){
      expect(angular.isArray(model.monsterLevels)).toBe(true);    
    }
  });

  it('complete json model migrated from 0 version should have monsterLevels attribute with an humanoid element', function(){
    var loadRes=desModel.fromJSON(modelV0Str);
    var model = desModel.getModel();

    if(loadRes.success && angular.isArray(model.monsterLevels)){
      var humanoidMonsterLevel= model.monsterLevels.filter(function(monsterLevel) {
                                    return desCamaignCons.MONSTER_TYPE_HUMANOID===monsterLevel.type; 
                                });
      expect(humanoidMonsterLevel[0]).toBeDefined();    
    }
  });

  it('complete json model migrated from 0 version should have monsterLevels attribute with a Beasts element', function(){
    var loadRes=desModel.fromJSON(modelV0Str);
    var model = desModel.getModel();

    if(loadRes.success && angular.isArray(model.monsterLevels)){
      var beastMonsterLevel= model.monsterLevels.filter(function(monsterLevel) {
                                    return desCamaignCons.MONSTER_TYPE_BEASTS===monsterLevel.type;
                                });
      expect(beastMonsterLevel[0]).toBeDefined();    
    }
  });

  it('complete json model migrated from 0 version should have monsterLevels attribute with an Eldrich element', function(){
    var loadRes=desModel.fromJSON(modelV0Str);
    var model = desModel.getModel();

    if(loadRes.success && angular.isArray(model.monsterLevels)){
      var eldrichMonsterLevel= model.monsterLevels.filter(function(monsterLevel) {
                                    return desCamaignCons.MONSTER_TYPE_ELDRITCH===monsterLevel.type;
                                });
      expect(eldrichMonsterLevel[0]).toBeDefined();    
    }
  });

  it('complete json model migrated from 0 version should have monsterLevels attribute with an humanoid element with unchanged level', function(){
    var loadRes=desModel.fromJSON(modelV0Str);
    var model = desModel.getModel();

    if(loadRes.success && angular.isArray(model.monsterLevels)){
      var humanoidMonsterLevel= model.monsterLevels.filter(function(monsterLevel) {
                                    return desCamaignCons.MONSTER_TYPE_HUMANOID===monsterLevel.type; 
                                });
      expect(humanoidMonsterLevel[0].level).toBe(modelV0.monsterLevels[0].level);    
    }
  });

  it('complete json model migrated from 0 version should have monsterLevels attribute with a Beasts element with unchanged level', function(){
    var loadRes=desModel.fromJSON(modelV0Str);
    var model = desModel.getModel();

    if(loadRes.success && angular.isArray(model.monsterLevels)){
      var beastMonsterLevel= model.monsterLevels.filter(function(monsterLevel) {
                                    return desCamaignCons.MONSTER_TYPE_BEASTS===monsterLevel.type;
                                });
      expect(beastMonsterLevel[0].level).toBe(modelV0.monsterLevels[1].level);    
    }
  });

  it('complete json model migrated from 0 version should have monsterLevels attribute with an Eldrich element with unchanged level', function(){
    var loadRes=desModel.fromJSON(modelV0Str);
    var model = desModel.getModel();

    if(loadRes.success && angular.isArray(model.monsterLevels)){
      var eldrichMonsterLevel= model.monsterLevels.filter(function(monsterLevel) {
                                    return desCamaignCons.MONSTER_TYPE_ELDRITCH===monsterLevel.type;
                                });
      expect(eldrichMonsterLevel[0].level).toBe(modelV0.monsterLevels[2].level);    
    }
  });


});
