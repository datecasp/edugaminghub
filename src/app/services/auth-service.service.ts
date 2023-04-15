import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { RegisterFormDTO } from '../models/register-form-DTO';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  loggedObs = new Subject();

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  constructor(private http: HttpClient) {}

  /**
   * Service to log users into theirs accounts
   * ATM uses reqres service
   * For success login email is eve.holt@requires.in
   * Password is mandatory but irrelevant value
   * @param email
   * @param password
   * @returns
   */
  login(email: string, password: string): Observable<any> {
    let body = {
      email: email,
      password: password,
    };
    return this.http.post('https://localhost:7057/api/Users/Login', body);
  }

  logout(): void {
    this.isLoggedIn = false;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
  }

  isLogged() {
    return this.loggedObs.asObservable();
  }

  /**
   * Service to validate and save users into DB
   *
   * ATM only email and password are used while testing
   * agaisnt reqres service. Also no validations are done.
   * The email to success register is eve.holt@requires.in
   * Rest of fields are indiferent
   * Password is also required
   * @returns
   */
  register(
    name: string,
    surname: string,
    email: string,
    password: string
  ): Observable<any> {
    let body = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      role: 1, //by default
    };

    return this.http.post('https://localhost:7057/api/Users', body);
  }
}
