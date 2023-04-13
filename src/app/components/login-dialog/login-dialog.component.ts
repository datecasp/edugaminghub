import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginFormDTO } from 'src/app/models/login-form-DTO';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  loginForm: FormGroup = new FormGroup({});
  @Output() loginOutput: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(
    private _formBulder: FormBuilder,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginFormDTO,
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

  onNoClick(): void {
    this.dialogRef.close();
  }
}
