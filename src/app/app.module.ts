import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { MediumWidgetModule } from 'ngx-medium-widget';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { CertificationComponent } from './certification/certification.component';
import { ContactDisplayComponent } from './contact-display/contact-display.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingScreenComponent,
    HeaderComponent,
    AboutmeComponent,
    HomeComponent,
    TechStackComponent,
    WorkExperienceComponent,
    CertificationComponent,
    ContactDisplayComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MediumWidgetModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
