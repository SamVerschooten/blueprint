import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {Anime} from "./anime.component";
import {Flyin} from "./flyin.component";

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, Anime, Flyin],
    bootstrap: [ AppComponent ]
})
export class AppModule { }