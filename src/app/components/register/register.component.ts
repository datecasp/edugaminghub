import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  //EventEmitter of Object Type to send the Form values (email and password)
  @Output() registerOutput: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(
    private _formBulder: FormBuilder,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm.reset();
    this.registerForm = this._formBulder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
    });
  }

  get name() {
    return this.registerForm.get('name');
  }

  get surname() {
    return this.registerForm.get('surname');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  submitRegister() {
    if (this.registerForm.valid) {
      this.registerOutput.emit(this.registerForm.value);
    }
  }
}
