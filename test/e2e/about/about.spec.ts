import {browser} from 'protractor';
import {AboutPageObject} from "./about.page-object";

describe('About Page', function () {

    let aboutPageObject = new AboutPageObject();

    beforeEach(function () {
        aboutPageObject.open();
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('Scorpio');
    });
});