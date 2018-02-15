import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { AlertService, UserService } from '../services/index';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignComponent {
    signupForm: FormGroup;
    loading = false;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService,
        private alertService: AlertService
      ) { this.createForm();}

    createForm() {
    this.signupForm = this.fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.required],
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }

  ngOnInit(){}

    register() {
        this.loading = true;
        this.userService.create( this.signupForm.value.firstName, this.signupForm.value.lastName, this.signupForm.value.email, this.signupForm.value.username,
                            this.signupForm.value.password,)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
