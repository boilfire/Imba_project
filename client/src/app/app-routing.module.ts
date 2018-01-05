import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ProfileComponent } from './profile/profile.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login' , component : LoginComponent },
  {path: 'recieve' , component : FormComponent },
  {path: 'profile' , component : ProfileComponent },
  {path: 'newsfeed' , component : NewsfeedComponent },
  {path: 'sign' , component : SignComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
