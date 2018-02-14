import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {



  constructor(

  ) {


  }

  ngOnInit() {
  }

  groupSelected: string;


  statesComplex: any[] = [
  { id: 1, name: 'Alabama', region: 'South' },
  { id: 2, name: 'Alaska', region: 'West' },
  { id: 3, name: 'Arizona', region: 'West' },
  { id: 4, name: 'Arkansas', region: 'South' },
  { id: 5, name: 'California', region: 'West' },
  { id: 6, name: 'Colorado', region: 'West' },
  { id: 7, name: 'Connecticut', region: 'Northeast' },
  { id: 8, name: 'Delaware', region: 'South' },
  { id: 9, name: 'Florida', region: 'South' },
  { id: 10, name: 'Georgia', region: 'South' },
  { id: 11, name: 'Hawaii', region: 'West' },
  { id: 12, name: 'Idaho', region: 'West' },
  { id: 13, name: 'Illinois', region: 'Midwest' },
  { id: 14, name: 'Indiana', region: 'Midwest' },
  { id: 15, name: 'Iowa', region: 'Midwest' },
  { id: 16, name: 'Kansas', region: 'Midwest' },
  { id: 17, name: 'Kentucky', region: 'South' },
  { id: 18, name: 'Louisiana', region: 'South' },
  { id: 19, name: 'Maine', region: 'Northeast' },
  { id: 21, name: 'Maryland', region: 'South' },
  { id: 22, name: 'Massachusetts', region: 'Northeast' },
  { id: 23, name: 'Michigan', region: 'Midwest' },
  { id: 24, name: 'Minnesota', region: 'Midwest' },
  { id: 25, name: 'Mississippi', region: 'South' },
  { id: 26, name: 'Missouri', region: 'Midwest' },

];
}
