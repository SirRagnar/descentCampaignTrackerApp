'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desModelControl
 * @description
 * # desModelControl
 * Version Control for model
 */
angular.module('descentCampaignTrackerApp')
  .factory('desModelControl',
  ['desCamaignCons', function (desCamaignCons) {
    
    var desModelControl=this;

    return {
      newControl: newControl,
      newControlLatestVersion: newControl.bind(undefined,
                                desCamaignCons.CURRENT_MODEL_VERSION,
                                desCamaignCons.CURRENT_MODEL_VERSION),
      setOriginVersion: setOriginVersion,
      isValidModelVersion: isValidModelVersion,
      isCurrentVersion: isCurrentVersion
    };
    function newControl(originVersion,currentVersion){
      var origin, current;
      if(angular.isUndefined(originVersion)){
        origin=0;
      }else{
        origin=originVersion;
      }

      if(angular.isUndefined(currentVersion)){
        current=desCamaignCons.CURRENT_MODEL_VERSION;
      }else{
        current=currentVersion;
      }

      return {        
        version: current,
        originVersion: origin
      };
    }

    function setOriginVersion(control,originVersion){
      control.originVersion=originVersion;
    }

    function isValidModelVersion(version){
      return angular.isDefined(version) && angular.isNumber(version) && version<=desCamaignCons.CURRENT_MODEL_VERSION;
    }

    function isCurrentVersion(version){
      return angular.isDefined(version) && angular.isNumber(version) && version===desCamaignCons.CURRENT_MODEL_VERSION;
    }

  }]);
