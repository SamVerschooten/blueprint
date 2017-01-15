import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';

import {AppComponent} from './app.component';

import {HomePage} from './home/home.page';
import {AboutPage} from './about/about.page';

import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        routing],
    declarations: [
        AppComponent,
        HomePage,
        AboutPage,
        FooterComponent,
        HeaderComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
