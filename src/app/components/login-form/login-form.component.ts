import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  //EventEmitter of Object Type to send the Form values (email and password)
  @Output() loginOutput: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(
    private _formBulder: FormBuilder,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm.reset();
    this.loginForm = this._formBulder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
    });
  }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submitLogin() {
    if (this.loginForm.valid) {
      this.loginOutput.emit(this.loginForm.value);
    }
  }
}
