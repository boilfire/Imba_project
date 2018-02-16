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
    private service: AuthenticationService;
  ) { }


  logout() {
      this.service.logout(this.loginForm.value.username, this.loginForm.value.password)
          .subscribe(
              data => {
                  isLoggedIn = false;
                  this.router.navigate(['/']);
              },
              error => {
                console.log(error);
              });

}
