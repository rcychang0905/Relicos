/**
 * Created by Ronnie on 2014-05-26.
 */

angular.module('Relicuos.Directives').directive('singleEvent', ['$http', '$resource', function ($http, $resource) {

  'use strict';

  return {

    restrict: 'EA',

    replace: 'true',

    templateUrl: 'scripts/directives/directives-single-event-tpl.html',

    scope: {
      home: '@',
      away: '@',
      betsOnHome: '@',
      betsOnAway: '@',
      eventId: '@'
    },

    link: function (scope) {

      var updateSingleEventBetsCount = $resource(
        'http://localhost:1234/updateSingleEventBetsCount'
      );

      scope.updateBetsCount = function(side){
        console.log(side);
        var updateParams = (side === 'home' ? [{ id: scope.eventId }, { betsOnHome: 1 }] : [{ id: scope.eventId }, { betsOnAway: 1 }]);
        console.log(updateParams);
        updateSingleEventBetsCount.save(updateParams);
      };

    }
  };


}]);