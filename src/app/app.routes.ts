import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BusinessComponent } from './pages/business/business.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'business', component: BusinessComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'log-in', component: LogInComponent },
    { path: 'about-us', component: AboutUsComponent },
];
