webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(2);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _componentsComponentsEs6 = __webpack_require__(5);

	var _componentsComponentsEs62 = _interopRequireDefault(_componentsComponentsEs6);

	var MainController =
	/*@ngInject*/

	["$scope", "$log", function MainController($scope, $log) {
	  _classCallCheck(this, MainController);

	  this.message = 'World';
	  $log.info('YES!!! Initialized MainController. Setting message to ' + this.message);
	}];

	var underpants = _angular2['default'].module('underpants', [_angularUiRouter2['default'], _componentsComponentsEs62['default'].name]);

	underpants.run(["$state", function ($state) {
	  $state.go('home');
	}]);

	underpants.controller('MainController', MainController);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var FlickrService =
	/*@ngInject*/

	["$http", "$log", function FlickrService($http, $log) {
	  _classCallCheck(this, FlickrService);

	  this.http_ = $http;
	  this.log_ = $log;
	  $log.info('Initialized FlickrService');
	}]

	//getGithubUser(userName) {
	//  if (userName) {
	//    this.log_.info(`Requesting for ${userName}`);
	//    return this.http_.get(`https://api.github.com/users/${userName}`);
	//  }
	//}
	;

	exports.FlickrService = FlickrService;

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _flickrFlickrEs6Js = __webpack_require__(7);

	var _flickrFlickrEs6Js2 = _interopRequireDefault(_flickrFlickrEs6Js);

	var _homeHomeEs6 = __webpack_require__(9);

	var _homeHomeEs62 = _interopRequireDefault(_homeHomeEs6);

	var ComponentsModule = _angular2['default'].module('app.components', [_flickrFlickrEs6Js2['default'].name, _homeHomeEs62['default'].name]);

	exports['default'] = ComponentsModule;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _flickrServiceEs6Js = __webpack_require__(3);

	var FlickrController =
	/*@ngInject*/

	["$log", "FlickrService", function FlickrController($log, FlickrService) {
	  _classCallCheck(this, FlickrController);

	  var vm = this;
	  vm.FirebaseService = FlickrService;
	  vm.log_ = $log;

	  vm.log_.info('Initialized FlickrController');
	}];

	exports.FlickrController = FlickrController;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(2);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _flickrControllerEs6Js = __webpack_require__(6);

	var _flickrServiceEs6Js = __webpack_require__(3);

	exports['default'] = _angular2['default'].module('underpants.flickrModule', [_angularUiRouter2['default']]).config(function ($stateProvider, $urlRouterProvider) {
	  'ngInject';

	  $stateProvider.state('flickr', {
	    url: '/flickr',
	    templateUrl: '/components/flickr/flickr.html',
	    controller: 'FlickrController',
	    controllerAs: 'vm'
	  });
	}).controller('FlickrController', _flickrControllerEs6Js.FlickrController).service('FlickrService', _flickrServiceEs6Js.FlickrService);
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var HomeController =
	/*@ngInject*/

	["$log", "HomeService", function HomeController($log, HomeService) {
	  _classCallCheck(this, HomeController);

	  var vm = this;
	  vm.HomeService_ = HomeService;
	  vm.log_ = $log;

	  vm.log_.info('Initialized HomeController');
	}];

	exports.HomeController = HomeController;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(2);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _homeControllerEs6 = __webpack_require__(8);

	exports['default'] = _angular2['default'].module('underpants.homeModule', [_angularUiRouter2['default']]).config(function ($stateProvider, $urlRouterProvider) {
	  'ngInject';

	  $stateProvider.state('home', {
	    url: '/home',
	    templateUrl: '/components/home/home.html',
	    controller: 'HomeController',
	    controllerAs: 'vm'
	  });
	}).controller('HomeController', _homeControllerEs6.HomeController);
	module.exports = exports['default'];

/***/ }
]);
//# sourceMappingURL=bundle.js.map