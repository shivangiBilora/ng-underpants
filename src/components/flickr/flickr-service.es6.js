class FlickrService {
  /*@ngInject*/

  constructor($http, $log) {
    this.http_ = $http;
    this.log_ = $log;
    $log.info('Initialized FlickrService');
  }

  //getGithubUser(userName) {
  //  if (userName) {
  //    this.log_.info(`Requesting for ${userName}`);
  //    return this.http_.get(`https://api.github.com/users/${userName}`);
  //  }
  //}
}

export { FlickrService };
