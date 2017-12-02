import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'Provide' , component : LoginComponent },
  {path: 'Recieve' , component : FormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
