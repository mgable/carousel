/*jshint unused: vars */
'use strict';

angular.module('carouselApp')
  .directive('carousel', function (settings) {
    return {
      template: '<div class="carousel"><button class="btn btn-primary" ng-click="reverse()" ng-disabled="onFirst()"><i class="icon-chevron-left"></i></button><div id="mask" class="mask"><div id="images" class="images" ng-transclude></div></div><button class="btn btn-primary" ng-click="advance()" ng-disabled="onLast()"><i class="icon-chevron-right"></i></button></div>',
      replace: true,
      restrict: 'E',
      transclude: true,
      link: function postLink(scope, element, attrs) {
        //
      },
      controller: function ($scope, $element, $attrs){
        $scope.advance = function(){
          $scope.animation = 'forward-animation';
          $scope.images.push($scope.images.shift());

          //var temp = [];
          // for (var x = 0, l = $scope.images.length; x < l; x = x + 1){
          //   if (x === (l - 1)){
          //     console.info('hey' + $scope.images[x]);
          //     temp[0] = $scope.images[x];
          //   } else {
          //     temp[x + 1] = $scope.images[x];
          //   }
          // }
          // for (var x =  ($scope.images.length - 1); x > -1; x = x - 1){
          //   if (x === 0){
          //     temp[$scope.images.length - 1] = $scope.images[x];
          //   } else {
          //     temp[x - 1] = $scope.images[x];
          //   }
          // }
          // $scope.images = temp;

          // var temp = $scope.images.shift();
          // $scope.images.push(temp);

        };
        $scope.reverse = function(){
          $scope.animation = 'reverse-animation';
          $scope.images.unshift($scope.images.pop());
          // var temp = [];
          // for (var x = 0, l = $scope.images.length; x < l; x = x + 1){
          //   if (x === (l - 1)){
          //     console.info('hey' + $scope.images[x]);
          //     temp[0] = $scope.images[x];
          //   } else {
          //     temp[x + 1] = $scope.images[x];
          //   }
          // }
          // $scope.images = temp;
        };
        $scope.onFirst = function(){
          return false; //parseInt(images.style.left) >= 0;
        };
        $scope.onLast = function(){
          return false; //parseInt(images.style.left) <= -totalLength + viewPortWidth;
        };
        $scope.getAnimation = function(){
          console.info ($scope.animation);
          return $scope.animation;
        };
      }
    };
  });
