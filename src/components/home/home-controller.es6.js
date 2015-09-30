class HomeController {
  /*@ngInject*/

  constructor($log, HomeService) {
    const vm = this;
    vm.HomeService_ = HomeService;
    vm.log_ = $log;

    vm.log_.info('Initialized HomeController');
  }
}

export { HomeController };
