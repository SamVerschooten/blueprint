import {NgModule, Optional, SkipSelf}       from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SharedModule} from "../shared.module";
import {BusyIndicatorService} from "./services/busy-indicator.service";
import {HttpGatewayService} from "./services/http-gateway.service";
import {SpinnerComponent} from "./components/spinner/spinner.component";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {store} from "./store";

@NgModule({
    imports: [
        StoreModule.provideStore(store),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
            maxAge: 30
        }),
        SharedModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        SpinnerComponent
    ],
    providers: [
        BusyIndicatorService,
        HttpGatewayService
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SpinnerComponent
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
