import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  budget:string[];

  constructor() { }

  ngOnInit() {

    this.budget = ['Small Project (0-100 EUR)', 'Medium Project (100- 400 EUR)', 'Large Project (400 - 2500 EUR)'];

  }

}
