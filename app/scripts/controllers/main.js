/*jshint unused: vars */
'use strict';

angular.module('carouselApp')
  .controller('MainCtrl', function ($scope, Imagedata) {
    $scope.animation = 'forward-animation';
    $scope.images = Imagedata.getData();
  });