import { Routes } from '@angular/router';

/*Pages*/
import { HomeComponent } from './pages/home/home.component';
import { BusinessComponent } from './pages/business/business.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BusinessDataComponent } from './pages/business-data/business-data.component';
import { PersonalDataComponent } from './pages/personal-data/personal-data.component';

/*Components*/
import { SliderHomeComponent } from './components/slider-home/slider-home.component';
import { PersonalDataFormComponent } from './components/personal-data-form/personal-data-form.component';
import { BusinessDataFormComponent } from './components/business-data-form/business-data-form.component';
import { BusinessDetailComponent } from './components/business-detail/business-detail.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'business', component: BusinessComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'log-in', component: LogInComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'business-data', component: BusinessDataComponent },
    { path: 'personal-data', component: PersonalDataComponent},
    { path: 'personal-data-form', component: PersonalDataFormComponent},
    { path: 'business-data-form', component: BusinessDataFormComponent},
    { path: 'slider-home', component: SliderHomeComponent },
    { path: 'business/:id', component: BusinessDetailComponent }
];
