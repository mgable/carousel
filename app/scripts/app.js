'use strict';

angular.module('carouselApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          'MyServiceData':function(Imagedata){
            return Imagedata.promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }).constant({'settings': {'IMAGEWIDTH': 487}})
  .animation('.forward-animation', function(settings) {
    return {
      enter : function(element, done) {
        console.info ('enter');
        $(element).css({
          position:'relative',
          left:0
        });
        $(element).animate({
          left: -(settings.IMAGEWIDTH)
        }, done);
      },

      leave : function(element, done) {
        console.info ('leave');
        $(element).css({
          position:'relative',
          left:0
        });
        $(element).animate({
          left: -(settings.IMAGEWIDTH)
        }, done);
      },
      move : function(element, done) {
        console.info ('move');
        $(element).css({
          position:'relative',
          left: (settings.IMAGEWIDTH)
        });
        $(element).animate({
          left: 0
        }, done);
      }
    };
  })
  .animation('.reverse-animation', function(settings) {
    return {
      enter : function(element, done) {
        console.info ('enter');
        $(element).css({
          position:'relative',
          left: -(settings.IMAGEWIDTH)
        });
        $(element).animate({
          left:0
        }, done);
      },
      leave : function(element, done) {
        console.info ('leave');
        $(element).css({
          position:'relative',
          left: -(settings.IMAGEWIDTH)
        });
        $(element).animate({
          left:0
        }, done);
      },
      move : function(element, done) {
        console.info ('move reverse');
        $(element).css({
          position:'relative',
          left: -(settings.IMAGEWIDTH)
        });
        $(element).animate({
          left: 0
        }, done);
      }
    };
  });