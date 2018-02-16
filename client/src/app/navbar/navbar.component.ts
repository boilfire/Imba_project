import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/index';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],


})
export class NavbarComponent {

  isLoggedIn =  this.service.isLoggedIn;

  constructor(
    private service: AuthenticationService
  ) { }


  logout() {
      this.service.logout()
    }
}
