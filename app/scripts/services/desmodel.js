'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desModel
 * @description
 * # desModel
 * Factory with the model services.
 */
angular.module('descentCampaignTrackerApp')
  .factory('desModel', 
    [ '$log', 'localStorageService', 
      'desCamaignCons', 'desCore', 'desModelControl', 
      'desOverlord', 'desLieutenant', 'desMonster', 'desHero', 'desLocation', 
    function ( $log, localStorageService,   
               desCamaignCons, desCore, desModelControl,
               desOverlord, desLieutenant, desMonster, desHero, desLocation) {
    
    
    var model = loadModel() || _newModel();        

    // Public API 
    return {      
      getModel:     getModel,
      loadModel:    loadModel,
      saveModel:    saveModel,

      getOverlord:      getOverlord,
      getLieutenants:   getLieutenants,
      getMonsterLevels: getMonsterLevels,
      getHeroParty:     getHeroParty,
      getLocations:     getLocations,

      toJSON:       toJSON,
      fromJSON:     fromJSON
    };    

    function getModel() {
      return model;
    }

    function loadModel(){
      var localModel = localStorageService.get(desCamaignCons.LOCAL_STORAGE_NAME);

      try{
        _updateModel(localModel);
      }catch(e){
        $log.error('Error loading model from localhost: ' + e);
        $log.error(localModel);
        $log.error('Loading new model instance instead');
        localModel = _newModel();
      }

      return localModel;
    }

    function saveModel(){
      localStorageService.set(desCamaignCons.LOCAL_STORAGE_NAME, model);
    }

    function getOverlord(){
      return model.overlord;
    }

    function getLieutenants(){
      return model.lieutenants;
    }

    function getMonsterLevels(){
      return model.monsterLevels;
    }

    function getHeroParty(){
      return model.heroParty;
    }

    function getLocations(){
      return model.locations;
    }

    function toJSON(){
      return angular.toJson(model, 2);
    }

    /**
     * Try to load JSON input into campaign model
     */
    function fromJSON(inputText){
      var result={success:false, text:null};
      var newModel = _newModel();
      var inputModel;      
      try{        
        inputModel = angular.fromJson(inputText);
           
        if(angular.isObject(inputModel)){

          if(angular.isUndefined(inputModel.control)){
            var control = desModelControl.newControl(0,0);
            inputModel.control=control;
          }

          _updateModel(inputModel); 

          // Overlord copy
          angular.extend(newModel,inputModel);

          model=newModel;
          result.success=true;
          result.text='Campaña importada correctamente.';
        }else if(angular.isUndefined(result.text)){
          result.text='La entrada no es un JSON';
        }
       
      }catch(err){
        $log.error('Error convirtiendo entrada en JSON: ' + err);
        result.success=false;
        result.text='Conversion error: '+err.message;
      }
      $log.debug(result);
      return result;
    }

    function _updateModel(modelToUpdate){      
      var initVersion;
      if(angular.isUndefined(modelToUpdate.control) || angular.isUndefined(modelToUpdate.control.version)){
        initVersion=0;
      }else{
        initVersion=modelToUpdate.control.version;
      }

      if(initVersion>desModelControl.currentVersion){        
        throw 'Invalid model version';

      }else if(initVersion!==desModelControl.currentVersion){
        $log.log('Old model version detected. ' +
          'Init version: ' + initVersion + 
          ', currentVersion: ' + desModelControl.currentVersion);
        var updateFunctions= [_updateFrom0To1];
        for (var i = initVersion; i < updateFunctions.length; i++) {
          updateFunctions[i](modelToUpdate);
        }
      }

    }

    function _updateFrom0To1(model){
      // Changes from model version 0 to 1:
      //   + New version control in the model
      $log.log('Updating model from version 0 to 1');
      $log.debug(model.control);
      model.control=desModelControl.newControl(0,1);
      $log.debug(model.control);
      $log.log('successfully updated to version 1');
    }

    function _newModel(){
      return {  
        control: desModelControl.newControl(),    
        overlord: desOverlord.newOverlord(),
                    /*{ 
                      name: '',
                      plot: '',
                      plotUpgrades: [{ name: '' }],
                      commonUpgrades: [{name: '' }],
                      conquestTockens:0,
                      spentTockens:0,
                      treachery:{
                        traps:    {current:0, max:0},
                        events:   {current:0, max:0},
                        monsters: {current:0, max:0}
                      }
                    }*/
        lieutenants: desLieutenant.newLieutenants(), //{list:[{name: '', location:'' }]}
        monsterLevels: desMonster.newMonsterLevels(),
                        /*[
                          {name: 'Humanoides', level: 1},
                          {name: 'Bestias', level:1},
                          {name: 'Arcanos', level:1}
                        ]*/
        heroParty: desHero.newHeroParty(),
                    /*{
                      location: '',
                      homePort: '',
                      rumor:{name:'',location:''},
                      heroes:[{name: '', xpSpent: 0}],
                      conquestTockens:0
                    }*/
        locations: desLocation.newLocations(),
                    /*
                    {
                      cities:[],
                      dungeons:[],
                      islands:[]
                    }
                    */
        };
    }


  }]);
