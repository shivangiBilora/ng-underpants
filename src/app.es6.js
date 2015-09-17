var angular = require('angular');
var uiRouter = require('angular-ui-router');

var underpants = angular.module('underpants', [
  'ui.router'
  ]);

underpants.controller('AppController', ['$scope', function ($scope) {
  console.log('AppController');
  $scope.message = 'World';
}]);