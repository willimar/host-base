import { PersonComponent } from './components/pages/person/person.component';
import { PersonTypeComponent } from './components/pages/person-type/person-type.component';
import { Routes } from '@angular/router'

import { AboutComponent } from './components/standard/about/about.component';
import { HomeComponent } from './components/standard/home/home.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'person-type', component: PersonTypeComponent },
    { path: 'person', component: PersonComponent },
    { path: 'about', component: AboutComponent }
]