import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routers';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/standard/header/header.component';
import { FooterComponent } from './components/standard/footer/footer.component';
import { SettingsComponent } from './components/standard/settings/settings.component';
import { MenuComponent } from './components/standard/menu/menu.component';
import { AboutComponent } from './components/standard/about/about.component';
import { HomeComponent } from './components/standard/home/home.component';
import { PersonTypeComponent } from './components/pages/person-type/person-type.component';
import { AgGridModule } from 'ag-grid-angular';

import { HttpClientModule } from '@angular/common/http';
import { GridControlComponent } from './components/controls/grid-control/grid-control.component';
import { PersonComponent } from './components/pages/person/person.component';
import { StandardFormComponent } from './components/controls/standard-form/standard-form.component';
import { InputComponent } from './components/controls/input/input.component';
import { InputDateComponent } from './components/controls/input-date/input-date.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent,
    PersonTypeComponent,
    GridControlComponent,
    PersonComponent,
    StandardFormComponent,
    InputComponent,
    InputDateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    AgGridModule.withComponents([])
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
