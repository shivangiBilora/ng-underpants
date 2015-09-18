'use strict';

export default class HomeService {

  constructor($http, $log) {
    this.http_ = $http;
    $log.info('Initialized HomeService');
  }

}