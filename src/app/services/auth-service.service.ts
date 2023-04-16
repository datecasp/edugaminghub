import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { RegisterFormDTO } from '../models/register-form-DTO';
import { UserDTO } from '../models/user-DTO';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  loggedObs = new Subject();
  userDataObserv = new Subject();
  completeName = '';

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

  getUserById(id: number): Observable<any> {
    return this.http.get('https://localhost:7057/api/Users/'+ id);
  }

  logout(): void {
    this.isLoggedIn = false;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userName');
  }

  userData() {
    return this.userDataObserv.asObservable();
  }

  isLogged() {
    return this.loggedObs.asObservable();
  }

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
