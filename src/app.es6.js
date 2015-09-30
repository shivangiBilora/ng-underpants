import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ComponentsModule from './components/components.es6';

class MainController {
  /*@ngInject*/

  constructor($scope, $log) {
    this.message = 'World';
    $log.info(`YES!!! Initialized MainController. Setting message to ${this.message}`);
  }

}

const underpants = angular.module('underpants', [
  uiRouter,
  ComponentsModule.name
]);

underpants.run(function($state) {
  $state.go('home');
});

underpants.controller('MainController', MainController);
