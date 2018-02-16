import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  postForm: FormGroup;
  loading = false;

  constructor(
    private router: Router,

    private formService: FormService,
    private fb: FormBuilder,
  ) { this.createForm() }

  createForm() {
  this.postForm = this.fb.group({
    'projectName': [''],
    'projectD': [''],
    'skills': [''],
    'budget': [''],
  });
  }
  ngOnInit(){}



  onSubmit() {
    console.log(this.postForm)
    this.loading = true;
    this.formService.createForm(this.postForm.value.projectName,this.postForm.value.projectD,
                              this.postForm.value.skills,this.postForm.value.budget).subscribe(
      data => {
          this.router.navigate(['/newsfeed']);
      },
      error => {
          console.log(error);
          this.loading = false;
      });

  }



}
