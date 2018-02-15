import { Component, OnInit } from '@angular/core';
import { Form } from '../models/form';
import { FormService } from './form.service';
import { AlertService } from '../services/index';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: Form = {};
  loading = false;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private formService: FormService,
  ) { }

  ngOnInit(){}

    budget = [

      ['Small Project (0-100 EUR)', 'Medium Project (100- 400 EUR)', 'Large Project (400 - 2500 EUR)'],

      ['0-3 EUR/H', '4-8 EUR/H', '9-15 EUR/H']

  ];

  onSubmit() {
    this.loading = true;
    this.formService.createForm(this.form).subscribe(
      data => {
          this.alertService.success('Project posted successfully', true);
          this.router.navigate(['/newsfeed']);
      },
      error => {
          this.alertService.error(error);
          this.loading = false;
      });

  }



}
