import { Routes, RouterModule } from '@angular/router';

import { FirstPage } from './first/first.page';
import { SecondPage } from './second/second.page';

export class AppUrls {
    public static firstUrl = 'first';
    public static secondUrl = 'second';
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
    }
];

export const routing = RouterModule.forRoot(appRoutes);
