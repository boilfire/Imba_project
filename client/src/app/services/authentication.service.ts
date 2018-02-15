import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './services/errorhandling.service';


const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};

@Injectable()
export class AuthenticationService {

    isLoggedIn: boolean = false;
    constructor(
      private http: HttpClient,
      private eh: ErrorHandlingService) { }

    login(username, password) : Observable<boolean> {

      return this.http.post('api/login', {'username': username, 'password': password }, httpOptions).pipe(

        map(results => {

          if (results['token']) {

            localStorage.setItem('imba-token', results['token']);

            this.isLoggedIn = true;

            return true;

          } else {

            return false;

          }

        })
      );
    }


    logout(): void {

      this.isLoggedIn = false;

      localStorage.removeItem('imba-token');
    }
}
