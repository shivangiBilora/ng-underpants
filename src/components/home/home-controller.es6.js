'use strict';

//import angular from 'angular';

import { HomeService } from './home-service.es6';

class HomeController {
  /*@ngInject*/

  constructor($log, HomeService) {
    var vm = this;
    vm.HomeService_ = HomeService;
    vm.log_ = $log;

    vm.log_.info('Initialized HomeController');

    HomeService.getGithubUser('nikhildev')
    .then(
      // Success callback
      function(response) {
        vm.log_.info(response.data);
        vm.user = response.data;
      },

      //Error callback
      function(error) {
        vm.log_.error(error);
      });
  }
}

export { HomeController };
