import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarouselheaderComponent } from './carouselheader/carouselheader.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselheaderComponent,
    HowitworksComponent,
    ContactusComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
