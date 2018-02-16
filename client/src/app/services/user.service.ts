import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { User } from '../models/user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }






    create(firstName, lastName, email, username, password ) {
        return this.http.post('/api/register/', {"first_name": firstName, "last_name": lastName,
                                                                  "email": email, "username": username,
                                                                  "password": password} , httpOptions);
    }

  

    // private helper methods

  //  private jwt() {
        // create authorization header with jwt token
    //    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      //  if (currentUser && currentUser.token) {
        //    let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
        //    return new RequestOptions({ headers: headers });
      //  }
    //}
}
