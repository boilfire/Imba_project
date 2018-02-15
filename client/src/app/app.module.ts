import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ProfileComponent } from './profile/profile.component';
import { SignComponent } from './sign/sign.component';
import { AlertComponent } from './alert/alert.component';

import { AuthGuard } from './guards/auth.guard';

import { FormService } from './form/form.service';
import { AlertService, AuthenticationService, UserService } from './services/index';

import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    FormComponent,
    FooterComponent,
    NewsfeedComponent,
    ProfileComponent,
    SignComponent,
    AlertComponent,

  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],

  providers: [
       AuthGuard,
       AlertService,
       AuthenticationService,
       UserService,
       AppConfig,
       FormService,

],

  bootstrap: [AppComponent]
})
export class AppModule { }
