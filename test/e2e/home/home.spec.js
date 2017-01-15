"use strict";
var protractor_1 = require('protractor');
var home_page_object_1 = require("./home.page-object");
describe('Discover Page', function () {
    var discoverPageObject = new home_page_object_1.HomePageObject();
    beforeEach(function () {
        discoverPageObject.open();
    });
    it('should have a title', function () {
        expect(protractor_1.browser.getTitle()).toEqual('Hatch');
    });
    it('default service should be plot', function () {
        expect(discoverPageObject.plotOffering.isPresent()).toEqual(true);
        expect(discoverPageObject.launchOffering.isPresent()).toEqual(false);
        expect(discoverPageObject.flyOffering.isPresent()).toEqual(false);
    });
    it('selecting plot should scroll down and select plot service', function () {
        discoverPageObject.plotServiceLine.click();
        discoverPageObject.getPageOffset().then(function (offset) { return expect(offset).toBeGreaterThan(2000); });
        expect(discoverPageObject.plotOffering.isPresent()).toEqual(true);
        expect(discoverPageObject.launchOffering.isPresent()).toEqual(false);
        expect(discoverPageObject.flyOffering.isPresent()).toEqual(false);
    });
    it('selecting launch should scroll down and select launch service', function () {
        discoverPageObject.launchServiceLine.click();
        discoverPageObject.getPageOffset().then(function (offset) { return expect(offset).toBeGreaterThan(2000); });
        expect(discoverPageObject.plotOffering.isPresent()).toEqual(false);
        expect(discoverPageObject.launchOffering.isPresent()).toEqual(true);
        expect(discoverPageObject.flyOffering.isPresent()).toEqual(false);
    });
    it('selecting fly should scroll down and select fly service', function () {
        discoverPageObject.flyServiceLine.click();
        discoverPageObject.getPageOffset().then(function (offset) { return expect(offset).toBeGreaterThan(2000); });
        expect(discoverPageObject.plotOffering.isPresent()).toEqual(false);
        expect(discoverPageObject.launchOffering.isPresent()).toEqual(false);
        expect(discoverPageObject.flyOffering.isPresent()).toEqual(true);
    });
});
