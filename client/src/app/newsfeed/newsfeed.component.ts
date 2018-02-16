import { Component, OnInit } from '@angular/core';
import { Form } from '../models/form';
import { FormService } from '../form/form.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {



  constructor(
    private formService: FormService

  ) {}

  ngOnInit() {

  }



}
