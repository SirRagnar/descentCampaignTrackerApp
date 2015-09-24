'use strict';

/**
 * @ngdoc directive
 * @name descentCampaignTrackerApp.directive:desSelectOnClick
 * @description
 * # desSelectOnClick
 * Directive for select on click. Copy-pasted from http://stackoverflow.com/a/14996261/840635
 * and with the help of http://stackoverflow.com/a/31080391/840635
 */
angular.module('descentCampaignTrackerApp')
  .directive('desSelectOnClick', ['$window', function ($window) {
    return {
      restrict: 'A',
      link:  addSelectOnClick      
    };

    /** Select element text on click */
    function addSelectOnClick(scope, element, attrs) {
        element.on('click', function clickEvent() {
            selectText(this);
        });
    }

    /** Select element text on click */
    function selectText(element) {
      var doc = $window.document;
      var text = element;
      var range, selection;    
      if (doc.body.createTextRange) {
          range = doc.body.createTextRange();
          range.moveToElementText(text);
          range.select();
      } else if ($window.getSelection) {
          selection = $window.getSelection();        
          range = doc.createRange();
          range.selectNodeContents(text);
          selection.removeAllRanges();
          selection.addRange(range);
      }
    }
  }]);
