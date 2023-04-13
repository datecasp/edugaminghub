import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../components/login-dialog/login-dialog.component';
import { LoginFormDTO } from '../models/login-form-DTO';
import { AuthService } from './auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginDialogService {
  loginForm: LoginFormDTO = {
    email: '',
    password: '',
  };
  isLogged: boolean = false;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService
  ) {}

  async login() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      data: { email: this.loginForm.email, password: this.loginForm.password },
    });

    dialogRef.afterClosed().subscribe((result) => {
      let { email, password } = result;
      //:TODO update deprecated subscribe to next?
      this.authService.login(email, password).subscribe(
        (response) => {
          if (response.token) {
            sessionStorage.setItem('token', response.token);
            sessionStorage.setItem('id', response.id);
            this.isLogged = true;
          }
        },
        (error) =>{ console.error('Error: ${{error}}')},
        () => console.info('Request done')
      );
    });
  }
}
