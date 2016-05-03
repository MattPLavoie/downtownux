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

  var app = angular.module('app', [
    'ngSanitize',
    'ngRoute'
  ])
  .config(['$routeProvider',routingConfig])
  .controller('appController', ['$scope', '$http', '$location', appController])
  .controller('aboutController', ['$scope', aboutController]);

  function routingConfig($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'aboutController'
      }).
      otherwise({
        redirectTo: '/about'
      });
  }

  function appController($scope, $http, $location) {
    $scope.$on( "$viewContentLoaded", function() {
      //TODO: implement GA
    });

  }

  function aboutController($scope) {

  }
