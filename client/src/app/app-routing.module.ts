import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ProfileComponent } from './profile/profile.component';
import { SignComponent } from './sign/sign.component';
import { AlertComponent } from './alert/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { AlertService, AuthenticationService, UserService } from './services/index';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login' , component : LoginComponent },
  {path: 'recieve' , component : FormComponent },
  {path: 'profile' , component : ProfileComponent },
  {path: 'newsfeed' , component : NewsfeedComponent },
  {path: 'sign' , component : SignComponent },

  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
