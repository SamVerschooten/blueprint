import { Routes, RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";
import {FirstPage} from "../first/first.page";
import {SecondPage} from "../second/second.page";
import {NotFoundPage} from "../not-found/not-found.page";

export class AppUrls {
    public static firstUrl = 'first';
    public static secondUrl = 'second';
    public static notFoundUrl = '404';
}

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: AppUrls.firstUrl,
        pathMatch: 'full'
    },
    {
        path: AppUrls.firstUrl,
        component: FirstPage
    },
    {
        path: AppUrls.secondUrl,
        component: SecondPage
    },
    {
        path: AppUrls.notFoundUrl,
        component: NotFoundPage
    },
    {
        path: '**',
        redirectTo: AppUrls.notFoundUrl,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
      // guards go here
    ]
})
export class RoutingModule {
}
