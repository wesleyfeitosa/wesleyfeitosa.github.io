import { Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent, data: { animation: 'isLeft' } },
    { path: 'about', component: AboutMeComponent, data: { animation: 'isRight' } },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
//{ path: 'path/:routeParam', component: MyComponent },
//{ path: 'staticPath', component: ... },
//{ path: 'oldPath', redirectTo: '/staticPath' },
//{ path: ..., component: ..., data: { message: 'Custom' }

export default APP_ROUTES;