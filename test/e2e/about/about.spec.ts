import {browser} from 'protractor';
import {AboutPageObject} from './about.page-object';

describe('About Page', () => {

    let aboutPageObject = new AboutPageObject();

    beforeEach(() => {
        aboutPageObject.open();
    });

    it('should have a title', () => {
        expect(browser.getTitle()).toEqual('Scorpio');
    });
});