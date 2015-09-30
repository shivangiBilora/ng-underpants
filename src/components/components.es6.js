import angular from 'angular';
import FlickrModule from './flickr/flickr.es6.js';
import HomeModule from './home/home.es6';

const ComponentsModule = angular.module('app.components', [
  FlickrModule.name,
  HomeModule.name
]);

export default ComponentsModule;
