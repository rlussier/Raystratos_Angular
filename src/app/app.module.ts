import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from "@angular/material/menu";
import {MatCardModule} from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SidenavComponent } from './sidenav/sidenav.component';  
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';  

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    SidenavComponent,
    HomeComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    FontAwesomeModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
