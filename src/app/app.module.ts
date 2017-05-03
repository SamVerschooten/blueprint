import {NgModule} from '@angular/core';
import {RoutingModule} from './routing/routing.module';
import {AppComponent} from './app.component';
import {FirstPage} from './first/first.page';
import {SecondPage} from './second/second.page';
import {CoreModule} from "./core/core.module";
import {NotFoundPage} from "./not-found/not-found.page";
import {SharedModule} from "./shared.module";
import {AreaChartComponent} from "./second/components/area-chart.component";

@NgModule({
    imports: [
        SharedModule,
        CoreModule,
        RoutingModule],
    declarations: [
        AppComponent,
        FirstPage,
        SecondPage,
        NotFoundPage,
        AreaChartComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
