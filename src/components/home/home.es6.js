import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { HomeController } from './home-controller.es6';

export default angular.module('underpants.homeModule', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/components/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    });
})
.controller('HomeController', HomeController);
