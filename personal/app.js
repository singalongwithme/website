(function(){
  'use strict';

  angular.module('app', [
    'ngMaterial',
    'ui.router'
    ])

  .config(config);

  function config($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.
      state('main', {
        url: '/',
        templateUrl: 'app.main.view.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
  }
})();