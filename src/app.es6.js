var angular = require('angular');
var uiRouter = require('angular-ui-router');

var app = angular.module('app', [
  'ui.router'
  ]);

app.controller('AppController', ['$scope', function ($scope) {
  console.log('AppController');
  $scope.message = 'World';
}]);