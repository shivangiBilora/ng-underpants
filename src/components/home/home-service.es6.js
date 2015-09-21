'use strict';

class HomeService {
  /*@ngInject*/

  constructor($http, $log) {
    this.http_ = $http;
    this.log_ = $log;
    $log.info('Initialized HomeService');
  }

  getGithubUser(userName) {
    if (userName) {
      this.log_.info(`Requesting for ${userName}`);
      return this.http_.get(`https://api.github.com/users/${userName}`);
    }

  }

}

export { HomeService };
