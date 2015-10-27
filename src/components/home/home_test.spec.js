describe("clicks on home page", function(){

	// added this to handle navigation between tabs in the same browser
	beforeEach(function() { 
		return browser.ignoreSynchronization = true; 
	});

	// Test case to check the Gulp button is opening gulp page

	it("should navigate to gulp page", function(){
		var linkForGulp = element(by.css('.linkForGulp'));

		linkForGulp.click().then(function(){

			browser.getAllWindowHandles().then(function (handles) {
          newWindowHandle = handles[1]; // this is your new window
          browser.switchTo().window(newWindowHandle).then(function () {
              
              expect(browser.driver.getTitle()).toContain('gulp');
              // navigate back to the original window
              
    					browser.driver.switchTo().window(handles[0]);
          });
      });
		});
	});

	// Test case to check the Babel button is opening babel page

	it("should navigate to Babel page", function(){
		var linkForBabel = element(by.css('.linkForBabel'));

		linkForBabel.click().then(function(){

			browser.getAllWindowHandles().then(function (handles) {
          newWindowHandle = handles[2]; // this is your new window
          browser.switchTo().window(newWindowHandle).then(function () {
              
              expect(browser.driver.getTitle()).toContain('Babel');
          });
      });
		});
	});

});