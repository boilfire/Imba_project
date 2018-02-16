import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';


class Credentials {
  constructor(public username: string, public password: string) {

  }
}

const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};

@Injectable()
export class AuthenticationService {
    username: string;
    isLoggedIn: boolean = false;
    constructor(
      private http: HttpClient,
      ) { }

      login(username, password) : Observable<boolean> {
   const authUrl = `/api-token-auth/`;
   var credentials = new Credentials(username, password);
   return this.http
     .post(authUrl, credentials, httpOptions).pipe(
       map(results => {
         if (results['token']) {
           localStorage.setItem('imba-jwt-token', results['token']);
           localStorage.setItem('username', username)
           this.isLoggedIn = true;
           this.username = username;

           console.log(localStorage.getItem('username'),localStorage.getItem('username'),localStorage.getItem('imba-jwt-token'));
           return true;
         } else {
           return false;
         }
       }),


     );

}


    logout(): void {

      this.isLoggedIn = false;

      localStorage.removeItem('imba-jwt-token');
    }
}
