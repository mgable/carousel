/*jshint unused: vars */
'use strict';

angular.module('carouselApp')
  .directive('images', function () {
    return {
      template: '<img ng-class="getAnimation()" ng-repeat="image in images" ng-src="{{image.url}}" />',
      restrict: 'E',
      replace: true,
      transclude: true,
      link: function($scope, $element, $attrs){
        // console.info ('images link');
        // console.info ($scope);
      },
      controller: function ($scope, $element, $attrs){
        // console.info ('images controller');
        // console.info ($scope.images.length);
      }
    };
  });