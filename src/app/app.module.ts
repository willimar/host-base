import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/standard/header/header.component';
import { FooterComponent } from './components/standard/footer/footer.component';
import { SettingsComponent } from './components/standard/settings/settings.component';
import { MenuComponent } from './components/standard/menu/menu.component';
import { AboutComponent } from './components/standard/about/about.component';
import { HomeComponent } from './components/standard/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
