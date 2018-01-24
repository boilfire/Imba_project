import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';


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




  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
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
       {
           provide: HTTP_INTERCEPTORS,
           useClass: JwtInterceptor,
           multi: true
       },

  bootstrap: [AppComponent]
})
export class AppModule { }
