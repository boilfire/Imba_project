import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './services/errorhandling.service';

class Credentials {

  constructor(public username: string, public password: string) {

  }
}

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
      const authUrl = `api-token-auth/`;
      var credentials = new Credentials(username, password);

      return this.http.post(authUrl, credentials, httpOptions).pipe(

        map(results => {

          if (results['token']) {

            localStorage.setItem('imba-jwt-token', results['token']);

            this.isLoggedIn = true;

            return true;

          } else {

            return false;

          }

        }),

        catchError(this.eh.handleError<boolean>(`login username=${username}`,

    false))

);
    }

    logout(): void {

      this.isLoggedIn = false;

      localStorage.removeItem('bangular-jwt-token');
    }
}
