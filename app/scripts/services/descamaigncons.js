'use strict';

/**
 * @ngdoc service
 * @name descentCampaignTrackerApp.desCamaignCons
 * @description
 * # desCamaignCons
 * Constant in the descentCampaignTrackerApp.
 */
angular.module('descentCampaignTrackerApp')
  .constant('desCamaignCons', {
  	LOCAL_STORAGE_NAME: 'descentCampaign',
  	MAX_HERO_PARTY_SIZE: 4,
  	DIVINE_FACTOR_DIFFERENCE: 25,
  	SILVER_THRESHOLD: 200,
  	GOLD_THRESHOLD: 400,
  	FINAL_BATTLE_THRESHOLD:600,
  	CURRENT_MODEL_VERSION:1
  });
