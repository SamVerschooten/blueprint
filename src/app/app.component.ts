import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    styles: [require("./app.scss")],
    selector: 'my-app',
    encapsulation: ViewEncapsulation.None,
    template: '<h1>Hallowkes!!</h1>'
})
export class AppComponent { }