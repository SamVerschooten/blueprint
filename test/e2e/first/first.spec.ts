import {browser} from 'protractor';
import {FirstPageObject} from "./frist.page-object";

describe('First Page', () => {

    let firstPageObject = new FirstPageObject();

    beforeEach(() => {
        firstPageObject.open();
    });

    it('should have a title', () => {
        expect(browser.getTitle()).toEqual('Blueprint');
    });
});