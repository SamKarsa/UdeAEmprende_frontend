import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BusinessComponent } from './pages/business/business.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'business', component: BusinessComponent }
];
