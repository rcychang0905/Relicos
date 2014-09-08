'use strict';

/**
 * @ngdoc overview
 * @name relicosApp
 * @description
 * # relicosApp
 *
 * Main module of the application.
 */
angular
  .module('Relicos', [
    'Relicos.Events',
    'ui.router',
    'ngResource'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {

      url: '/',
      templateUrl: '../views/events/baseball/mlb-event.tpl.html',
      controller: 'baseballEventsCtrl'

    });
  });
