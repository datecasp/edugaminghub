import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';
import { LoginFormDTO } from 'src/app/models/login-form-DTO';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor( public dialogRef: MatDialogRef<LoginDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: LoginFormDTO,){}
}
