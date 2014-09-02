'use strict';

/**
 * @ngdoc function
 * @name relicosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the relicosApp
 */
angular.module('relicosApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
