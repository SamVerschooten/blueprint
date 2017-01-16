import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    styles: [require('./app.scss')],
    selector: 'blp-app',
    encapsulation: ViewEncapsulation.None,
    template: `
        <div>      
            <blp-header></blp-header>
            <router-outlet></router-outlet>
            <blp-footer></blp-footer>
        </div>
    `
})
export class AppComponent {
}
