import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppConfig } from '../app.config';
import { User } from '../models/user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserService {
    constructor(private http: HttpClient, private config: AppConfig) { }




    getAll() {
        return this.http.get(this.config.apiUrl + '/users');
    }

    getById(_id: string) {
        return this.http.get(this.config.apiUrl + '/users/' );
    }

    create(user: User) {
        return this.http.post(this.config.apiUrl + '/register/', user, httpOptions);
    }

    update(user: User) {
        return this.http.put(this.config.apiUrl + '/users/' , user);
    }

    delete(_id: string) {
        return this.http.delete(this.config.apiUrl + '/users/' );
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
