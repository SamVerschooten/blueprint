"use strict";
var protractor_1 = require('protractor');
var AboutPageObject = (function () {
    function AboutPageObject() {
        // All relevant elements
        this.linkedInSam = protractor_1.element.all(protractor_1.by.css('.fi-social-linkedin')).get(0);
        this.linkedInMaarten = protractor_1.element.all(protractor_1.by.css('.fi-social-linkedin')).get(1);
        this.linkedInPieter = protractor_1.element.all(protractor_1.by.css('.fi-social-linkedin')).get(2);
    }
    //Useful functions
    AboutPageObject.prototype.open = function () {
        // Goto the about page
        protractor_1.browser.get('/about/');
    };
    ;
    return AboutPageObject;
}());
exports.AboutPageObject = AboutPageObject;
