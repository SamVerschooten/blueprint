"use strict";
var protractor_1 = require('protractor');
var HomePageObject = (function () {
    function HomePageObject() {
        // All relevant elements
        this.plotOffering = protractor_1.element(protractor_1.by.tagName('htc-plot-details'));
        this.launchOffering = protractor_1.element(protractor_1.by.tagName('htc-launch-details'));
        this.flyOffering = protractor_1.element(protractor_1.by.tagName('htc-fly-details'));
        this.plotServiceLine = protractor_1.element.all(protractor_1.by.tagName('htc-serviceline')).get(0);
        this.launchServiceLine = protractor_1.element.all(protractor_1.by.tagName('htc-serviceline')).get(1);
        this.flyServiceLine = protractor_1.element.all(protractor_1.by.tagName('htc-serviceline')).get(2);
    }
    //Useful functions
    HomePageObject.prototype.open = function () {
        // Goto the home page
        protractor_1.browser.get('/home/');
    };
    ;
    HomePageObject.prototype.getPageOffset = function () {
        return new Promise(function (resolve, reject) {
            protractor_1.browser.driver.sleep(1000);
            protractor_1.browser.executeScript('return window.pageYOffset;')
                .then(function (pos) { return resolve(pos); });
        });
    };
    return HomePageObject;
}());
exports.HomePageObject = HomePageObject;
