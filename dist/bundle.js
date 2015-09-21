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

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var HomeService = (function () {
	  /*@ngInject*/

	  function HomeService($http, $log) {
	    _classCallCheck(this, HomeService);

	    this.http_ = $http;
	    this.log_ = $log;
	    $log.info('Initialized HomeService');
	  }
	  HomeService.$inject = ["$http", "$log"];

	  _createClass(HomeService, [{
	    key: 'getGithubUser',
	    value: function getGithubUser(userName) {
	      if (userName) {
	        this.log_.info('Requesting for ' + userName);
	        return this.http_.get('https://api.github.com/users/' + userName);
	      }
	    }
	  }]);

	  return HomeService;
	})();

	exports.HomeService = HomeService;

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

	var _homeHomeEs6 = __webpack_require__(7);

	var _homeHomeEs62 = _interopRequireDefault(_homeHomeEs6);

	var ComponentsModule = _angular2['default'].module('app.components', [_homeHomeEs62['default'].name]);

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

	var _homeServiceEs6 = __webpack_require__(3);

	var HomeController =
	/*@ngInject*/

	["$log", "HomeService", function HomeController($log, HomeService) {
	  _classCallCheck(this, HomeController);

	  var vm = this;
	  vm.HomeService_ = HomeService;
	  vm.log_ = $log;

	  vm.log_.info('Initialized HomeController');

	  HomeService.getGithubUser('nikhildev').then(
	  // Success callback
	  function (response) {
	    vm.log_.info(response.data);
	    vm.user = response.data;
	  },

	  //Error callback
	  function (error) {
	    vm.log_.error(error);
	  });
	}];

	exports.HomeController = HomeController;

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

	var _homeControllerEs6 = __webpack_require__(6);

	var _homeServiceEs6 = __webpack_require__(3);

	exports['default'] = _angular2['default'].module('underpants.homeModule', [_angularUiRouter2['default']]).config(function ($stateProvider, $urlRouterProvider) {
	  'ngInject';

	  $urlRouterProvider.otherwise('/');

	  $stateProvider.state('home', {
	    url: '/home',
	    templateUrl: '/components/home/home.html',
	    controller: 'HomeController',
	    controllerAs: 'vm'
	  });
	}).controller('HomeController', _homeControllerEs6.HomeController).service('HomeService', _homeServiceEs6.HomeService);
	module.exports = exports['default'];

/***/ }
]);
//# sourceMappingURL=bundle.js.map