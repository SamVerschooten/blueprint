import {NgModule, Optional, SkipSelf}       from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SharedModule} from "../shared.module";
import {BusyIndicatorService} from "./services/busy-indicator.service";
import {HttpGatewayService} from "./services/http-gateway.service";

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        BusyIndicatorService,
        HttpGatewayService
    ],
    exports: [
        HeaderComponent,
        FooterComponent
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
