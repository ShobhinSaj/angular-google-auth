import { Routes } from '@angular/router';
import { HomePageComponent } from '../app/components/home-page/home-page.component';
import { LoginPageComponent } from '../app/components/login-page/login-page.component';
import { PageNotFoundComponent } from '../app/components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


export const routes: Routes = [
    {
        'path':'',
        component:HomePageComponent,
        title:'Soffi.AI'
    },
    {
        'path':'home',
        component:HomePageComponent,
        title:'Soffi.AI'
    },
    {   'path':'login',
        component:LoginPageComponent,
        title:'Soffi.AI-Login'
        
    },
    {   'path':'dashboard',
        component:DashboardComponent,
        title:'Soffi.AI-Dashboard'
        
    },
    {   'path':'**',
        'pathMatch': 'full',  
        component: PageNotFoundComponent }
];
export default routes;

