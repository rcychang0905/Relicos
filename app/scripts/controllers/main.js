'use strict';

/**
 * @ngdoc function
 * @name relicosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the relicosApp
 */
angular.module('relicosApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
