'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desSettings
 * @description
 * # desSettings
 * Factory in the descentCampaignTrackerApp.
 */
angular.module('descentCampaignTrackerApp')
  .factory('desSettings',
    ['localStorageService','desCamaignCons', 
    function (localStorageService, desCamaignCons) {
    // Service logic
    // ...

    var desSettings = this;

    desSettings.model={};

    // Public API here
    return {
      getLanguagesList: getLanguagesList,
      loadModel: loadModel,
      saveModel: saveModel,
      getModel: getModel
    };
    
    
    function getModel(){
      return desSettings.model;
    }

    /**
     * @description
     * Loads setting model from localStorage. If its null then creates a new one.
     */
    function loadModel(){
      desSettings.model = localStorageService.get(desCamaignCons.LOCAL_STORAGE_SETTINGS) || _newSettingModel();
      return desSettings.model;
    }

    function saveModel(){
      localStorageService.set(desCamaignCons.LOCAL_STORAGE_SETTINGS, desSettings.model);
    }

    function getLanguagesList(){
      return {
        languages:[
          {id:'es', description:'SPANISH'},
          {id:'en', description:'ENGLISH'}
        ]
      };
    }

    function _newSettingModel(){
      return {
        appLang:'es'        
      };
    }
    
  }]);
