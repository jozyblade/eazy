import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PartnersComponent } from './partners/partners.component';
import { AboutComponent } from './about/about.component';
import { ConnectComponent } from './connect/connect.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PartnersComponent,
    AboutComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
