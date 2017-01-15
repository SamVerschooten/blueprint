import {browser, by, element} from 'protractor';

export class HomePageObject {

    // All relevant elements

    // Useful functions
    public open() {
        // Goto the home page
        browser.get('/home/');
    };
}