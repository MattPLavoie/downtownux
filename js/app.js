/* global angular */
/* global _ */
  'use strict';

  var fetch = function($http, requestUrl, success) {
    $http.get(requestUrl)
    .then(
      success,
      function(error) {
        console.log("error", error);
      });
  };

  window.app = angular.module('app', [
    'ngSanitize',
    'ngRoute'
  ])
  .config(['$routeProvider',routingConfig])
  .controller('appController', ['$scope', '$http', '$location', appController])
  .controller('aboutController', ['$scope', aboutController]);

  function routingConfig($routeProvider) {
    $routeProvider.
      when('/home/', {
        templateUrl: 'partials/home.html',
        controller: 'aboutController'
      }).
      when('/dux-day/', {
        templateUrl: 'partials/dux-day.html',
        controller: 'confController'
      }).
      otherwise({
        redirectTo: '/dux-day/'
      });
  }

  function appController($scope, $http, $location) {
    $scope.$on( "$viewContentLoaded", function() {
      //TODO: implement GA
    });

  }

  function aboutController($scope) {

  }
