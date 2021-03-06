import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AlertService, AuthenticationService } from '../services/index';

interface Credentials {
  email: string,
  password: string
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  loginForm: FormGroup;
      loading = false;
      wrongCredentials = false;

      constructor(
          private route: ActivatedRoute,
          private router: Router,
          private authenticationService: AuthenticationService,
          private alertService: AlertService,
          private fb: FormBuilder,
        ) { this.createForm();}

        createForm() {
        this.loginForm = this.fb.group({
          'username': [''],
          'password': ['']
        });
      }
      ngOnInit() {
          // reset login status
          this.authenticationService.logout();
      }

      login() {
          this.loading = true;
          this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
              .subscribe(
                  data => {
                      this.router.navigate(['/newsfeed']);
                  },
                  error => {
                    this.loginForm.controls['email'].setErrors({'incorrect': true});
                    this.loginForm.controls['password'].setErrors({'incorrect': true});
                    this.wrongCredentials = true;
                  });
      }
  }
