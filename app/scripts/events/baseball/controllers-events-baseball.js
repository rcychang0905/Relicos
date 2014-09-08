/**
 * Created by Ronnie on 2014-05-22.
 */

angular.module('Relicos.Events').controller('baseballEventsCtrl', ['$scope', '$resource', function ($scope, $resource) {

  'use strict';

  var baseballEventData = $resource(
    'http://localhost:1234/getSingleEvent/:category',
    {category:'category'},
    {'get': {method: 'GET', isArray: true}}
  );

  baseballEventData.get({category:'baseball'}, function(data){
    $scope.events = data;
  });

  $scope.toggleSelected = function(){
    $scope.selected = !$scope.selected;
  };

  $scope.isSelected = function(){
    return $scope.selected;
  };

}]);