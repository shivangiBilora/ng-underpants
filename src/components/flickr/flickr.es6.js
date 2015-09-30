import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { FlickrController } from './flickr-controller.es6.js';
import { FlickrService } from './flickr-service.es6.js';

export default angular.module('underpants.flickrModule', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('flickr', {
      url: '/flickr',
      templateUrl: '/components/flickr/flickr.html',
      controller: 'FlickrController',
      controllerAs: 'vm'
    });
})
.controller('FlickrController', FlickrController)
.service('FlickrService', FlickrService);
