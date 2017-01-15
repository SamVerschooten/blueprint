import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home/home.page';
import { AboutPage } from './about/about.page';

export class AppUrls {
    public static homeUrl = 'home';
    public static aboutUrl = 'about';
}

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: AppUrls.homeUrl,
        pathMatch: 'full'
    },
    {
        path: AppUrls.homeUrl,
        component: HomePage
    },
    {
        path: AppUrls.aboutUrl,
        component: AboutPage
    }
];

export const routing = RouterModule.forRoot(appRoutes);
