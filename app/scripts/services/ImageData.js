'use strict';

angular.module('carouselApp')
  .factory('Imagedata', function ($http) {
    var data,
    getUrl = function () {
      return 'https://imagedata.firebaseio.com/.json?callback=JSON_CALLBACK';
    },
    get = function () {
      return $http.jsonp(getUrl()).then(function(response) {
        data = response.data;
      });
    },
    promise = get();

    return {
      getData : function () {
        return data;
      },
      promise: promise
    };
  });