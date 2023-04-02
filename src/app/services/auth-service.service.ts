import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { RegisterFormDTO } from '../models/register-form-DTO';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

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
  login(email: string, password: string): Observable<any>{
    let body ={
      email: email,
      password: password
    }

    return this.http.post('https://localhost:7057/api/Users/Login', body);
  }

  logout(): void {
    this.isLoggedIn = false;
    sessionStorage.removeItem('token');
  }

  /**
   * Service to validate and save users into DB
   * 
   * @param user -> RegisterFormDTO
   * ATM only email and password is used while testing
   * agaisnt reqres service. Also no validations are done.
   * The email to success register is eve.holt@requires.in
   * Rest of fields are indiferent
   * Password is also required
   * @returns 
   */
  register(user: RegisterFormDTO): Observable<any>{
    let body ={
      email: user.email,
      password: user.password
    }

    return this.http.post('https://reqres.in/api/register', body);
  }
}