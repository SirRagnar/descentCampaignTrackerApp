'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desModelControl
 * @description
 * # desModelControl
 * Version Control for model
 */
angular.module('descentCampaignTrackerApp')
  .factory('desModelControl', function () {
    
    var desModelControl=this;
    desModelControl.currentVersion=1;

    return {
      newControl: newControl,
      setOriginVersion: setOriginVersion,
      currentVersion: desModelControl.currentVersion 
    };

    function newControl(originVersion,currentVersion){
      var origin, current;
      if(angular.isUndefined(originVersion)){
        origin=0;
      }else{
        origin=originVersion;
      }

      if(angular.isUndefined(currentVersion)){
        current=0;
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
  });
