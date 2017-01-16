import {browser} from 'protractor';
import {HomePageObject} from './home.page-object';

describe('Home Page',  () => {

    let homePageObject = new HomePageObject();

    beforeEach( () => {
        homePageObject.open();
    });

    it('should have a title',  () => {
        expect(browser.getTitle()).toEqual('Scorpio');
    });

});