'use strict';

/**
 * @ngdoc directive
 * @name descentCampaignTrackerApp.directive:desSelectOnClick
 * @description
 * # desSelectOnClick
 * Directive for select on click. Copy-pasted from http://stackoverflow.com/a/14996261/840635
 */
angular.module('descentCampaignTrackerApp')
  .directive('desSelectOnClick', ['$window', function ($window) {
    return {
      restrict: 'A',
      link: {
        pre: addSelectOnClick
      }
    };

    function addSelectOnClick(scope, element, attrs) {
        element.on('click', function () {
            if (!$window.getSelection().toString()) {
                // Required for mobile Safari
                this.setSelectionRange(0, this.value.length)
            }
        });
    }
  }]);
