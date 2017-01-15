import {browser} from 'protractor';
import {HomePageObject} from "./home.page-object";

describe('Home Page', function () {

    let homePageObject = new HomePageObject();

    beforeEach(function () {
        homePageObject.open();
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('Scorpio');
    });

});