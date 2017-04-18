import {Component, ViewEncapsulation} from '@angular/core';
import {ApplicationState} from "./core/state/ApplicationState";
import {Store} from "@ngrx/store";

@Component({
    styles: [require('./app.scss')],
    selector: 'blp-app',
    encapsulation: ViewEncapsulation.None,
    template: `
        <div>
            <div>
                <blp-header></blp-header>
                <div class="content">
                    <router-outlet></router-outlet>
                </div>
                <blp-footer></blp-footer>
            </div>
            <div [hidden]="!(isBusy$ | async)" class="spinner-overlay" >
                <blp-spinner class="spinner" [spin]="isBusy$|async"></blp-spinner>
            </div>
        </div>
    `
})
export class AppComponent {
    public isBusy$ = this.store.select((state) => state.containers.application.isBusy);

    constructor(private store: Store<ApplicationState>) {
    }
}
