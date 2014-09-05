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
  .module('relicosApp', [
    'Relicuos.Directives',
    'Relicuos.Controllers',
    'ui.router',
    'ngResource'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {

      url: '/',
      templateUrl: 'views/mlb-event.tpl.html',
      controller: 'home'

    });
  });
