import {browser, by, element} from 'protractor';

export class FirstPageObject {

    // All relevant elements

    // Useful functions
    public open() {
        // Goto the first page
        browser.get('/first');
    };
}