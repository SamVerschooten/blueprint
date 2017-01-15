"use strict";
var protractor_1 = require('protractor');
var about_page_object_1 = require("./about.page-object");
describe('About Page', function () {
    var aboutPageObject = new about_page_object_1.AboutPageObject();
    beforeEach(function () {
        aboutPageObject.open();
    });
    it('should have a title', function () {
        expect(protractor_1.browser.getTitle()).toEqual('Hatch');
    });
    it('selecting LinkedIn icon of Sam should open LinkedIn page of Sam', function () {
        aboutPageObject.linkedInSam.click();
        expect(protractor_1.browser.getCurrentUrl()).toEqual('https://www.linkedin.com/in/samverschooten');
    });
    it('selecting LinkedIn icon of Maarten should open LinkedIn page of Maarten', function () {
        aboutPageObject.linkedInMaarten.click();
        expect(protractor_1.browser.getCurrentUrl()).toEqual('https://www.linkedin.com/in/maartenthoelen');
    });
    it('selecting LinkedIn icon of Pieter should open LinkedIn page of Pieter', function () {
        aboutPageObject.linkedInPieter.click();
        expect(protractor_1.browser.getCurrentUrl()).toEqual('https://www.linkedin.com/in/pieter-portauw-221b464');
    });
});
