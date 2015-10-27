exports.config = {
	seleniumAddress : "http://127.0.0.1:4444/wd/hub",

	capabilities : {
		'browserName' : "chrome"
	},

	specs: "src/components/**/*.spec.js",

	framework: 'jasmine2',

  onPrepare: function() {
    browser.driver.manage().window().maximize();
    browser.get('http://localhost:3000');
  },

	jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: true
  }
}