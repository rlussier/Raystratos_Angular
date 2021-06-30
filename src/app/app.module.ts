import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SidenavComponent } from './sidenav/sidenav.component';  

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
