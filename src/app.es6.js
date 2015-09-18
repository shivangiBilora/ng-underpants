import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ComponentsModule from './components/components.es6';

let underpants = angular.module('underpants', [
  uiRouter,
  ComponentsModule.name
]);

underpants.controller('MainController', MainController);

function MainController($scope, $log) {
  let vm = this;

  vm.message = 'World';
  $log.info('Initialized MainController. Setting message to ' + vm.message);
}