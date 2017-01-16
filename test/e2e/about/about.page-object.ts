import {browser, by, element} from 'protractor';

export class AboutPageObject {

    // All relevant elements

    // Useful functions
    public open() {
        // Goto the about page
        browser.get('/about/');
    };
}