import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeController from './home-controller.es6';
import HomeService from './home-service.es6';

export default angular.module('underpants.homeModule', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home>This is the home</home>',
      controller: 'HomeController'
    });
})
.controller('HomeController', HomeController)
.service('HomeService', HomeService);