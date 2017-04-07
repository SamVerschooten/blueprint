import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {JsonpModule, HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        RouterModule
    ]
})
export class SharedModule {
}