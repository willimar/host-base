import { NgSelect2Module } from 'ng-select2';
import { Address } from './Models/Register/Person/Address';
import { AddressService } from './Services/registers-services/AddressService';
import { PersonService } from './Services/registers-services/PersonService';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ContactListComponent } from './components/controls/list-detail/contact-list/contact-list.component';
import { BoxComponent } from './components/controls/box/box.component';
import { ButtonComponent } from './components/controls/button/button.component';
import { ContactItemComponent } from './components/controls/list-detail/contact-list/contact-item/contact-item.component';
import { AddressListComponent } from './components/controls/list-detail/address-list/address-list.component';
import { Person } from './Models/Register/Person/Person';
import { AddressItemComponent } from './components/controls/list-detail/address-list/address-item/address-item.component';
import { InputCheckComponent } from './components/controls/input-check/input-check.component';
import { PersonInfoComponent } from './components/controls/list-detail/person-info/person-info.component';

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
    InputDateComponent,
    ContactListComponent,
    BoxComponent,
    ButtonComponent,
    ContactItemComponent,
    AddressListComponent,
    AddressItemComponent,
    InputCheckComponent,
    PersonInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelect2Module,
    RouterModule.forRoot(ROUTES),
    AgGridModule.withComponents([])
  ],
  providers: [FormBuilder, PersonService, Person, AddressService, Address],
  bootstrap: [AppComponent]
})
export class AppModule { }
