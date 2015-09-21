import angular from 'angular';
import HomeModule from './home/home.es6';

const ComponentsModule = angular.module('app.components', [
  HomeModule.name
]);

export default ComponentsModule;
