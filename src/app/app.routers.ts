import { AuthGuard } from './account/shared/auth.guard';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { PersonComponent } from './components/pages/person/person.component';
import { PersonTypeComponent } from './components/pages/person-type/person-type.component';
import { AboutComponent } from './components/standard/about/about.component';

export const ROUTES: Routes =
[
  {
    path: '',
    component: HomeComponent,
    children:
    [
      { path: '', component: HomeComponent },
      { path: 'person-type', component: PersonTypeComponent },
      { path: 'person', component: PersonComponent },
      { path: 'about', component: AboutComponent }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children:
    [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent }
    ]
  }
];
