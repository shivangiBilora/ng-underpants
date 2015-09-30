import { FlickrService } from './flickr-service.es6.js';

class FlickrController {
  /*@ngInject*/

  constructor($log, FlickrService) {
    const vm = this;
    vm.FirebaseService = FlickrService;
    vm.log_ = $log;

    vm.log_.info('Initialized FlickrController');

  }
}

export { FlickrController };
