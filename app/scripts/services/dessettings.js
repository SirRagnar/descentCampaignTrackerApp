'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desSettings
 * @description
 * # desSettings
 * Factory in the descentCampaignTrackerApp.
 */
angular.module('descentCampaignTrackerApp')
  .provider('desSettings',
    [function () {
    // Service logic
    // ...

    // Public API here
    return {
      //configFunction:function(value){},
      $get:['localStorageService','desCamaignCons',
      function(localStorageService, desCamaignCons){

        var desSettings = this;

        desSettings.model={};

        return {
                  getLanguagesList: getLanguagesList,
                  loadModel: loadModel,
                  saveModel: saveModel,
                  getModel: getModel,
                  isValidLanguage: isValidLanguage,
                  getPreferredLanguage: getPreferredLanguage,
                  setPreferredLanguage: setPreferredLanguage
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

        function isValidLanguage(keyLang){
          var languages=getLanguagesList().languages;
          var languageSearch=languages.filter(function(language){
              return keyLang===language.id;
            });

          return angular.isDefined(languageSearch) && 
                 angular.isArray(languageSearch)   && 
                 angular.isObject(languageSearch[0]);
        }

        function getPreferredLanguage(){
          loadModel();
          return desSettings.model.appLang;
        }

        function setPreferredLanguage(appLang){
          desSettings.model.appLang=appLang;
          saveModel();
        }

        function _newSettingModel(){
          return {
            version: 0,
            appLang:'es'        
          };
        }
        
      }]
    };
  }]);
